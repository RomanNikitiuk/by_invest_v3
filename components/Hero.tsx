import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-[140px] pb-[100px] sm:pt-[150px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-radial" />

      <div className="container-px relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.85fr_1fr]">
          {/* LEFT: text */}
          <div>
            <span className="eyebrow mb-6">
              <span className="h-2 w-2 rounded-full bg-sky2 ring-4 ring-sky2/25" />
              Школа BY finance · авторський курс
            </span>

            <h1 className="h1">
              Опануй <span className="brand-text">інвестування</span> і почни
              заробляти на своїх грошах
            </h1>

            <p className="mt-[18px] max-w-[520px] text-[19px] font-normal leading-relaxed text-muted">
              Курс <strong className="text-textDark">BY INVEST</strong> —
              покроковий шлях від першого депозиту до структурованого
              інвестиційного портфеля. Без складних термінів, на реальних
              прикладах.
            </p>

            <div className="mt-[34px] flex flex-wrap gap-[14px]">
              <Link href="/diagnostics" className="btn-primary">
                Записатися на діагностику <ArrowRight size={18} />
              </Link>
              <Link href="#tariffs" className="btn-secondary">
                Подивитися тарифи
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-sky2" />
                Гарантія повернення коштів
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-line sm:block" />
              <div>5 000+ випускників</div>
              <span className="hidden h-1 w-1 rounded-full bg-line sm:block" />
              <div>20+ країн</div>
            </div>
          </div>

          {/* MIDDLE: stat card */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[28px] bg-white2 p-9 shadow-card">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-[240px] w-[240px] rounded-full opacity-25 blur-md"
                style={{
                  background: "linear-gradient(116deg, #94d4fd, #5abfff)",
                }}
              />
              <div className="relative">
                <div className="text-[12px] font-bold uppercase tracking-[2px] text-navyDeep">
                  Курс №1
                </div>
                <div className="mt-5 text-[76px] font-extrabold leading-none tracking-[-2px] text-textDark">
                  6<span className="text-sky2">+</span>
                </div>
                <div className="mt-2 max-w-[260px] text-[16px] text-muted">
                  модулів, які проводять від нуля до робочого портфеля
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
                  <div>
                    <div className="text-[26px] font-extrabold text-textDark">
                      96%
                    </div>
                    <div className="mt-0.5 text-[13px] text-muted">
                      рекомендують
                    </div>
                  </div>
                  <div>
                    <div className="text-[26px] font-extrabold text-textDark">
                      7+
                    </div>
                    <div className="mt-0.5 text-[13px] text-muted">
                      років досвіду
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: photo placeholder */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-x-0 top-[10%] bottom-0 -z-0 blur-md"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(148,212,253,0.55) 0%, rgba(148,212,253,0.15) 55%, transparent 80%)",
              }}
            />
            <div
              className="relative z-[1] aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-white2 shadow-card"
              style={{
                filter: "drop-shadow(0 30px 50px rgba(30,63,96,0.25))",
              }}
            >
              {/* TODO: фото Юлі з Google Drive */}
              <div className="absolute inset-0 grid place-items-center text-muted">
                <div className="text-center">
                  <div className="mx-auto mb-3 grid h-20 w-20 place-items-center rounded-full bg-hero-gradient text-3xl font-extrabold text-white">
                    Ю
                  </div>
                  <div className="text-[12px] uppercase tracking-[2px]">
                    Фото автора
                  </div>
                </div>
              </div>

              <div className="absolute left-4 top-4 rounded-2xl border border-line bg-white2 px-3 py-2 text-[12px] shadow-sm">
                <div className="text-muted">Засновниця</div>
                <div className="font-bold text-textDark">Юлія</div>
              </div>
              <div className="absolute bottom-4 right-4 rounded-2xl border border-sky2/40 bg-white2 px-3 py-2 text-[12px] shadow-sm">
                <div className="text-muted">Школа</div>
                <div className="font-bold text-navyDeep">BY finance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-10 sm:grid-cols-4">
          {[
            ["7+", "років досвіду"],
            ["5 000+", "учнів"],
            ["20+", "країн"],
            ["96%", "задоволеність"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="font-display text-[32px] font-extrabold leading-none text-textDark">
                {value}
              </div>
              <div className="mt-1.5 text-[14px] text-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
