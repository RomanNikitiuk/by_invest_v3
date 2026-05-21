import { Award, GraduationCap, Medal, Trophy } from "lucide-react";

/**
 * TODO: додати додаткові нагороди школи зі старого сайту:
 * https://www.by-finance-education.site/by-invest-2-0
 */
const AWARDS = [
  {
    icon: Trophy,
    title: "Премія за розвиток дитячої фінансової грамотності",
    by: "FinBloggerAwards, 2023",
  },
  {
    icon: Award,
    title: "Найкращий освітній проєкт в інвестиціях",
    by: "Срібло FinAwards, 2024",
  },
  {
    icon: Medal,
    title: "Найкращий соціально-відповідальний інвестиційний проєкт",
    by: "FinBloggerAwards, 2024",
  },
  {
    icon: Trophy,
    title: "Найвпливовіший інвестиційний інфлюенсер",
    by: "FinBloggerAwards, 2024",
  },
  {
    icon: Award,
    title: "Інфлюенсер року інвестиційного ринку",
    by: "FinAwards, 2025",
  },
  {
    icon: GraduationCap,
    title: "Випускники школи",
    by: "Понад 50 000+ студентів пройшли навчання",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="section overflow-hidden"
      style={{ background: "linear-gradient(180deg, #d6ecfc 0%, #ffffff 100%)" }}
    >
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Результати школи</span>
          <h2 className="h2 mt-[18px]">
            Нагороди, які{" "}
            <span className="title-gradient">підтверджують якість</span>
          </h2>
          <p className="lead mt-4">
            BY INVEST — це не просто курс, а визнаний у медіа та індустрії
            бренд фінансової освіти.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map(({ icon: Icon, title, by }, i) => (
            <div
              key={i}
              className="card group flex items-start gap-4 transition-all hover:-translate-y-0.5 hover:border-sky2/40 hover:shadow-cardHover"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-gradient text-navyDeep shadow-sky transition-transform group-hover:scale-105">
                <Icon size={22} />
              </div>
              <div>
                <div className="font-display text-[16px] font-extrabold leading-snug text-textDark">
                  {title}
                </div>
                <div className="mt-1.5 text-[11px] uppercase tracking-[1.5px] text-muted">
                  {by}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
