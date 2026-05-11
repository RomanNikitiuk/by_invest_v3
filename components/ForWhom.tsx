const PAIN_POINTS = [
  {
    emoji: "🗺️",
    title: "Не знаєш з чого почати",
    text: "Багато інформації, страх зробити перший крок без чіткого плану дій.",
  },
  {
    emoji: "💸",
    title: "Гроші лежать і тануть",
    text: "Заощадження на картці чи «під подушкою» втрачають вартість через інфляцію.",
  },
  {
    emoji: "🏛️",
    title: "Пенсія від держави — не план",
    text: "Розраховувати на державну пенсію в Україні — ризик і невизначеність.",
  },
  {
    emoji: "⚡",
    title: "Страх залежності від роботодавця",
    text: "Хочеш мати фінансову подушку, яка не залежить від однієї зарплати.",
  },
  {
    emoji: "📋",
    title: "Лякає податкова",
    text: "Не знаєш, як легально декларувати дохід з інвестицій за кордоном.",
  },
  {
    emoji: "📈",
    title: "Є акції — немає розуміння",
    text: "Купив на емоціях або за порадою — і не знаєш, що з ними робити далі.",
  },
  {
    emoji: "🌍",
    title: "Виведення грошей за кордон",
    text: "Не розумієш як відкрити рахунок у брокера за межами України та зайти в активи.",
  },
  {
    emoji: "🌱",
    title: "Хочеш почати з малого",
    text: "Готовий вкласти $50–100 і шукаєш надійний шлях без авантюр.",
  },
];

export default function ForWhom() {
  return (
    <section
      id="for-whom"
      className="section"
      style={{ background: "linear-gradient(180deg, #d6ecfc 0%, #ffffff 100%)" }}
    >
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Для кого цей курс</span>
          <h2 className="h2 mt-[18px]">
            Якщо хоча б одне з цього —{" "}
            <span className="title-gradient">про тебе,</span>{" "}
            ти в правильному місці
          </h2>
        </div>

        <div className="mt-[60px] grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PAIN_POINTS.map(({ emoji, title, text }) => (
            <div
              key={title}
              className="card group flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:border-sky2/40 hover:shadow-cardHover"
            >
              <div className="text-[32px]">{emoji}</div>
              <div className="font-display text-[16px] font-extrabold leading-snug text-textDark">
                {title}
              </div>
              <p className="text-[14px] leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
