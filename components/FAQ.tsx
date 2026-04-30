"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Чи можна почати з $50–100?",
    a: "Так. Ми спеціально побудували програму так, щоб старт був реальним з $50–100. У першому модулі ти звільниш цю суму у власному бюджеті.",
  },
  {
    q: "Як платити податки з інвестицій в Україні?",
    a: "Це окремий блок у модулі 3. Ми покажемо, як легально декларувати дохід з закордонного брокера й уникнути зайвих штрафів.",
  },
  {
    q: "Чи безпечно інвестувати під час війни?",
    a: "Так — за умови, що ти інвестуєш через закордонного брокера в надійні інструменти. Ми вчимо саме такому підходу.",
  },
  {
    q: "Я живу за кордоном — чи підходить курс?",
    a: "Так. Велика частина студентів — українці у Польщі, Німеччині, Хорватії, США, Канаді. Програма повністю адаптована.",
  },
  {
    q: "Чи можна оплатити частинами?",
    a: "Так, доступна оплата частинами на 2–3 платежі. Деталі обговорюємо на безкоштовній консультації.",
  },
  {
    q: "Чи буде підтримка після завершення курсу?",
    a: "Так — на VIP та MAX тарифах ти отримуєш доступ до закритого клубу випускників.",
  },
  {
    q: "Я не розуміюся на фінансах — чи впораюся?",
    a: "Так. Методика DAAR створена саме для людей без фінансової освіти. Пояснюємо все простою мовою з прикладами.",
  },
  {
    q: "Чи дасте конкретний інвест-план?",
    a: "На тарифах VIP та MAX — так, з персональним розбором твоєї ситуації, цілей та горизонту.",
  },
  {
    q: "Що, якщо мені не сподобається курс?",
    a: "Діє гарантія 100% повернення коштів до закінчення першого модуля — без зайвих питань.",
  },
  {
    q: "Як записатися на безкоштовну консультацію?",
    a: "Натисни кнопку нижче — і експерт нашої команди зв'яжеться з тобою.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-blue">
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Часті запитання</span>
          <h2 className="h2 mt-[18px]">
            Відповіді на{" "}
            <span className="title-gradient">найпоширеніші питання</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-[860px] space-y-3">
          {FAQS.map((item, idx) => {
            const open = openIdx === idx;
            return (
              <div
                key={idx}
                className={[
                  "rounded-[18px] border bg-white2 transition-all",
                  open ? "border-sky2/50 shadow-cardHover" : "border-line shadow-sm",
                ].join(" ")}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-[16px] font-bold text-textDark sm:text-[17px]">
                    {item.q}
                  </span>
                  <span
                    className={[
                      "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all",
                      open
                        ? "rotate-180 bg-navy-gradient text-white"
                        : "border border-line bg-white2 text-steel",
                    ].join(" ")}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>

                <div
                  className={[
                    "grid overflow-hidden px-6 transition-all duration-300",
                    open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-line/60 pt-4 text-[15px] leading-relaxed text-muted">
                      {item.a}
                    </p>
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
