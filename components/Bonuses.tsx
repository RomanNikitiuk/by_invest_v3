import {
  BookOpen,
  Calculator,
  ClipboardList,
  Compass,
  FileText,
  Gift,
  ListChecks,
  LucideIcon,
  Scroll,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

/**
 * Бонуси з PDF «БОНУСИ» — школа BY finance.
 */
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
    icon: Compass,
    title: "Покрокова інструкція старту",
    description:
      "Реєстрація → верифікація → поповнення → перша покупка. Усе по кроках, без здогадок.",
  },
  {
    icon: ShieldAlert,
    title: "ТОП-5 порад безпеки",
    description:
      "Як не втратити крипту через помилку або шахрайство — захищаєш себе на старті.",
  },
  {
    icon: Smartphone,
    title: "ТОП додатків для контролю фінансів",
    description:
      "Добірка перевірених застосунків, щоб бачити свій бюджет і портфель в одному місці.",
  },
  {
    icon: FileText,
    title: "Інструкція з декларування",
    description:
      "Як задекларувати інвестиційний дохід, щоб не платити більше, ніж потрібно.",
  },
  {
    icon: Scroll,
    title: "Гайд по спадщині",
    description:
      "Що оформити, щоб активи перейшли до рідних без проблем — навіть якщо ти за кордоном.",
  },
  {
    icon: Calculator,
    title: "Калькулятор інвест-прибутковості",
    description:
      "Підставляєш суму та строк — бачиш, скільки реально заробиш на стратегії.",
  },
  {
    icon: BookOpen,
    title: "Особиста стратегія під твою ціль",
    description:
      "На пасивний дохід від $100/міс · на накопичення капіталу за 3–5 років · на фін. незалежність.",
  },
  {
    icon: ListChecks,
    title: "Список активів для портфеля",
    description:
      "Що купувати, якщо сам не знаєш — окремо для резидентів України та Європи.",
  },
];

export default function Bonuses() {
  return (
    <section id="bonuses" className="section section-white">
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
              <h2 className="font-display mt-4 text-[32px] font-extrabold leading-[1.1] tracking-[-0.8px] text-white sm:text-[40px] lg:text-[48px]">
                Бонуси, що подвоюють
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(116deg, #94d4fd 0%, #aadeff 100%)",
                  }}
                >
                  цінність курсу
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-white/85">
                Лише для тих, хто записується на потік. Закриті матеріали,
                додаткові ефіри, шаблони та особисті ресурси команди BY finance.
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
                Закритий клуб з випускниками-однодумцями
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
