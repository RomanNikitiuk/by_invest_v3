const STEPS = [
  {
    when: "Після модуля 1",
    result: "Є бюджет, є вільні гроші для інвестицій",
    color: "bg-sky2/10 border-sky2/30",
    dot: "bg-sky2",
  },
  {
    when: "До кінця навчання",
    result: "Перші покупки активів у портфелі",
    color: "bg-blue50 border-line",
    dot: "bg-navyDeep",
  },
  {
    when: "Через 1–3 місяці",
    result: "Перший дохід з дивідендів та купонів",
    color: "bg-blue50 border-line",
    dot: "bg-navyDeep",
  },
  {
    when: "Через 6–12 місяців",
    result: "Фінансова впевненість і чіткий план",
    color: "bg-hero-gradient border-transparent",
    dot: "bg-white",
    dark: true,
  },
];

export default function Roadmap() {
  return (
    <section className="section section-blue">
      <div className="container-px">
        <div className="mx-auto max-w-[920px]">
          <div className="rounded-[24px] bg-white2 border border-line p-8 sm:p-10">
            <div className="mb-8 text-center">
              <span className="eyebrow">Твій прогрес після курсу</span>
              <h3 className="font-display mt-3 text-[22px] font-extrabold text-textDark sm:text-[26px]">
                Перші покупки активів — ще під час навчання
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ when, result, color, dot, dark }) => (
                <div
                  key={when}
                  className={`relative rounded-[18px] border p-6 ${color}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${dot}`} />
                    <span
                      className={`text-[11px] font-extrabold uppercase tracking-[2px] ${
                        dark ? "text-white/80" : "text-muted"
                      }`}
                    >
                      {when}
                    </span>
                  </div>
                  <p
                    className={`font-display text-[16px] font-extrabold leading-snug ${
                      dark ? "text-white" : "text-textDark"
                    }`}
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
