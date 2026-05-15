"use client";

import { useEffect, useState } from "react";

function getSecondsUntilMidnight(): number {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(23, 59, 59, 999);
  return Math.max(0, Math.floor((midnight.getTime() - now.getTime()) / 1000));
}

export function useSharedCountdown() {
  const [secs, setSecs] = useState<number | null>(null);

  useEffect(() => {
    setSecs(getSecondsUntilMidnight());
    const id = setInterval(() => setSecs(getSecondsUntilMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  return secs;
}
