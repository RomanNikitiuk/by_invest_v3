import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

const STATS = [
  { k: "3 700+", v: "Студентів" },
  { k: "$100", v: "Стартовий капітал" },
  { k: "3.0", v: "Версія курсу" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden isolate pt-32 pb-20 md:pt-40 md:pb-28"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #d6ecfc 100%)",
      }}
    >


      <div className="container-px relative">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-12">

          {/* ─── LEFT col-span-7 ─── */}
          <div className="min-w-0 lg:col-span-7">

            {/* Chip */}
            <span className="inline-flex items-center gap-2 rounded-2xl bg-sky2/[0.18] px-4 py-1.5 text-[12px] font-bold uppercase tracking-[2px] text-navyDeep">
              <span className="h-2 w-2 shrink-0 rounded-full bg-sky2 ring-4 ring-sky2/25" />
              BY&nbsp;FINANCE · Школа фінансової грамотності та інвестування, зареєстрована в 2021р
            </span>

            {/* H1 — brand title */}
            <h1 className="mt-7 font-display text-[clamp(2.4rem,6vw,5.2rem)] font-extrabold leading-[1.02] tracking-[-0.02em] text-sky2">
              BY INVEST 3.0
            </h1>

            {/* Subtitle */}
            <p className="lead mt-1">
              від школи інвестицій та фінансової грамотності{" "}
              <span className="font-semibold text-sky2 whitespace-nowrap">BY FINANCE</span>
            </p>

            {/* H2 */}
            <p className="mt-10 font-display text-[26px] font-extrabold leading-tight tracking-tight text-navyDeep sm:text-[32px] lg:text-[36px]">
              Як сформувати капітал в{" "}
              <span className="text-sky2">довгострок</span>{" "}
              та вийти на{" "}
              <span className="text-sky2">стабільний</span>{" "}
              пасивний дохід{" "}
              <span className="text-sky2">від $100/місяць</span>
            </p>

            {/* Description */}
            <p className="lead mt-2 max-w-xl">
              Через надійні інструменти фондового ринку — навіть якщо ти
              починаєш з нуля і нічого не розумієш в інвестиціях.
            </p>

            {/* Quote */}
            <div className="mt-10 max-w-xl rounded-[18px] border border-sky2/30 bg-blue50 p-6 md:p-7">
              <p className="text-center font-display italic text-lg leading-snug text-textDark md:text-xl">
                «Той, хто починає з $100 сьогодні, через 20 років матиме
                більше, ніж той, хто чекатиме „кращого моменту" і почне з
                $200 через 5 років»
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/diagnostics" className="btn-primary w-full sm:w-auto flex-col items-center gap-0.5 text-center animate-pulse-glow">
                <span className="flex items-center gap-2">Записатися на безкоштовну консультацію <ArrowRight size={18} className="shrink-0" /></span>
                <span className="text-[10px] font-semibold uppercase tracking-[1.5px] opacity-70">
                  Для початківців в інвестиціях
                </span>
              </Link>
              <Link
                href="#program"
                className="border-b border-line pb-1 text-[13px] font-medium text-textDark/80 transition hover:text-sky2"
              >
                ДІЗНАЙСЯ БІЛЬШЕ ПРО «BY INVEST 3.0» →
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-5 flex items-center gap-2 text-[13px] text-muted">
              <ShieldCheck size={15} className="text-sky2" />
              Гарантія повернення коштів · Без зобов&apos;язань
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div
                  key={s.v}
                  className="rounded-[16px] border border-line bg-white2 p-5 text-center"
                >
                  <div className="font-display text-2xl font-extrabold text-textDark md:text-3xl">
                    {s.k}
                  </div>
                  <div className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ─── RIGHT col-span-5 ─── */}
          <div className="min-w-0 lg:col-span-5">
            <div className="relative">
              {/* Glow behind photo — outer large halo */}
              <div
                className="pointer-events-none absolute inset-0 lg:inset-[-10%] -z-10 blur-3xl"
                style={{
                  background: "radial-gradient(ellipse at 50% 60%, rgba(90,191,255,0.35) 0%, rgba(148,212,253,0.15) 50%, transparent 75%)",
                }}
              />
              {/* Glow — inner tight halo */}
              <div
                className="pointer-events-none absolute inset-[5%] -z-10 blur-2xl"
                style={{
                  background: "radial-gradient(ellipse at 50% 55%, rgba(90,191,255,0.25) 0%, transparent 65%)",
                }}
              />

              {/* Portrait */}
              <div className="relative z-10">
                <Image
                  src="/images/yulia-hero.png"
                  alt="Юлія Баткалова — інвестор, засновниця BY Finance"
                  width={896}
                  height={1152}
                  className="h-auto w-full object-contain"
                  style={{ filter: "drop-shadow(0 0 40px rgba(90,191,255,0.4)) drop-shadow(0 20px 60px rgba(30,63,96,0.15))" }}
                  priority
                />
              </div>

              {/* Badge below photo */}
              <div className="relative z-20 -mt-1 flex justify-center -translate-x-8">
                <div className="eyebrow shadow-card backdrop-blur-md border-line bg-white2/95">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-sky2" />
                  Юлія Баткалова · Засновниця
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
