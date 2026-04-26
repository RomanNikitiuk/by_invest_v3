import Link from "next/link";
import { Check, Crown, ShieldCheck, Sparkles, Star } from "lucide-react";

type Tariff = {
  id: "start" | "vip" | "max";
  name: string;
  tagline: string;
  price: string;
  oldPrice?: string;
  features: string[];
  cta: { label: string; href: string };
  variant: "base" | "vip" | "max";
  badge?: string;
  guarantee?: boolean;
};

const TARIFFS: Tariff[] = [
  {
    id: "start",
    name: "START",
    tagline: "Базовий формат — для самостійного навчання",
    price: "$299",
    oldPrice: "$399",
    features: [
      "Доступ до всіх 6 модулів курсу",
      "Записи занять у особистому кабінеті",
      "Робочий зошит та шаблони портфеля",
      "Закритий чат випуску",
      "Сертифікат про проходження",
    ],
    cta: { label: "Обрати START", href: "#payment-start" },
    variant: "base",
  },
  {
    id: "vip",
    name: "VIP",
    tagline: "Максимум практики із кураторським супроводом",
    price: "$599",
    oldPrice: "$799",
    features: [
      "Все, що у тарифі START",
      "Особистий куратор протягом курсу",
      "5 групових Q&A-сесій із Юлією",
      "Розбір вашого реального портфеля",
      "Шаблони сімейного бюджету та цілей",
      "Доступ до записів — назавжди",
    ],
    cta: { label: "Обрати VIP", href: "#payment-vip" },
    variant: "vip",
    badge: "Найпопулярніший",
    guarantee: true,
  },
  {
    id: "max",
    name: "MAX",
    tagline: "Особиста робота з Юлією та закритий клуб BY INVEST",
    price: "$1 290",
    oldPrice: "$1 690",
    features: [
      "Все, що у тарифі VIP",
      "3 індивідуальні консультації з Юлією",
      "Складання інвестиційного плану під вас",
      "Доступ до закритого клубу BY INVEST",
      "Особисті стратегії та закриті ефіри",
      "Pre-IPO та інсайти з ринку США",
    ],
    cta: { label: "Обрати MAX", href: "#payment-max" },
    variant: "max",
    badge: "Преміум",
    guarantee: true,
  },
];

function VariantBadge({ t }: { t: Tariff }) {
  if (t.variant === "vip")
    return (
      <div className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-sky-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-[1.5px] text-navyDeep shadow-sky">
        <Star size={12} />
        {t.badge}
      </div>
    );
  if (t.variant === "max")
    return (
      <div className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-white2 px-3 py-1 text-[11px] font-bold uppercase tracking-[1.5px] text-navyDeep shadow-card">
        <Crown size={12} className="text-sky2" />
        {t.badge}
      </div>
    );
  return null;
}

export default function Tariffs() {
  return (
    <section id="tariffs" className="section section-white">
      <div className="container-px">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow">Тарифи</span>
          <h2 className="h2 mt-[18px]">
            Оберіть формат навчання,
            <br />
            який <span className="title-gradient">підходить саме вам</span>
          </h2>
          <p className="lead mt-4">
            Три тарифи — з різним рівнем супроводу. Найбільший результат
            показують студенти на VIP та MAX.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {TARIFFS.map((t) => {
            const variantClass =
              t.variant === "max"
                ? "tariff tariff-max"
                : t.variant === "vip"
                  ? "tariff tariff-vip"
                  : "tariff tariff-base";
            const isDark = t.variant === "max";

            return (
              <div key={t.id} className={variantClass}>
                <VariantBadge t={t} />

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div
                      className={[
                        "font-display text-[26px] font-extrabold tracking-tight",
                        isDark ? "text-white" : "text-textDark",
                      ].join(" ")}
                    >
                      {t.name}
                    </div>
                    <div
                      className={[
                        "mt-1 text-[14px]",
                        isDark ? "text-white/75" : "text-muted",
                      ].join(" ")}
                    >
                      {t.tagline}
                    </div>
                  </div>
                  {t.variant !== "base" && (
                    <Sparkles
                      size={20}
                      className={isDark ? "text-sky1" : "text-sky2"}
                    />
                  )}
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <div
                    className={[
                      "font-display text-[40px] font-extrabold leading-none",
                      isDark ? "text-white" : "text-textDark",
                    ].join(" ")}
                  >
                    {t.price}
                  </div>
                  {t.oldPrice && (
                    <div
                      className={[
                        "text-[15px] line-through",
                        isDark ? "text-white/50" : "text-muted",
                      ].join(" ")}
                    >
                      {t.oldPrice}
                    </div>
                  )}
                </div>

                <ul className="mt-6 space-y-3 text-[14px] sm:text-[15px]">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={[
                          "tariff-feature-icon mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          t.variant === "base"
                            ? "bg-blue50 text-navyDeep"
                            : t.variant === "vip"
                              ? "bg-sky-gradient text-navyDeep"
                              : "",
                        ].join(" ")}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span
                        className={
                          isDark ? "text-white/95" : "text-text"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-2">
                  <Link
                    href={t.cta.href}
                    className={
                      t.variant === "base"
                        ? "btn-outline"
                        : t.variant === "vip"
                          ? "btn-primary"
                          : "btn-secondary"
                    }
                    /* TODO: підмінити на реальне посилання оплати (LiqPay/WayForPay/Stripe) */
                  >
                    {t.cta.label}
                  </Link>
                  <Link
                    href="/diagnostics"
                    className={[
                      "btn-ghost text-[12px] uppercase tracking-[1.5px]",
                      isDark ? "text-white/80 hover:text-white" : "",
                    ].join(" ")}
                  >
                    або записатися на діагностику →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money-back guarantee — accent under tariffs */}
        <div className="mt-12 overflow-hidden rounded-[24px] bg-section-blue p-7 sm:p-9 lg:p-10">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-gradient text-white shadow-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="font-display text-[20px] font-extrabold leading-tight text-textDark sm:text-[22px]">
                  Гарантія повернення 100% коштів
                </div>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-text sm:text-[16px]">
                  Для тарифів{" "}
                  <span className="font-bold text-navyDeep">VIP</span> і{" "}
                  <span className="font-bold text-navyDeep">MAX</span>: якщо ви
                  пройдете перші 2 модулі, виконаєте домашні завдання і
                  зрозумієте, що курс вам не підходить — ми повернемо повну
                  вартість без зайвих питань.
                </p>
              </div>
            </div>
            <Link href="/diagnostics" className="btn-primary shrink-0">
              Записатися на діагностику
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
