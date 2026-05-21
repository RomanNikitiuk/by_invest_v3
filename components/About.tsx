"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";

/* ─── Animated counter ─── */
function Counter({
  to,
  suffix = "",
  prefix = "",
}: {
  to: number;
  suffix?: string;
  prefix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setVal(Math.round(ease * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("uk-UA")}
      {suffix}
    </span>
  );
}

const ACHIEVEMENTS = [
  {
    title: "Досвідчений інвестор з 2009 року",
    description:
      "17 років у фінансах, 7+ років практичного інвестування на фондовому ринку.",
  },
  {
    title: "Засновниця школи BY Finance",
    description: "Супроводила угоди партнерів на 61.800.000$.",
  },
  {
    title: "Авторка методики DAAR",
    description:
      "Унікальна система навчання інвестуванню для людей без фінансової освіти.",
  },
  {
    title: "Інфлюєнсер року інвестиційного ринку '25",
    description: "Визнана FinAwards як інфлюєнсер року інвестиційного ринку.",
  },
];

const STATS = [
  { prefix: "$", to: 62, suffix: "М+", label: "Сума угод" },
  { prefix: "", to: 17, suffix: " років", label: "У сфері" },
  { prefix: "", to: 2800, suffix: "+", label: "Консультацій" },
];

export default function About() {
  return (
    <section id="expert" className="section overflow-hidden">
      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Photo + stats below */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-card"
              style={{
                background:
                  "linear-gradient(174deg, #cdecff 0%, #94d4fd 55%, #587f97 100%)",
              }}
            >
              <Image
                src="/images/yulia-bio.jpg"
                alt="Юлія Баткалова — засновниця BY Finance"
                fill
                className="object-cover object-top"
              />
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white2 px-3 py-1.5 text-[12px] font-semibold text-navyDeep shadow-sm">
                <BadgeCheck size={14} className="text-sky2" />
                Фінансова радниця
              </div>
            </div>

            {/* Stats row below photo */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[16px] border border-line bg-white2 p-4 text-center"
                >
                  <div className="font-display text-[22px] font-extrabold leading-none text-textDark">
                    <Counter to={s.to} suffix={s.suffix} prefix={s.prefix} />
                  </div>
                  <div className="mt-1.5 text-[11px] uppercase tracking-[1.5px] text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio + achievements */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Про автора</span>
            <h2 className="h2 mt-[18px]">
              <span className="title-gradient">Юлія Баткалова</span>
              <br />
              засновниця школи{" "}
              <br />
              BY&nbsp;Finance
            </h2>
            <p className="lead mt-5">
              Інвесторка, авторка методики DAAR та фінансова експертка.
              Понад 50&nbsp;000 студентів пройшли її освітні програми та виходять на
              стабільний пасивний дохід.
            </p>

            {/* Achievement cards — 2×2 grid */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ACHIEVEMENTS.map((a) => (
                <div
                  key={a.title}
                  className="flex items-start gap-4 rounded-[16px] border border-line bg-white2 px-5 py-4 transition-all hover:border-sky2/40 hover:shadow-cardHover"
                >
                  <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-gradient text-navyDeep">
                    <BadgeCheck size={16} />
                  </div>
                  <div>
                    <div className="font-display text-[15px] font-extrabold text-textDark">
                      {a.title.includes("BY Finance")
                        ? <>Засновниця школи<br />BY&nbsp;Finance</>
                        : a.title}
                    </div>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted">
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/diagnostics" onClick={() => trackEvent("cta_click", { location: "about" })} className="btn-primary flex-col items-center gap-0.5 text-center animate-pulse-glow">
                <span className="flex items-center gap-2">Безкоштовна консультація з командою <ArrowRight size={18} /></span>
                <span className="text-[10px] font-semibold uppercase tracking-[1.5px] opacity-70">
                  Для початківців в інвестиціях
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
