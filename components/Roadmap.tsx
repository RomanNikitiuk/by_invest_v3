const STEPS = [
  {
    when: "Після модуля 1",
    result: "Є бюджет, є вільні гроші для інвестицій",
    color: "bg-white/8 border-white/15",
    dot: "bg-sky2",
  },
  {
    when: "До кінця навчання",
    result: "Перші покупки активів у портфелі",
    color: "bg-white/8 border-white/15",
    dot: "bg-sky1",
  },
  {
    when: "Через 1–3 місяці",
    result: "Перший дохід з дивідендів та купонів",
    color: "bg-white/8 border-white/15",
    dot: "bg-sky1",
  },
  {
    when: "Через 6–12 місяців",
    result: "Фінансова впевненість і чіткий план",
    color: "border-sky2/60",
    dot: "bg-sky2",
    highlight: true,
  },
];

export default function Roadmap() {
  return (
    <section className="section section-dark overflow-hidden">
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(ellipse, #5abfff 0%, transparent 70%)" }}
      />
      <div className="container-px relative">
        <div className="mx-auto max-w-[920px]">
          <div
            className="rounded-[24px] border border-white/10 p-8 sm:p-10"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <div className="mb-8 text-center">
              <span className="eyebrow-inv">Твій прогрес після курсу</span>
              <h3 className="font-display mt-3 text-[22px] font-extrabold text-white sm:text-[26px]">
                Перші покупки активів — ще під час навчання
              </h3>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ when, result, color, dot, highlight }) => (
                <div
                  key={when}
                  className={`relative rounded-[18px] border p-6 ${color} ${highlight ? "bg-sky2/10" : ""}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${dot}`} />
                    <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-white/60">
                      {when}
                    </span>
                  </div>
                  <p className="font-display text-[16px] font-extrabold leading-snug text-white">
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
