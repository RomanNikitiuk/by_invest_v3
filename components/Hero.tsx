import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

const STATS = [
  { k: "3 700+", v: "Студентів" },
  { k: "$100", v: "Стартовий капітал" },
  { k: "3.0", v: "Версія курсу" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      <div className="container-px relative">
        <div className="grid items-center gap-10 lg:grid-cols-12">

          {/* ─── LEFT col-span-7 ─── */}
          <div className="lg:col-span-7">

            {/* Chip */}
            <span className="eyebrow">
              <span className="h-2 w-2 rounded-full bg-sky2 ring-4 ring-sky2/25" />
              BY FINANCE · ШКОЛА ІНВЕСТИЦІЙ
            </span>

            {/* H1 — display */}
            <h1 className="mt-7 font-display text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02] tracking-[-0.02em] text-textDark">
              <span className="font-medium text-sky2">BY INVEST 3.0</span>
              <span className="mt-4 block text-[0.4em] font-sans font-normal not-italic leading-snug tracking-tight text-muted">
                від школи інвестицій та фінансової грамотності{" "}
                <span className="font-semibold text-sky2">BY FINANCE</span>
              </span>
            </h1>

            {/* H2 */}
            <h2 className="mt-8 font-display text-2xl font-medium leading-snug text-textDark/90 md:text-3xl">
              Як сформувати{" "}
              <span className="text-sky2">капітал</span> в довгострок та вийти
              на стабільний пасивний дохід{" "}
              <span className="italic text-sky2">від $100/міс</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Через надійні інструменти фондового ринку — навіть якщо ти
              починаєш з нуля і нічого не розумієш в інвестиціях.
            </p>

            {/* Quote */}
            <div className="mt-10 max-w-xl rounded-[18px] border border-sky2/30 bg-blue50 p-6 md:p-7">
              <p className="font-display italic text-lg leading-snug text-textDark md:text-xl">
                «Той, хто починає з $100 сьогодні, через 20 років матиме
                більше, ніж той, хто чекатиме „кращого моменту" і почне з
                $200 через 5 років»
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/diagnostics" className="btn-primary">
                Записатися на безкоштовну консультацію
              </Link>
              <Link
                href="#program"
                className="border-b border-line pb-1 text-[13px] font-medium text-textDark/80 transition hover:text-sky2"
              >
                ДІЗНАЙСЯ БІЛЬШЕ ПРО «BY INVEST 3.0» →
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
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Glow behind photo */}
              <div
                className="pointer-events-none absolute inset-0 -z-0 opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #94d4fd 0%, transparent 70%)",
                }}
              />

              {/* Portrait — object-contain, full body visible */}
              <div className="relative z-10">
                <Image
                  src="/images/yulia-hero.png"
                  alt="Юлія Баткалова — інвестор, засновниця BY Finance"
                  width={896}
                  height={1152}
                  className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(30,63,96,0.18)]"
                  priority
                />

                {/* Badge bottom-left */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="inline-flex items-center gap-3 rounded-full border border-line bg-white2/95 px-5 py-3 shadow-card backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-sky2" />
                    <span className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-navyDeep">
                      Юлія Баткалова · Засновниця
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
