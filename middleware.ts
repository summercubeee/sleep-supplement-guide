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

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") ?? "";

  if (BLOCKED_UA_PATTERNS.some((p) => p.test(ua))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon).*)",
};
