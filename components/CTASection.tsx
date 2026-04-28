"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

function Countdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    return Math.floor((end.getTime() - now.getTime()) / 1000);
  };

  const [secs, setSecs] = useState(getSecondsLeft);

  useEffect(() => {
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");

  return (
    <div className="flex items-center gap-1 font-display text-[28px] font-extrabold tabular-nums text-navyDeep">
      {h}
      <span className="mx-0.5 text-muted">:</span>
      {m}
      <span className="mx-0.5 text-muted">:</span>
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
    <section className="section section-blue">
      <div className="container-px">
        <div className="rounded-[28px] border border-line bg-white2 p-8 shadow-card md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-navyDeep px-4 py-1.5 text-[12px] font-bold uppercase tracking-[1.5px] text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-sky1" />
                Діагностика · 1 на 1
              </span>

              <h2 className="mt-5 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-tight tracking-[-0.02em] text-textDark">
                Дізнайся більше про{" "}
                <span className="title-gradient italic">«BY INVEST 3.0»</span>
              </h2>

              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                За 30 хв простими словами покажемо, що у тебе зараз не працює в
                грошах, і як це виправити. Зустріч проходить один на один з нашим
                фахівцем.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {CHECKLIST.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[14px] text-textDark">
                    <Check size={15} className="shrink-0 text-sky2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-start gap-5 lg:items-end">
              {/* Timer widget */}
              <div className="w-full rounded-[18px] border border-line bg-bg px-6 py-4 lg:w-auto lg:min-w-[320px]">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-sky2" />
                    <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-muted">
                      До кінця безкоштовної<br />діагностики
                    </span>
                  </div>
                  <Countdown />
                </div>
              </div>

              {/* CTA button */}
              <Link
                href="/diagnostics"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navyDeep px-8 py-4 font-display text-[15px] font-extrabold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover lg:w-auto"
              >
                Записатися на безкоштовну діагностику
                <ArrowRight size={18} />
              </Link>

              <p className="text-[12px] font-medium uppercase tracking-[1.8px] text-muted">
                30 хв · Zoom · Безкоштовно
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
