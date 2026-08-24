import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_UA_PATTERNS = [
  /scrapy/i,
  /python-requests/i,
  /python-urllib/i,
  /^curl/i,
  /^wget/i,
  /^java\//i,
  /go-http-client/i,
  /^axios/i,
  /node-fetch/i,
];

// RageClickGuard(components/RageClickGuard.tsx)가 1초 내 3회 이상 클릭을 감지하면
// 심는 쿠키. 애드센스 무효클릭 소명 심사 중이라, 감지 즉시 "차단됨"을 알리지 않고
// 진짜 404처럼 보이는 응답만 계속 내려 광고 스크립트 자체가 로드되지 않게 한다.
const RAGE_CLICK_COOKIE = "rc_flag";
const FAKE_404_HTML = `<!DOCTYPE html><html lang="ko"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>404: This page could not be found.</title></head><body style="font-family:-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',sans-serif;background:#fff;color:#000;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center"><div style="display:flex;align-items:center"><h1 style="margin:0 20px 0 0;padding:0 23px 0 0;border-right:1px solid rgba(0,0,0,.3);font-size:24px;font-weight:500;line-height:49px">404</h1><div style="font-size:14px;line-height:49px">This page could not be found.</div></div></body></html>`;

// 사이트 전체 임시 점검 모드. 의학정보 콘텐츠 관련 애드센스 정책 리스크 검토를 위해
// 콘텐츠는 그대로 두고 미들웨어에서 전체 요청을 점검 안내 페이지로 대체한다.
// 원상복구 시 이 블록만 제거하면 된다.
const MAINTENANCE_MODE = true;
const MAINTENANCE_HTML = `<!DOCTYPE html><html lang="ko"><head><meta charSet="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>서비스 점검 중입니다</title></head><body style="font-family:-apple-system,BlinkMacSystemFont,Roboto,'Segoe UI',sans-serif;background:#fafafa;color:#27272a;margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px"><div><h1 style="font-size:22px;margin:0 0 12px">현재 서비스 점검 중입니다</h1><p style="font-size:15px;color:#71717a;margin:0">더 정확하고 안전한 정보를 준비하고 있습니다. 빠른 시일 내에 다시 찾아뵙겠습니다.</p></div></body></html>`;

export function middleware(request: NextRequest) {
  if (MAINTENANCE_MODE) {
    return new NextResponse(MAINTENANCE_HTML, {
      status: 200,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  if (request.cookies.get(RAGE_CLICK_COOKIE)?.value === "1") {
    return new NextResponse(FAKE_404_HTML, {
      status: 404,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  const ua = request.headers.get("user-agent") ?? "";

  if (BLOCKED_UA_PATTERNS.some((p) => p.test(ua))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon).*)",
};
