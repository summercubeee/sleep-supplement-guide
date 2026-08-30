import { getRedis } from '@/lib/redis';

const RETENTION_SECONDS = 60 * 60 * 24 * 120; // 120일 보관 후 자동 만료 (무료 KV 용량 관리)

// 써머 대시보드(summer-dashboard)가 같은 Redis 인스턴스를 여러 사이트가 공유해도
// 키가 안 겹치도록 사이트별 네임스페이스를 둔다. summer-dashboard의 lib/sites.ts에
// 등록한 id와 반드시 같아야 통합 집계에 잡힌다.
const SITE_ID = process.env.SITE_ID || 'sleep-supplement';

export interface TrackPayload {
  type: 'pageview' | 'click';
  path: string;
  referrer: string;
  visitorId: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  target?: string;
}

// 검색어 자체는 리퍼러에 안 실리므로 유입 채널까지만 분류한다.
export function classifyChannel(referrer: string, utmSource?: string): string {
  if (utmSource) return utmSource.toLowerCase();
  if (!referrer) return 'direct';

  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    const path = new URL(referrer).pathname;

    if (host.endsWith('naver.com')) {
      if (host === 'search.naver.com' || path.startsWith('/search')) return 'naver_search';
      if (host === 'blog.naver.com') return 'naver_blog';
      if (host === 'cafe.naver.com') return 'naver_cafe';
      return 'naver_other';
    }
    if (host.includes('google.')) return 'google_search';
    if (host.endsWith('daum.net')) return 'daum_search';
    if (host.endsWith('dcinside.com')) return 'dcinside';
    if (host.endsWith('kakaocorp.com') || host === 'kakao.com') return 'kakao';
    if (host.endsWith('instagram.com')) return 'instagram';
    return `referral:${host}`;
  } catch {
    return 'direct';
  }
}

function kstDate(d: Date = new Date()): string {
  const kst = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

export async function recordEvent(p: TrackPayload): Promise<void> {
  const date = kstDate();
  const channel = classifyChannel(p.referrer, p.utmSource);
  const campaign = p.utmCampaign || 'none';

  const pipeline = getRedis().pipeline();
  const ns = `${SITE_ID}:`;

  if (p.type === 'pageview') {
    pipeline.incr(`${ns}pv:${date}`);
    pipeline.sadd(`${ns}uv:${date}`, p.visitorId);
    pipeline.hincrby(`${ns}channels:${date}`, channel, 1);
    pipeline.hincrby(`${ns}campaigns:${date}`, campaign, 1);
    pipeline.hincrby(`${ns}paths:${date}`, p.path, 1);
    pipeline.expire(`${ns}pv:${date}`, RETENTION_SECONDS);
    pipeline.expire(`${ns}uv:${date}`, RETENTION_SECONDS);
    pipeline.expire(`${ns}channels:${date}`, RETENTION_SECONDS);
    pipeline.expire(`${ns}campaigns:${date}`, RETENTION_SECONDS);
    pipeline.expire(`${ns}paths:${date}`, RETENTION_SECONDS);
  } else {
    const target = p.target || 'unknown';
    pipeline.hincrby(`${ns}cta:${date}`, target, 1);
    pipeline.hincrby(`${ns}cta_channel:${date}`, `${target}|${channel}`, 1);
    pipeline.expire(`${ns}cta:${date}`, RETENTION_SECONDS);
    pipeline.expire(`${ns}cta_channel:${date}`, RETENTION_SECONDS);
  }

  await pipeline.exec();
}

interface DayStat {
  date: string;
  pageviews: number;
  uniqueVisitors: number;
  ctaClicks: number;
}

export interface StatsResult {
  range: { from: string; to: string };
  days: DayStat[];
  totals: { pageviews: number; uniqueVisitorDaySum: number; ctaClicks: number };
  channels: Record<string, number>;
  campaigns: Record<string, number>;
  paths: Record<string, number>;
  cta: Record<string, number>;
  ctaByChannel: Record<string, number>;
}

export async function getStats(fromDate: string, toDate: string): Promise<StatsResult> {
  const dates = enumerateDates(fromDate, toDate);

  const result: StatsResult = {
    range: { from: fromDate, to: toDate },
    days: [],
    totals: { pageviews: 0, uniqueVisitorDaySum: 0, ctaClicks: 0 },
    channels: {},
    campaigns: {},
    paths: {},
    cta: {},
    ctaByChannel: {},
  };

  const redis = getRedis();
  const ns = `${SITE_ID}:`;

  for (const date of dates) {
    const [pv, uvSet, channels, campaigns, paths, cta, ctaByChannel] = await Promise.all([
      redis.get<number>(`${ns}pv:${date}`),
      redis.smembers(`${ns}uv:${date}`),
      redis.hgetall<Record<string, number>>(`${ns}channels:${date}`),
      redis.hgetall<Record<string, number>>(`${ns}campaigns:${date}`),
      redis.hgetall<Record<string, number>>(`${ns}paths:${date}`),
      redis.hgetall<Record<string, number>>(`${ns}cta:${date}`),
      redis.hgetall<Record<string, number>>(`${ns}cta_channel:${date}`),
    ]);

    const pvNum = pv || 0;
    const uvNum = uvSet?.length || 0;
    const ctaNum = cta ? Object.values(cta).reduce((a, b) => a + Number(b), 0) : 0;

    result.days.push({ date, pageviews: pvNum, uniqueVisitors: uvNum, ctaClicks: ctaNum });
    result.totals.pageviews += pvNum;
    result.totals.uniqueVisitorDaySum += uvNum;
    result.totals.ctaClicks += ctaNum;

    mergeCounts(result.channels, channels);
    mergeCounts(result.campaigns, campaigns);
    mergeCounts(result.paths, paths);
    mergeCounts(result.cta, cta);
    mergeCounts(result.ctaByChannel, ctaByChannel);
  }

  return result;
}

function mergeCounts(target: Record<string, number>, src?: Record<string, number> | null) {
  if (!src) return;
  for (const [k, v] of Object.entries(src)) {
    target[k] = (target[k] || 0) + Number(v);
  }
}

function enumerateDates(from: string, to: string): string[] {
  const dates: string[] = [];
  const cur = new Date(`${from}T00:00:00Z`);
  const end = new Date(`${to}T00:00:00Z`);
  while (cur <= end) {
    dates.push(cur.toISOString().slice(0, 10));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return dates;
}
