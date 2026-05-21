"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useSharedCountdown } from "@/hooks/useSharedCountdown";
import { trackEvent } from "@/lib/trackEvent";

function Countdown() {
  const secs = useSharedCountdown();

  if (secs === null) return null;

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
      <span className="h-2 w-2 animate-pulse rounded-full bg-sky1" />
      <span className="text-[11px] font-semibold uppercase tracking-[2px] text-white/70">
        До закриття бонусу
      </span>
      <div className="flex items-center gap-1 font-display text-[20px] font-extrabold tabular-nums text-white">
        {h}
        <span className="mx-0.5 text-white/40">:</span>
        {m}
        <span className="mx-0.5 text-white/40">:</span>
        {s}
      </div>
    </div>
  );
}

export default function CTABottom() {
  return (
    <section id="cta" className="section section-dark overflow-hidden text-center">
      {/* Glow top */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, #5abfff 0%, transparent 55%)",
        }}
      />
      {/* Glow bottom-right */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 85% 110%, #94d4fd 0%, transparent 50%)",
        }}
      />

      <div className="container-px relative flex flex-col items-center gap-8">
        {/* Badge */}
        <span className="eyebrow-inv">
          <span className="h-1.5 w-1.5 rounded-full bg-sky1" />
          Важливо
        </span>

        {/* Heading */}
        <h2 className="h2 max-w-3xl text-white">
          Не чекайте, поки{" "}
          <span className="text-sky2">інфляція</span>
          <br />
          знецінить ваші зусилля
        </h2>

        {/* Description */}
        <p className="lead max-w-xl text-white/70">
          Запишіться на безкоштовну консультацію та дізнайтесь усі деталі
          навчання, поточну ціну та доступні бонуси цього потоку
        </p>

        {/* Countdown */}
        <Countdown />

        {/* CTA button */}
        <Link
          href="/diagnostics"
          onClick={() => trackEvent("cta_click", { location: "cta_bottom" })}
          className="inline-flex flex-col items-center gap-0.5 rounded-full bg-sky-gradient px-9 py-4 font-display text-[15px] font-extrabold text-navyDeep animate-pulse-glow shadow-sky transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(90,191,255,0.45)]"
        >
          <span className="flex items-center gap-2">
            Записатися на безкоштовну консультацію
            <ArrowRight size={18} />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[1.5px] opacity-50">
            Для початківців в інвестиціях
          </span>
        </Link>

        {/* Trust line */}
        <p className="text-[12px] font-semibold uppercase tracking-[2px] text-white/50">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-sky1 align-middle" />
          Live · Гарантія повернення коштів
        </p>
      </div>
    </section>
  );
}
