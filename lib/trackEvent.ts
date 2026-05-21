"use client";

import { track } from "@vercel/analytics";
import { trackSheet } from "./trackSheet";

/**
 * Combined tracker: fires Vercel Analytics + Google Sheets simultaneously.
 */
export function trackEvent(
  event: string,
  props?: Record<string, string | number>
) {
  // trackSheet first — keepalive fetch must start before navigation
  trackSheet(event, props);
  try {
    track(event, props);
  } catch {
    // silent fail
  }
}
