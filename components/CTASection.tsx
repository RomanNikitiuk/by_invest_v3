import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section section-white">
      <div className="container-px">
        <div
          className="relative overflow-hidden rounded-[28px] p-10 text-white sm:p-16"
          style={{
            background:
              "linear-gradient(135deg, #1e3f60 0%, #2b557d 55%, #5383b3 100%)",
            boxShadow:
              "0 0 0 1px rgba(30,63,96,0.5), 0 60px 140px -40px rgba(30,63,96,0.55)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full opacity-30 blur-2xl"
            style={{
              background: "linear-gradient(116deg, #94d4fd, #5abfff)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-[300px] w-[300px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "linear-gradient(116deg, #aadeff, #5abfff)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse at 80% 20%, black 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 80% 20%, black 30%, transparent 75%)",
            }}
          />

          <div className="relative max-w-3xl">
            <span className="eyebrow-inv">
              <Sparkles size={14} />
              Готові почати?
            </span>
            <h2 className="font-display mt-5 text-[32px] font-extrabold leading-[1.1] tracking-[-0.8px] text-white sm:text-[40px] lg:text-[48px]">
              Запишіться на{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(116deg, #94d4fd 0%, #aadeff 100%)",
                }}
              >
                безкоштовну діагностику
              </span>{" "}
              з командою BY finance
            </h2>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/85">
              30-хвилинна розмова, в якій ми разом визначимо вашу точку старту,
              цілі та підберемо тариф, що дасть вам результат.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/diagnostics"
                className="inline-flex items-center gap-2 rounded-full bg-white2 px-7 py-3 font-display text-[14px] font-extrabold uppercase tracking-[1.5px] text-navyDeep shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                Записатися на діагностику <ArrowRight size={18} />
              </Link>
              <Link
                href="#tariffs"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-3 font-display text-[14px] font-extrabold uppercase tracking-[1.5px] text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Подивитися тарифи
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-2 text-[14px] text-white/85">
              <ShieldCheck size={16} className="text-sky1" />
              Безкоштовно. Без зобовʼязань. У зручний для вас час.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
