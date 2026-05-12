import {
  BookOpen,
  Calculator,
  ClipboardList,
  CreditCard,
  FileText,
  Gift,
  Globe,
  ListChecks,
  LucideIcon,
  Map,
  MessageCircleQuestion,
  Scroll,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

type Bonus = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const BONUSES: Bonus[] = [
  {
    icon: ClipboardList,
    title: "Таблиця контролю бюджету",
    description:
      "Готовий шаблон, у якому одразу видно, куди йдуть гроші та скільки вільно для інвестицій.",
  },
  {
    icon: Smartphone,
    title: "ТОП додатків для фінансів",
    description:
      "Добірка перевірених застосунків, щоб бачити свій бюджет і портфель в одному місці.",
  },
  {
    icon: Calculator,
    title: "Калькулятор інвест. прибутковості (5, 10, 20 років)",
    description:
      "Підставляєш суму та строк — бачиш, скільки реально заробиш на стратегії.",
  },
  {
    icon: CreditCard,
    title: "Практична система: як закрити кредит швидше",
    description:
      "Покроковий план, щоб позбутися боргів і швидше вивільнити гроші для інвестицій.",
  },
  {
    icon: Globe,
    title: "Чек-лист для українців за кордоном",
    description:
      "Що врахувати при інвестуванні з Польщі, Німеччини, США та інших країн.",
  },
  {
    icon: FileText,
    title: "Інструкція з декларування інвест. доходу",
    description:
      "Як задекларувати інвестиційний дохід, щоб не платити більше, ніж потрібно.",
  },
  {
    icon: BookOpen,
    title: "Шаблон збалансованого портфеля",
    description:
      "Готова структура портфеля з розподілом між акціями, ETF, облігаціями та криптою.",
  },
  {
    icon: ShieldAlert,
    title: "ТОП-5 порад безпеки по крипті",
    description:
      "Як не втратити крипту через помилку або шахрайство — захищаєш себе на старті.",
  },
  {
    icon: Scroll,
    title: "Гайд по спадщині",
    description:
      "Що оформити, щоб активи перейшли до рідних без проблем — навіть якщо ти за кордоном.",
  },
  {
    icon: ListChecks,
    title: "Список активів для портфеля (Україна + Європа)",
    description:
      "Що купувати, якщо сам не знаєш — окремо для резидентів України та Європи.",
  },
  {
    icon: Map,
    title: "2 готові інвестиційні стратегії",
    description:
      "«Пасивний дохід» і «Покупка квартири» — для резидентів України і тих, хто в Європі.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Відповіді на твої запитання",
    description:
      "Збірник найпоширеніших питань студентів з детальними відповідями від команди.",
  },
  {
    icon: Map,
    title: "План перших кроків інвестора",
    description:
      "Покроковий чекліст дій від реєстрації брокера до першої покупки активу.",
  },
];

export default function Bonuses() {
  return (
    <section id="bonuses" className="section bg-white overflow-hidden">
      <div className="container-px">
        <div
          className="relative overflow-hidden rounded-[28px] p-8 text-white sm:p-12 lg:p-14"
          style={{
            background:
              "linear-gradient(135deg, #1e3f60 0%, #2b557d 55%, #5383b3 100%)",
            boxShadow:
              "0 0 0 1px rgba(30,63,96,0.5), 0 60px 140px -40px rgba(30,63,96,0.55)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full opacity-30 blur-2xl"
            style={{
              background: "linear-gradient(116deg, #94d4fd, #5abfff)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 h-[280px] w-[280px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "linear-gradient(116deg, #aadeff, #5abfff)",
            }}
          />

          <div className="relative flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div>
              <span className="eyebrow-inv">
                <Sparkles size={14} />
                Ексклюзивні бонуси
              </span>
              <h2 className="h2 mt-4 text-white">
                13+ бонусів, які працюють
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(116deg, #94d4fd 0%, #aadeff 100%)",
                  }}
                >
                  разом з курсом
                </span>
              </h2>
              <p className="lead mt-4 text-white/85">
                Закриті матеріали, додаткові ефіри, шаблони та особисті ресурси команди BY finance.
              </p>
            </div>
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white2 text-navyDeep shadow-card">
              <Gift size={28} />
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BONUSES.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-[18px] bg-white/10 p-6 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/15"
                  style={{ border: "1px solid rgba(255,255,255,0.18)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-navyDeep"
                      style={{
                        background:
                          "linear-gradient(116deg, #94d4fd 0%, #aadeff 100%)",
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-[11px] font-extrabold text-white/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="font-display text-[16px] font-extrabold leading-snug text-white">
                        {b.title}
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/80">
                        {b.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closed club banner */}
          <div className="relative mt-6 flex flex-col items-start gap-4 overflow-hidden rounded-[20px] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7"
            style={{
              background: "linear-gradient(116deg, #94d4fd 0%, #aadeff 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.4) inset, 0 24px 50px -20px rgba(94,191,255,0.5)",
            }}
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white2 text-navyDeep shadow-card">
              <Users size={26} />
            </div>
            <div>
              <div className="font-display text-[12px] font-extrabold uppercase tracking-[2px] text-navyDeep/85">
                Бонус після курсу
              </div>
              <div className="mt-1 font-display text-[18px] font-extrabold leading-snug text-navyDeep sm:text-[20px]">
                Закритий клуб з випускниками-однодумцями{" "}
                <br className="hidden sm:block" />
                та командою курсу — щоб капітал зростав швидше
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
