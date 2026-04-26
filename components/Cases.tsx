"use client";

import { useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Quote,
  Target,
  TrendingUp,
} from "lucide-react";

/**
 * Кейси студентів школи BY finance — з PDF «КЕЙСИ».
 */
type Case = {
  name: string;
  city: string;
  age?: string;
  pointA: string;
  goal: string;
  pointB: string;
  results: string[];
  quote: string;
};

const CASES: Case[] = [
  {
    name: "Студентка",
    city: "Івано-Франківськ",
    pointA: "Дохід $700, накопичення $2 500",
    goal: "Зрозуміти як інвестувати",
    pointB:
      "На навчанні зібрала свій інвест-портфель і отримала чітку систему дій",
    results: [
      "Дохід — $1 800",
      "Кеш — $4 000",
      "Портфель — $10 000",
    ],
    quote: "Я можу і заробляти, і примножувати",
  },
  {
    name: "Світлана",
    city: "Вінниця",
    pointA: "Скромні заощадження, які лежать без руху",
    goal:
      "Розібратися в інвестуванні та зробити його ще одним джерелом доходу",
    pointB:
      "Підкреслила найцінніше — фундаментальний і технічний аналіз, плюс бонусні уроки",
    results: ["Дохідність інвест-портфеля 44–47% за рік"],
    quote: "Страшно лише те, чого не розумієш",
  },
  {
    name: "Студентка",
    city: "Зараз у Хорватії",
    age: "34 роки",
    pointA: "Досвід лише з депозитами та страхуванням життя",
    goal:
      "Фінансова подушка · капітал на майбутнє · змусити гроші працювати",
    pointB:
      "Покрокова допомога з відкриттям рахунків і зрозуміла система дій",
    results: ["Портфель — $20 000"],
    quote:
      "Тепер інвестування — це не щось із кіно, а реальний інструмент",
  },
  {
    name: "Наталя",
    city: "Умань",
    pointA:
      "Інвестувала в нерухомість і депозити, але хотіла знайти інші можливості",
    goal: "Як зберегти і примножити кошти в умовах війни",
    pointB:
      "Найцінніше — прості пояснення, супровід і доступ до оновлених інструкцій",
    results: [
      "Фінзапас — 3 місяці",
      "Інвестує щонайменше 10% доходу щомісяця",
    ],
    quote:
      "Потрібно постійно оновлювати знання, бо світ швидко змінюється",
  },
];

export default function Cases() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="cases" className="section section-blue">
      <div className="container-px">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Кейси студентів</span>
            <h2 className="h2 mt-[18px]">
              Реальні результати —
              <br />
              <span className="title-gradient">не теорія, а практика</span>
            </h2>
            <p className="lead mt-4">
              Витягли найяскравіші історії: з якою точкою старту прийшли
              студенти, яку стратегію зібрали і до яких показників прийшли.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Попередній кейс"
              className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:shadow-sky"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Наступний кейс"
              className="grid h-12 w-12 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:shadow-sky"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-hide -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2"
        >
          {CASES.map((c, i) => (
            <article
              key={i}
              className="card relative flex w-[88%] shrink-0 flex-col snap-start sm:w-[60%] lg:w-[40%]"
            >
              <Quote
                size={28}
                className="absolute right-6 top-6 text-sky2/50"
              />

              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-hero-gradient font-display text-[18px] font-extrabold text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-display text-[18px] font-extrabold leading-tight text-textDark">
                    {c.name}
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[12px] text-muted">
                    <MapPin size={12} />
                    {c.city}
                    {c.age && (
                      <>
                        <span className="opacity-50">·</span>
                        <span>{c.age}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Точка А */}
              <div className="mt-5 rounded-2xl border border-line bg-blue50/60 p-4">
                <div className="font-display text-[11px] font-extrabold uppercase tracking-[2px] text-muted">
                  Точка А
                </div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-text">
                  {c.pointA}
                </p>
              </div>

              {/* Ціль */}
              <div className="mt-3 flex items-start gap-2.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky2/15 text-navyDeep">
                  <Target size={13} />
                </span>
                <div>
                  <span className="font-display text-[12px] font-bold uppercase tracking-[1.5px] text-navyDeep">
                    Ціль:
                  </span>{" "}
                  <span className="text-[14px] text-text">{c.goal}</span>
                </div>
              </div>

              {/* Точка Б — що дав курс */}
              <p className="mt-4 text-[14px] leading-relaxed text-text">
                <span className="font-bold text-navyDeep">Точка Б.</span>{" "}
                {c.pointB}
              </p>

              {/* Результат */}
              <div className="mt-5 rounded-2xl bg-hero-gradient p-4 text-white">
                <div className="flex items-center gap-2 font-display text-[11px] font-extrabold uppercase tracking-[2px] text-white/85">
                  <TrendingUp size={14} />
                  Результат зараз
                </div>
                <ul className="mt-2 space-y-1">
                  {c.results.map((r) => (
                    <li
                      key={r}
                      className="font-display text-[15px] font-extrabold leading-snug text-white"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <div className="mt-5 border-t border-line pt-4 text-[13px] italic leading-relaxed text-muted">
                «{c.quote}»
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
