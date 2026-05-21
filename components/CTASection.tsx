"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useSharedCountdown } from "@/hooks/useSharedCountdown";
import { trackEvent } from "@/lib/trackEvent";

function Countdown() {
  const secs = useSharedCountdown();

  if (secs === null) {
    return (
      <div className="font-display text-[28px] font-extrabold tabular-nums text-white/30">
        --:--:--
      </div>
    );
  }

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");

  return (
    <div className="flex items-center gap-1 font-display text-[28px] font-extrabold tabular-nums text-white">
      {h}
      <span className="mx-0.5 text-white/40">:</span>
      {m}
      <span className="mx-0.5 text-white/40">:</span>
      {s}
    </div>
  );
}

const CHECKLIST = [
  "Розбір твоєї фінансової ситуації",
  "Відповіді на твої запитання",
  "План перших кроків інвестора",
];

export default function CTASection() {
  return (
    <section className="section section-dark overflow-hidden">
      {/* Glow left */}
      <div
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #5abfff 0%, transparent 70%)" }}
      />
      {/* Glow right */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #94d4fd 0%, transparent 70%)" }}
      />

      <div className="container-px relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="eyebrow-inv">
              <span className="h-1.5 w-1.5 rounded-full bg-sky1" />
              Консультація · 1 на 1
            </span>

            <h2 className="h2 mt-5 text-white">
              Дізнайся більше про{" "}
              <span className="text-sky2">«BY INVEST 3.0»</span>
            </h2>

            <p className="lead mt-4 text-white/70">
              Запишись на безкоштовну консультацію, щоб дізнатися деталі
              навчання та отримати чіткі поради у вигляді кроків для старту в
              інвестуванні —{" "}
              <span className="font-medium text-sky2">
                особливо якщо є страх почати, бо немає розуміння чи вам це підійде
              </span>
            </p>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[14px] text-white/80">
                  <Check size={15} className="shrink-0 text-sky2" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-5 lg:items-end">
            {/* Timer widget */}
            <div className="w-full rounded-[18px] border border-white/15 px-6 py-4 lg:w-auto lg:min-w-[320px]"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sky2" />
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-white/60">
                    До кінця безкоштовної<br />консультації
                  </span>
                </div>
                <Countdown />
              </div>
            </div>

            {/* CTA button */}
            <Link
              href="/diagnostics"
              onClick={() => trackEvent("cta_click", { location: "cta_section" })}
              className="flex w-full flex-col items-center justify-center gap-0.5 rounded-full bg-sky-gradient px-8 py-4 font-display text-[15px] font-extrabold text-navyDeep animate-pulse-glow shadow-sky transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(90,191,255,0.45)] lg:w-auto"
            >
              <span className="flex items-center justify-center gap-2 text-center">
                Записатися на безкоштовну консультацію
                <ArrowRight size={18} className="shrink-0" />
              </span>
              <span className="text-center text-[10px] font-semibold uppercase tracking-[1.5px] opacity-50">
                Для початківців в інвестиціях
              </span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
