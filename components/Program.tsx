"use client";

import { useState } from "react";
import { Check, ChevronDown, Sparkles, Target } from "lucide-react";
import { track } from "@vercel/analytics";

type Module = {
  number: string;
  title: string;
  bullets: string[];
  outcome: string;
  highlight?: boolean;
};

const MODULES: Module[] = [
  {
    number: "01",
    title: "Позбавляєшся боргів і закладаєш фундамент капіталу",
    bullets: [
      "Як поставити фінансову ціль так, щоб вона реально тягнула вперед — а не просто висіла в голові",
      "Куди йдуть гроші насправді: аналіз бюджету без осуду і складних таблиць",
      "Швидко сформуєш фінансову подушку, щоб захиститись від форс-мажорів, навіть якщо здається, що нема з чого",
      "Як звільнити $50–100 на місяць для інвестицій — навіть якщо зараз все витрачається",
      "Кредити і борги: як закрити швидше і не гальмувати старт інвестицій",
      "Чому той, хто починає з $50 зараз, виграє у того, хто чекає «більшої суми» потім",
    ],
    outcome:
      "Ти знаєш куди йдуть гроші, маєш план на подушку і вже відкладаєш першу суму для інвестицій — навіть якщо раніше були борги та здавалось, що «нема з чого».",
  },
  {
    number: "02",
    title: "Стаєш інвестором і робиш першу реальну покупку активу",
    bullets: [
      "Перший рахунок: реєстрація, верифікація, поповнення і перша покупка — покроково",
      "ETF, акції, облігації: чим відрізняються і що підходить саме тобі на старті",
      "Як виводити гроші в будь-який момент на свій рахунок чи картку, незалежно від країни",
      "Як працює фондовий ринок і чому це не казино — а система з чіткими правилами",
    ],
    outcome:
      "Ти знаєш які інструменти існують і які підходять під твою ціль, відкрив рахунок у надійного брокера і зробив першу реальну покупку.",
  },
  {
    number: "03",
    title: "Будуєш капітал для себе і захист для близьких",
    bullets: [
      "Як диверсифікувати та збалансувати портфель так, щоб при обвалі одного ринку не втратити кошти",
      "Як не втрачати, а заробляти на падінні ринку через кризи, війни чи пандемії",
      "Як портфель може працювати без тебе — і як передати активи дітям без втрат",
      "Акції, облігації, крипта, нерухомість — скільки вкладати, та як легко і грамотно керувати власним капіталом",
      "Податки з інвестицій: скільки, коли і як задекларувати, щоб не було сюрпризів",
    ],
    outcome:
      "Ти знаєш як захистити капітал в нестабільному світі — і впевнений, що гроші збережуться і через 30 років.",
  },
  {
    number: "04",
    title: "Крипта без паніки — скільки взяти, куди покласти і як не злити",
    bullets: [
      "Як крипторинок працює насправді — без хайпу і страшилок",
      "На чому реально заробляють у крипті і де більшість втрачає гроші",
      "Які інструменти всередині крипторинку існують, чим вони відрізняються і що підійде тобі на старті без ризиків",
      "Як купляти крипту безпечно — без шахраїв і без страху зробити щось не так",
    ],
    outcome:
      "Ти розумієш крипту як інструмент — бачиш, де є реальний заробіток і знаєш, як не стати жертвою типових помилок новачків.",
  },
  {
    number: "05",
    title: "Розумієш як зберегти гроші, коли навколо нестабільно",
    bullets: [
      "Потенціал с/г землі в Україні: скільки на цьому реально заробити і за який час",
      "Конкретні інструменти для старту — навіть якщо ти за кордоном",
      "Чому це надійніше, ніж тримати гроші і чекати кращих часів",
      "Як почати правильно — без юридичного хаосу і зайвих ризиків",
    ],
    outcome:
      "Ти виходиш з чіткими інструментами ринку земельних ділянок України та бачиш, як грамотно вкладати капітал у фізичні активи.",
  },
  {
    number: "06",
    title: "Формуєш план виходу на пасивний дохід і фінансову незалежність",
    bullets: [
      "2 готові стратегії — «Пасивний дохід» і «Покупка квартири» — для резидентів України і тих, хто в Європі",
      "З куратором складеш власну стратегію під свої цілі, активи і ситуацію — і вийдеш з готовим інвест-планом",
      "Навчишся вкладати в правильні активи — щоб гроші не просто лежали, а реально працювали",
      "Матимеш чіткий покроковий план виходу на пасивний дохід від $100/міс",
      "Зрозумієш, як грамотно керувати капіталом і не злити гроші через коливання ринку та глобальні події",
      "Зробиш перші реальні кроки ще під час навчання — не після, не «колись», а зараз",
    ],
    outcome:
      "Маєш свою інвестиційну стратегію під чітку ціль: пасивний дохід, дорога покупка, капітал тощо. Розумієш, як не втрачати, а примножувати кошти в різних ситуаціях.",
    highlight: true,
  },
];

export default function Program() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="program" className="section">
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Програма курсу</span>
          <h2 className="h2 mt-[18px]">
            6 модулів, що ведуть від нуля до{" "}
            <span className="title-gradient">портфеля, який працює</span>
          </h2>
          <p className="lead mt-4">
            Покрокова система: від наведення порядку в особистому бюджеті —
            до сформованого інвест-портфеля та плану виходу на пасивний дохід
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[920px] space-y-3">
          {MODULES.map((m, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={m.number}
                className={[
                  "rounded-[20px] border transition-all duration-300",
                  m.highlight ? "border-transparent" : "border-line bg-white2",
                  open && !m.highlight ? "shadow-cardHover" : "",
                  open && m.highlight ? "shadow-[0_24px_60px_-20px_rgba(7,24,41,0.5)]" : "",
                  !open && !m.highlight ? "shadow-sm" : "",
                ].join(" ")}
                style={
                  m.highlight
                    ? {
                        background: "linear-gradient(160deg, #1e3f60 0%, #071829 100%)",
                        boxShadow: "0 0 0 1px rgba(90,191,255,0.2), 0 30px 70px -20px rgba(7,24,41,0.5)",
                      }
                    : undefined
                }
              >
                <button
                  onClick={() => { setOpenIdx(open ? null : idx); if (!open) track("accordion_open", { section: "program", module: m.number }); }}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7 sm:py-6"
                >
                  <div className="flex items-start gap-5">
                    <span
                      className={[
                        "shrink-0 rounded-xl px-3 py-1.5 font-display text-[14px] font-extrabold",
                        m.highlight
                          ? "bg-hero-gradient text-white"
                          : "bg-blue50 text-navyDeep",
                      ].join(" ")}
                    >
                      {m.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`font-display text-[16px] font-bold sm:text-[18px] ${m.highlight ? "text-white" : "text-textDark"}`}>
                          {m.title}
                        </span>
                        {m.highlight && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-sky2/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[1.5px] text-sky1">
                            <Sparkles size={12} />
                            Ексклюзивний модуль
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={`flex shrink-0 items-center gap-3 text-[13px] font-semibold sm:text-[14px] ${m.highlight ? "text-white/60" : "text-steel"}`}>
                    <span className="hidden sm:inline">Наповнення</span>
                    <span
                      className={[
                        "grid h-9 w-9 place-items-center rounded-full transition-all",
                        open
                          ? "rotate-180 bg-navy-gradient text-white"
                          : "border border-line bg-white2 text-steel",
                      ].join(" ")}
                    >
                      <ChevronDown size={16} />
                    </span>
                  </div>
                </button>

                <div
                  className={[
                    "grid overflow-hidden px-5 transition-all duration-300 sm:px-7",
                    open
                      ? "grid-rows-[1fr] pb-7 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <div className={`border-t pt-6 ${m.highlight ? "border-white/15" : "border-line/80"}`}>
                      <ul className="space-y-3">
                        {m.bullets.map((b, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 text-[14px] leading-relaxed sm:text-[15px] ${m.highlight ? "text-white/80" : "text-text"}`}
                          >
                            <span
                              className={[
                                "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                                m.highlight
                                  ? "bg-sky-gradient text-navyDeep"
                                  : "bg-blue50 text-navyDeep",
                              ].join(" ")}
                            >
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Outcome block */}
                      <div
                        className={[
                          "mt-6 flex items-start gap-3 rounded-2xl p-5",
                          m.highlight
                            ? "bg-hero-gradient text-white"
                            : "bg-blue50",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "grid h-9 w-9 shrink-0 place-items-center rounded-xl",
                            m.highlight
                              ? "bg-white/15 text-white"
                              : "bg-white2 text-navyDeep shadow-sm",
                          ].join(" ")}
                        >
                          <Target size={16} />
                        </span>
                        <div>
                          <div
                            className={[
                              "font-display text-[11px] font-extrabold uppercase tracking-[2px]",
                              m.highlight ? "text-white/85" : "text-muted",
                            ].join(" ")}
                          >
                            Результат модуля
                          </div>
                          <p
                            className={[
                              "mt-1.5 text-[14px] font-medium leading-relaxed sm:text-[15px]",
                              m.highlight ? "text-white" : "text-textDark",
                            ].join(" ")}
                          >
                            {m.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
