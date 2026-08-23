"use client";

import { useEffect } from "react";

const WINDOW_MS = 1000;
const THRESHOLD = 3;
const COOKIE_NAME = "rc_flag";

export default function RageClickGuard() {
  useEffect(() => {
    let timestamps: number[] = [];
    let lastTarget: EventTarget | null = null;

    function handleClick(e: MouseEvent) {
      if (e.target !== lastTarget) {
        timestamps = [];
        lastTarget = e.target;
      }

      const now = Date.now();
      timestamps.push(now);
      while (timestamps.length > 0 && now - timestamps[0] > WINDOW_MS) {
        timestamps.shift();
      }
      if (timestamps.length >= THRESHOLD) {
        document.cookie = `${COOKIE_NAME}=1; path=/; max-age=86400; samesite=lax`;
        window.location.reload();
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
