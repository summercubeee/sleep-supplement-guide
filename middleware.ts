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

export function middleware(request: NextRequest) {
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
