/**
 * Sends a tracking event to Google Sheets via our API route.
 * Fire-and-forget — never blocks UI interaction.
 */
export async function trackSheet(
  event: string,
  props?: Record<string, string | number>
) {
  try {
    await fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, ...props }),
      keepalive: true, // ensures request completes even after page navigation
    });
  } catch {
    // Silent fail — analytics should never break UX
  }
}
