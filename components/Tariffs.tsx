import Link from "next/link";
import { Check, Crown, ShieldCheck, Sparkles, Star } from "lucide-react";

type Tariff = {
  id: "start" | "vip" | "max";
  name: string;
  tagline: string;
  price: string;
  oldPrice?: string;
  salePrice?: string;
  features: string[];
  bonuses?: string[];
  cta: { label: string; href: string };
  bookHref: string;
  variant: "base" | "vip" | "max";
  badge?: string;
  guarantee?: boolean;
};

const START_BONUSES = [
  "Таблиця контролю бюджету",
  "ТОП додатків для фінансів",
  "Калькулятор інвест. прибутковості (5, 10, 20 років)",
  "Практична система: як закрити кредит швидше",
  "Чек-лист для українців за кордоном",
  "Інструкція з декларування інвест. доходу",
  "Шаблон збалансованого портфеля",
  "ТОП-5 порад безпеки по крипті",
  "Гайд по спадщині",
  "Список активів для портфеля (Україна + Європа)",
  "2 готові інвестиційні стратегії",
];

const TARIFFS: Tariff[] = [
  {
    id: "start",
    name: "START",
    tagline: "Для тих, хто хоче розібратись самостійно у своєму темпі",
    price: "$650",
    salePrice: "$520",
    features: [
      "Повний доступ до всіх 6 модулів програми",
      "Доступ до матеріалів — 4 місяці",
    ],
    bonuses: START_BONUSES,
    cta: { label: "Обрати START", href: "https://secure.wayforpay.com/payment/se54c1900da3d" },
    variant: "base",
    bookHref: "https://secure.wayforpay.com/payment/se54c1900da3d",
  },
  {
    id: "vip",
    name: "VIP",
    tagline: "Для тих, хто хоче підтримку однодумців та наставника",
    price: "$950",
    salePrice: "$690",
    features: [
      "Бонуси: весь пакет START",
      "Доступ до матеріалів — 6 місяців",
      "+ Сертифікат по закінченню навчання",
      "+ Доступ до клубу випускників назавжди",
      "Груповий чат зі студентами та куратором (фінансовий радник)",
      "6 місяців зворотного зв'язку від куратора в груповому чаті",
      "Участь у груповому розробі інвест. стратегії від куратора",
      "Особиста допомога під час відкриття брокерського рахунку",
      "100% гарантія повернення грошей до закінчення першого модуля",
    ],
    cta: { label: "Обрати VIP", href: "https://secure.wayforpay.com/payment/sb0eeb131e7de" },
    variant: "vip",
    badge: "Популярний",
    guarantee: true,
    bookHref: "https://secure.wayforpay.com/payment/sb0eeb131e7de",
  },
  {
    id: "max",
    name: "MAX",
    tagline: "Для тих, хто хоче результат з особистою увагою та контролем",
    price: "$1 600",
    salePrice: "$1 290",
    features: [
      "Бонуси: весь пакет START + VIP",
      "Доступ до матеріалів — 12 місяців",
      "+ Сертифікат + Клуб випускників",
      "Груповий чат + індивідуальний чат з куратором",
      "Зворотний зв'язок на твою особисту ситуацію",
      "12 місяців індивідуального супроводу куратора",
      "Особиста інвест. стратегія під будь-які цілі: накопичення капіталу, дорога покупка тощо",
      "3 онлайн розбори з куратором протягом навчання за запитом",
      "1 розбір портфелю та інвест. стратегії від Юлі у вигляді конкретних кроків",
    ],
    cta: { label: "Обрати MAX", href: "https://secure.wayforpay.com/payment/s08df71de0a97" },
    variant: "max",
    badge: "10 місць",
    guarantee: true,
    bookHref: "https://secure.wayforpay.com/payment/s08df71de0a97",
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
    <section id="pricing" className="section section-dark overflow-hidden">
      {/* Gradient accents */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #5abfff 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #94d4fd 0%, transparent 70%)" }}
      />
      <div className="container-px relative">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow-inv">Тарифи</span>
          <h2 className="h2 mt-[18px] text-white">
            Оберіть формат навчання,
            <br />
            який <span className="text-sky2">підходить саме вам</span>
          </h2>
          <p className="lead mt-4 text-white/70">
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

                {/* Top content — grows to fill card, keeps price block at bottom */}
                <div className="flex-1">
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

                  {/* Main features */}
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
                        <span className={isDark ? "text-white/95" : "text-text"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* START bonuses block */}
                  {t.bonuses && (
                    <div className="mt-5 rounded-[14px] border border-sky2/30 bg-sky2/5 p-4">
                      <div className="mb-3 font-display text-[11px] font-extrabold uppercase tracking-[2px] text-navyDeep">
                        Бонуси:
                      </div>
                      <ul className="space-y-2">
                        {t.bonuses.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-[13px] text-text">
                            <Check size={11} strokeWidth={3} className="mt-0.5 shrink-0 text-sky2" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Price block — always has fixed gap from content above */}
                <div className="mt-8 border-t border-line/50 pt-6">
                  {/* Strikethrough original price */}
                  <div
                    className={[
                      "text-[16px] font-semibold line-through",
                      isDark ? "text-white/40" : "text-muted",
                    ].join(" ")}
                  >
                    {t.price}
                  </div>

                  {/* Sale price + booking text */}
                  {t.salePrice && (
                    <div className="mt-2 grid grid-cols-[auto_1fr] items-center gap-3">
                      <div className="font-display text-[38px] font-extrabold leading-none text-emerald-500">
                        {t.salePrice}
                      </div>
                      <p
                        className={[
                          "text-[12px] leading-relaxed",
                          isDark ? "text-white/70" : "text-muted",
                        ].join(" ")}
                      >
                        Забронюй за собою місце за{" "}
                        <span className="font-bold text-emerald-500">
                          {t.salePrice}
                        </span>
                        , залишивши заявку на консультацію
                      </p>
                    </div>
                  )}

                  {/* Book CTA */}
                  <Link
                    href={t.bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "mt-5 block animate-pulse-glow",
                      isDark ? "btn-secondary" : "btn-primary",
                    ].join(" ")}
                  >
                    Забронювати місце
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Money-back guarantee */}
        <div className="mt-12 overflow-hidden rounded-[24px] border border-white/10 p-7 sm:p-9 lg:p-10" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-sky-gradient text-navyDeep shadow-sky">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="font-display text-[20px] font-extrabold leading-tight text-white sm:text-[22px]">
                  Гарантія повернення 100% коштів
                </div>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-[16px]">
                  Для тарифів{" "}
                  <span className="font-bold text-sky2">VIP</span> і{" "}
                  <span className="font-bold text-sky2">MAX</span>: діє
                  100% гарантія повернення коштів до закінчення першого модуля
                  — без зайвих питань.
                </p>
              </div>
            </div>
            <Link href="/diagnostics" className="btn-primary shrink-0 flex-col items-center gap-0.5 text-center">
              Записатися на консультацію
              <span className="text-[10px] font-semibold uppercase tracking-[1.5px] opacity-70">
                Для початківців в інвестиціях
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
