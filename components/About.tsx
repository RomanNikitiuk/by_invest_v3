import Link from "next/link";
import { ArrowRight, Award, BadgeCheck } from "lucide-react";

const METRICS = [
  { value: "7+", label: "років у фінансовій освіті" },
  { value: "5 000+", label: "успішних випускників" },
  { value: "$25M+", label: "капітал учнів" },
  { value: "20+", label: "країн географії" },
  { value: "ТОП-3", label: "школа в Україні" },
  { value: "96%", label: "рекомендують курс" },
];

export default function About() {
  return (
    <section id="about" className="section section-white">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-card"
              style={{
                background:
                  "linear-gradient(174deg, #cdecff 0%, #94d4fd 55%, #587f97 100%)",
              }}
            >
              {/* TODO: photo Юлі */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                  maskImage:
                    "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-white">
                <div className="text-center">
                  <div className="mx-auto mb-3 grid h-20 w-20 place-items-center rounded-full bg-white2 text-3xl font-extrabold text-navyDeep shadow-card">
                    Ю
                  </div>
                  <div className="text-[12px] font-bold uppercase tracking-[3px] opacity-90">
                    Фото автора
                  </div>
                </div>
              </div>
              <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white2 px-3 py-1.5 text-[12px] font-semibold text-navyDeep shadow-sm">
                <BadgeCheck size={14} className="text-sky2" />
                Сертифікований радник
              </div>
            </div>
          </div>

          {/* Bio + metrics */}
          <div className="lg:col-span-7">
            <span className="eyebrow">Про автора</span>
            <h2 className="h2 mt-[18px]">
              <span className="title-gradient">Юлія</span>
              <br />
              засновниця школи BY finance
            </h2>
            <p className="lead mt-5">
              Інвесторка, авторка курсів із фінансової грамотності та публічна
              експертка. За 7+ років допомогла понад 5 000 учнів навчитися
              керувати капіталом, формувати портфелі та виходити на стабільний
              пасивний дохід.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Регулярно виступає в українських ЗМІ, веде телеграм-канал з понад
              100 000 підписників та особисто супроводжує своїх студентів на
              шляху від «не розумію в інвестиціях» до «у мене працюючий
              портфель».
            </p>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="rounded-[18px] border border-line bg-white2 p-5 transition-all hover:-translate-y-0.5 hover:border-sky2/40 hover:shadow-cardHover"
                >
                  <div className="font-display text-[26px] font-extrabold leading-none text-textDark">
                    {m.value}
                  </div>
                  <div className="mt-2 text-[12px] uppercase tracking-[1.5px] text-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-2 text-[14px] text-muted">
              <Award size={16} className="text-sky2" />
              Призерка нагород «Жінка року» та «Учитель року з фінансів»
            </div>

            <div className="mt-8">
              <Link href="/diagnostics" className="btn-primary">
                Безкоштовна діагностика з командою <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
