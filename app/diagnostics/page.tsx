"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/trackEvent";
import {
  ArrowLeft,
  CheckCircle2,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  User,
  MapPin,
} from "lucide-react";
import Footer from "@/components/Footer";

const COUNTRY_CODES = [
  // Популярні (вгорі)
  { code: "+380", label: "🇺🇦 +380 (Україна)" },
  { code: "+48",  label: "🇵🇱 +48 (Польща)" },
  { code: "+49",  label: "🇩🇪 +49 (Німеччина)" },
  { code: "+44",  label: "🇬🇧 +44 (Велика Британія)" },
  { code: "+1",   label: "🇺🇸 +1 (США / Канада)" },
  { code: "+7",   label: "🇰🇿 +7 (Казахстан)" },
  { code: "+20",  label: "🇪🇬 +20 (Єгипет)" },
  { code: "+27",  label: "🇿🇦 +27 (ПАР)" },
  { code: "+30",  label: "🇬🇷 +30 (Греція)" },
  { code: "+31",  label: "🇳🇱 +31 (Нідерланди)" },
  { code: "+32",  label: "🇧🇪 +32 (Бельгія)" },
  { code: "+33",  label: "🇫🇷 +33 (Франція)" },
  { code: "+34",  label: "🇪🇸 +34 (Іспанія)" },
  { code: "+36",  label: "🇭🇺 +36 (Угорщина)" },
  { code: "+39",  label: "🇮🇹 +39 (Італія)" },
  { code: "+40",  label: "🇷🇴 +40 (Румунія)" },
  { code: "+41",  label: "🇨🇭 +41 (Швейцарія)" },
  { code: "+43",  label: "🇦🇹 +43 (Австрія)" },
  { code: "+45",  label: "🇩🇰 +45 (Данія)" },
  { code: "+46",  label: "🇸🇪 +46 (Швеція)" },
  { code: "+47",  label: "🇳🇴 +47 (Норвегія)" },
  { code: "+52",  label: "🇲🇽 +52 (Мексика)" },
  { code: "+54",  label: "🇦🇷 +54 (Аргентина)" },
  { code: "+55",  label: "🇧🇷 +55 (Бразилія)" },
  { code: "+61",  label: "🇦🇺 +61 (Австралія)" },
  { code: "+64",  label: "🇳🇿 +64 (Нова Зеландія)" },
  { code: "+65",  label: "🇸🇬 +65 (Сінгапур)" },
  { code: "+81",  label: "🇯🇵 +81 (Японія)" },
  { code: "+82",  label: "🇰🇷 +82 (Південна Корея)" },
  { code: "+86",  label: "🇨🇳 +86 (Китай)" },
  { code: "+90",  label: "🇹🇷 +90 (Туреччина)" },
  { code: "+91",  label: "🇮🇳 +91 (Індія)" },
  { code: "+351", label: "🇵🇹 +351 (Португалія)" },
  { code: "+352", label: "🇱🇺 +352 (Люксембург)" },
  { code: "+353", label: "🇮🇪 +353 (Ірландія)" },
  { code: "+354", label: "🇮🇸 +354 (Ісландія)" },
  { code: "+356", label: "🇲🇹 +356 (Мальта)" },
  { code: "+358", label: "🇫🇮 +358 (Фінляндія)" },
  { code: "+359", label: "🇧🇬 +359 (Болгарія)" },
  { code: "+370", label: "🇱🇹 +370 (Литва)" },
  { code: "+371", label: "🇱🇻 +371 (Латвія)" },
  { code: "+372", label: "🇪🇪 +372 (Естонія)" },
  { code: "+374", label: "🇦🇲 +374 (Вірменія)" },
  { code: "+385", label: "🇭🇷 +385 (Хорватія)" },
  { code: "+386", label: "🇸🇮 +386 (Словенія)" },
  { code: "+420", label: "🇨🇿 +420 (Чехія)" },
  { code: "+421", label: "🇸🇰 +421 (Словаччина)" },
  { code: "+961", label: "🇱🇧 +961 (Ліван)" },
  { code: "+965", label: "🇰🇼 +965 (Кувейт)" },
  { code: "+966", label: "🇸🇦 +966 (Саудівська Аравія)" },
  { code: "+971", label: "🇦🇪 +971 (ОАЕ)" },
  { code: "+972", label: "🇮🇱 +972 (Ізраїль)" },
  { code: "+974", label: "🇶🇦 +974 (Катар)" },
  { code: "+994", label: "🇦🇿 +994 (Азербайджан)" },
  { code: "+995", label: "🇬🇪 +995 (Грузія)" },
  { code: "+998", label: "🇺🇿 +998 (Узбекистан)" },
];

function validate(form: HTMLFormElement): Record<string, string> {
  const errs: Record<string, string> = {};

  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
  if (!name) errs.name = "Введіть ваше імʼя";
  else if (name.length < 2) errs.name = "Імʼя занадто коротке";

  const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
  if (!phone) errs.phone = "Введіть номер телефону";
  else if (phone.replace(/\D/g, "").length < 6) errs.phone = "Некоректний номер телефону";

  const telegram = (form.elements.namedItem("telegram") as HTMLInputElement).value.trim();
  if (!telegram) errs.telegram = "Введіть ваш Telegram";
  else if (!/^@?[a-zA-Z0-9_]{4,}$/.test(telegram)) errs.telegram = "Мінімум 4 символи латиницею: a–z, 0–9, _";

  const location = (form.elements.namedItem("location") as HTMLInputElement).value.trim();
  if (!location) errs.location = "Вкажіть де ви проживаєте";

  return errs;
}

export default function DiagnosticsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      trackEvent("form_submit", { section: "diagnostics", location: "validation_error" });
      return;
    }
    setErrors({});
    setLoading(true);

    const data = {
      name:     (form.elements.namedItem("name")        as HTMLInputElement).value.trim(),
      phone:    (form.elements.namedItem("countryCode") as HTMLSelectElement).value +
                " " +
                (form.elements.namedItem("phone")       as HTMLInputElement).value.trim(),
      telegram: (form.elements.namedItem("telegram")    as HTMLInputElement).value.trim(),
      location: (form.elements.namedItem("location")    as HTMLInputElement).value.trim(),
      question: (form.elements.namedItem("question")    as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("server error");
      trackEvent("form_submit", { section: "diagnostics", location: "success" });
      setSubmitted(true);
    } catch {
      trackEvent("form_submit", { section: "diagnostics", location: "error" });
      setError("Щось пішло не так. Спробуй ще раз або напиши нам у Telegram.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Top bar */}
      <div className="border-b border-line/70 bg-white2/85 backdrop-blur">
        <div className="container-px flex h-16 items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-navyDeep transition-colors hover:text-sky2"
          >
            <ArrowLeft size={16} />
            На головну
          </Link>
          <Link
            href="/"
            className="font-display text-[16px] font-extrabold tracking-tight text-navyDeep"
          >
            BY <span className="title-gradient">INVEST</span>
          </Link>
        </div>
      </div>

      <section className="section section-blue-soft relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(900px 500px at 85% 10%, rgba(148,212,253,0.35), transparent 65%), radial-gradient(700px 460px at 10% 90%, rgba(170,222,255,0.28), transparent 70%)",
          }}
        />
        <div className="container-px relative">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Side info */}
            <aside className="lg:col-span-5">
              <span className="eyebrow">Безкоштовна консультація</span>
              <h1 className="h2 mt-5">
                Залиште заявку — ми звʼяжемося протягом{" "}
                <span className="title-gradient">24 годин</span>
              </h1>
              <p className="lead mt-5">
                У 30-хвилинній розмові разом визначимо точку старту, ціль
                та підберемо тариф.
              </p>

              <div className="mt-10 rounded-[20px] border border-line bg-white2 p-6 shadow-card">
                <div className="flex items-center gap-2.5 font-display text-[14px] font-extrabold uppercase tracking-[1.5px] text-navyDeep">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-gradient text-navyDeep">
                    <ShieldCheck size={16} />
                  </span>
                  Ваші дані під захистом
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-muted">
                  Ми зберігаємо ваші контакти лише для того, щоб звʼязатися та
                  провести консультацію. Не передаємо третім особам.
                </p>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="card sm:p-10">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-sky-gradient text-navyDeep shadow-sky">
                      <CheckCircle2 size={32} />
                    </div>
                    <div className="font-display text-[26px] font-extrabold text-textDark">
                      Дякуємо! Заявка отримана.
                    </div>
                    <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-muted">
                      Менеджер звʼяжеться з вами найближчим часом у Telegram або
                      по телефону. Перевірте, будь ласка, свої контакти.
                    </p>
                    <Link href="/" className="btn-outline mt-8">
                      <ArrowLeft size={16} />
                      Повернутися на сайт
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={onSubmit}
                    className="grid gap-5"
                    noValidate
                  >
                    <Field label="Ім'я *" icon={<User size={16} />} error={errors.name}>
                      <input
                        name="name"
                        type="text"
                        placeholder="Ваше імʼя"
                        className={`input${errors.name ? " input-error" : ""}`}
                        onChange={() => errors.name && setErrors((p) => ({ ...p, name: "" }))}
                      />
                    </Field>

                    <Field label="Телефон *" icon={<Phone size={16} />} error={errors.phone}>
                      <div className="grid grid-cols-[160px_1fr] gap-2">
                        <select
                          name="countryCode"
                          defaultValue="+380"
                          className="input"
                          aria-label="Код країни"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option
                              key={c.code}
                              value={c.code}
                              className="bg-white2 text-text"
                            >
                              {c.label}
                            </option>
                          ))}
                        </select>
                        <input
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          placeholder="00 000 00 00"
                          className={`input${errors.phone ? " input-error" : ""}`}
                          onChange={() => errors.phone && setErrors((p) => ({ ...p, phone: "" }))}
                        />
                      </div>
                    </Field>

                    <Field label="Telegram *" icon={<Send size={16} />} error={errors.telegram}>
                      <input
                        name="telegram"
                        type="text"
                        placeholder="@username"
                        className={`input${errors.telegram ? " input-error" : ""}`}
                        onChange={() => errors.telegram && setErrors((p) => ({ ...p, telegram: "" }))}
                      />
                    </Field>

                    <Field
                      label="Де зараз проживаєте? *"
                      icon={<MapPin size={16} />}
                      error={errors.location}
                    >
                      <input
                        name="location"
                        type="text"
                        placeholder="Країна, місто (напр. Польща, Варшава)"
                        className={`input${errors.location ? " input-error" : ""}`}
                        onChange={() => errors.location && setErrors((p) => ({ ...p, location: "" }))}
                      />
                    </Field>

                    <Field
                      label="Ваш запит або питання"
                      icon={<MessageSquare size={16} />}
                      hint="Необовʼязкове поле — допоможе менеджеру підготуватися"
                    >
                      <textarea
                        name="question"
                        rows={4}
                        placeholder="Опишіть коротко, що для вас важливо..."
                        className="input resize-none"
                      />
                    </Field>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary mt-2 w-full flex-col items-center gap-0.5 justify-center disabled:opacity-60"
                    >
                      {loading ? "Відправляємо..." : "Записатися на консультацію"}
                      {!loading && (
                        <span className="text-[10px] font-semibold uppercase tracking-[1.5px] opacity-70">
                          Для початківців в інвестиціях
                        </span>
                      )}
                    </button>

                    <p className="text-center text-[11px] leading-relaxed text-muted">
                      Натискаючи кнопку, ви погоджуєтесь з{" "}
                      <Link
                        href="#"
                        className="font-semibold text-navyDeep hover:text-sky2 hover:underline"
                      >
                        політикою конфіденційності
                      </Link>{" "}
                      та обробкою персональних даних.
                    </p>
                    {error && (
                      <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-[13px] text-red-600">
                        {error}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .input {
          width: 100%;
          background: #ffffff;
          border: 1px solid rgba(30, 63, 96, 0.16);
          border-radius: 14px;
          padding: 13px 16px;
          color: #1e3f60;
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
        }
        .input::placeholder {
          color: #8aa2b4;
        }
        .input:hover {
          border-color: rgba(90, 191, 255, 0.5);
        }
        .input:focus {
          border-color: #5abfff;
          box-shadow: 0 0 0 4px rgba(90, 191, 255, 0.15);
        }
        select.input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%231e3f60' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
        }
        .input-error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);
        }
        .input-error:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.18);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  icon,
  hint,
  error,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2.5 flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[1.2px] text-navyDeep">
        {icon ? <span className="text-sky2">{icon}</span> : null}
        {label}
      </div>
      {children}
      {error ? (
        <div className="mt-1.5 text-[12px] font-medium text-red-500">{error}</div>
      ) : hint ? (
        <div className="mt-1.5 text-[12px] text-muted">{hint}</div>
      ) : null}
    </label>
  );
}
