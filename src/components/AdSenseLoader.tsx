"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

const EXCLUDED_PATHS = ["/sources"];

export default function AdSenseLoader() {
  const pathname = usePathname();
  const excluded = EXCLUDED_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  if (excluded) return null;

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2446136440410779"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
