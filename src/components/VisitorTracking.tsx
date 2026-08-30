'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const VISITOR_KEY = 'sr_vid';

function getVisitorId(): string {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return 'anon';
  }
}

// trailingSlash 설정이 없으므로(기본값 false) 슬래시 없이 호출한다.
const TRACK_ENDPOINT = '/api/track';

function send(payload: Record<string, unknown>) {
  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon(TRACK_ENDPOINT, new Blob([body], { type: 'application/json' }));
  } else {
    fetch(TRACK_ENDPOINT, {
      method: 'POST',
      body,
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
    }).catch(() => {});
  }
}

// 애드센스 사이트라 클릭 수익은 애드센스 리포트에서 이미 확인 가능함 -
// 여기서는 방문자/유입채널 집계만 한다(CTA 클릭 추적 없음).
export default function VisitorTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const visitorIdRef = useRef('');

  useEffect(() => {
    visitorIdRef.current = getVisitorId();
  }, []);

  useEffect(() => {
    send({
      type: 'pageview',
      path: pathname,
      referrer: document.referrer,
      visitorId: visitorIdRef.current || getVisitorId(),
      utmSource: searchParams.get('utm_source') || undefined,
      utmMedium: searchParams.get('utm_medium') || undefined,
      utmCampaign: searchParams.get('utm_campaign') || undefined,
      utmTerm: searchParams.get('utm_term') || undefined,
      utmContent: searchParams.get('utm_content') || undefined,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return null;
}
