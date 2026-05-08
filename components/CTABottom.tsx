"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

function Countdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    // Count down to end of next Sunday (end of week)
    const end = new Date(now);
    const daysUntilSunday = (7 - end.getDay()) % 7 || 7;
    end.setDate(end.getDate() + daysUntilSunday);
    end.setHours(23, 59, 59, 999);
    return Math.floor((end.getTime() - now.getTime()) / 1000);
  };

  const [secs, setSecs] = useState(0);

  useEffect(() => {
    setSecs(getSecondsLeft());
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const d = String(Math.floor(secs / 86400)).padStart(2, "0");
  const h = String(Math.floor((secs % 86400) / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");

  const parts = [d, h, m, s];

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
      <span className="h-2 w-2 animate-pulse rounded-full bg-sky1" />
      <span className="text-[11px] font-semibold uppercase tracking-[2px] text-white/70">
        До закриття бонусу
      </span>
      <div className="flex items-center gap-1 font-display text-[20px] font-extrabold tabular-nums text-white">
        {parts.map((p, i) => (
          <span key={i} className="flex items-center gap-1">
            {p}
            {i < parts.length - 1 && (
              <span className="mx-0.5 text-white/40">:</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CTABottom() {
  return (
    <section id="cta" className="section section-white">
      <div className="container-px">
        <div
          className="relative overflow-hidden rounded-[32px] px-8 py-20 text-center md:px-16"
          style={{
            background:
              "linear-gradient(160deg, #0f2744 0%, #1a3a6b 45%, #1e4f8c 100%)",
          }}
        >
          {/* Subtle glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, #5ab4f5 0%, transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
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
              className="inline-flex flex-col items-center gap-0.5 rounded-full bg-white px-9 py-4 font-display text-[15px] font-extrabold text-navyDeep shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
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
        </div>
      </div>
    </section>
  );
}
