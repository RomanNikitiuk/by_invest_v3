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
  track(event, props);
  trackSheet(event, props);
}
