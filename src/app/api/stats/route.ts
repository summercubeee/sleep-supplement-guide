import { NextRequest, NextResponse } from 'next/server';
import { getStats } from '@/lib/tracking';

export const runtime = 'edge';

function kstToday(): string {
  const kst = new Date(Date.now() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

function shiftDate(date: string, days: number): string {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export async function GET(req: NextRequest) {
  const secret = process.env.STATS_SECRET;
  const key = req.nextUrl.searchParams.get('key');
  if (!secret || key !== secret) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }

  const days = Number(req.nextUrl.searchParams.get('days') || '7');
  const to = req.nextUrl.searchParams.get('to') || kstToday();
  const from = req.nextUrl.searchParams.get('from') || shiftDate(to, -(days - 1));

  try {
    const stats = await getStats(from, to);
    return NextResponse.json({ ok: true, ...stats });
  } catch {
    return NextResponse.json({ ok: false, error: 'kv_unavailable' }, { status: 503 });
  }
}
