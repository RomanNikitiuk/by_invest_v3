import {
  GraduationCap,
  LineChart,
  ShieldCheck,
  Users,
  Wallet,
  Globe2,
} from "lucide-react";

const ITEMS = [
  {
    icon: GraduationCap,
    title: "Системне навчання",
    text: "Покроковий курс від базових понять до власної інвестиційної стратегії — без зайвої теорії.",
  },
  {
    icon: LineChart,
    title: "Тільки практика",
    text: "Реальні портфелі, реальні брокери, реальні кейси. Кожен модуль закінчується дією, а не конспектом.",
  },
  {
    icon: ShieldCheck,
    title: "Гарантія результату",
    text: "Повернення коштів, якщо курс не дав очікуваного — для тарифів VIP та MAX.",
  },
  {
    icon: Users,
    title: "Підтримка кураторів",
    text: "Особистий куратор, чат випуску і регулярний звʼязок з командою BY finance.",
  },
  {
    icon: Wallet,
    title: "Інвестиції з будь-якої суми",
    text: "Можна стартувати з $100. Покажемо, як легально інвестувати з України та з-за кордону.",
  },
  {
    icon: Globe2,
    title: "Глобальні ринки",
    text: "Акції США, ETF, облігації, дивідендні портфелі, золото — повна картина світового ринку.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="section section-blue">
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Чому BY finance</span>
          <h2 className="h2 mt-[18px]">
            6 причин, чому учні обирають{" "}
            <span className="title-gradient">наш курс</span>
          </h2>
          <p className="lead mt-4">
            Ми не вчимо «трейдингу за тиждень». Ми будуємо звичку та систему, з
            якою інвестиції стають передбачуваним інструментом досягнення цілей.
          </p>
        </div>

        <div className="mt-[60px] grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card group">
              <div
                className="mb-5 grid h-16 w-16 place-items-center rounded-[18px] text-white shadow-sky transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  background: "linear-gradient(116deg, #94d4fd 0%, #5abfff 100%)",
                }}
              >
                <Icon size={26} />
              </div>
              <div className="font-display text-[18px] font-extrabold text-textDark">
                {title}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
