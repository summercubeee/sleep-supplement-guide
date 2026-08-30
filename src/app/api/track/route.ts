import { NextRequest, NextResponse } from 'next/server';
import { recordEvent } from '@/lib/tracking';

export const runtime = 'edge';

function str(v: unknown, max: number): string | undefined {
  return typeof v === 'string' && v.length > 0 ? v.slice(0, max) : undefined;
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const type = body.type;
  const path = str(body.path, 200);
  const visitorId = str(body.visitorId, 100);

  if ((type !== 'pageview' && type !== 'click') || !path || !visitorId) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  try {
    await recordEvent({
      type,
      path,
      visitorId,
      referrer: str(body.referrer, 500) || '',
      utmSource: str(body.utmSource, 100),
      utmMedium: str(body.utmMedium, 100),
      utmCampaign: str(body.utmCampaign, 100),
      utmTerm: str(body.utmTerm, 100),
      utmContent: str(body.utmContent, 100),
      target: str(body.target, 100),
    });
  } catch {
    // KV 미설정 등으로 실패해도 트래킹 오류가 사이트 이용에 영향을 주면 안 됨
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  return NextResponse.json({ ok: true });
}
