"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
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
  { code: "+380", label: "🇺🇦 +380 (Україна)" },
  { code: "+48", label: "🇵🇱 +48 (Польща)" },
  { code: "+49", label: "🇩🇪 +49 (Німеччина)" },
  { code: "+44", label: "🇬🇧 +44 (Велика Британія)" },
  { code: "+1", label: "🇺🇸 +1 (США/Канада)" },
  { code: "+972", label: "🇮🇱 +972 (Ізраїль)" },
  { code: "+420", label: "🇨🇿 +420 (Чехія)" },
  { code: "+34", label: "🇪🇸 +34 (Іспанія)" },
  { code: "+39", label: "🇮🇹 +39 (Італія)" },
  { code: "+33", label: "🇫🇷 +33 (Франція)" },
];

export default function DiagnosticsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: підключити бекенд / Formspree / Telegram-бот / CRM
    // Поки що — імітація відправки і показ "Дякуємо".
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
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
              <h1 className="h1 mt-5">
                Залиште заявку — ми зателефонуємо протягом{" "}
                <span className="title-gradient">24 годин</span>
              </h1>
              <p className="lead mt-5">
                У 30-хвилинній розмові разом визначимо точку старту, ціль,
                підберемо тариф та подаруємо чек-лист «Перші кроки інвестора».
              </p>

              <ul className="mt-8 space-y-4 text-[14px] sm:text-[15px]">
                {[
                  "Поговоримо з куратором, а не з ботом",
                  "Розберемо вашу ситуацію без оцінок і тиску",
                  "Підкажемо тариф, який реально підходить",
                  "Жодних спам-дзвінків — лише по записаному часу",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-gradient text-navyDeep shadow-sky">
                      <CheckCircle2 size={14} strokeWidth={2.5} />
                    </span>
                    <span className="text-text">{t}</span>
                  </li>
                ))}
              </ul>

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
                    <Field label="Ім'я *" icon={<User size={16} />}>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Ваше імʼя"
                        className="input"
                      />
                    </Field>

                    <Field label="Телефон *" icon={<Phone size={16} />}>
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
                          required
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          placeholder="00 000 00 00"
                          className="input"
                        />
                      </div>
                    </Field>

                    <Field label="Telegram *" icon={<Send size={16} />}>
                      <input
                        required
                        name="telegram"
                        type="text"
                        placeholder="@username"
                        className="input"
                      />
                    </Field>

                    <Field
                      label="Де зараз проживаєте? *"
                      icon={<MapPin size={16} />}
                    >
                      <input
                        required
                        name="location"
                        type="text"
                        placeholder="Країна, місто (напр. Польща, Варшава)"
                        className="input"
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
                      className="btn-primary mt-2 w-full justify-center disabled:opacity-60"
                    >
                      {loading
                        ? "Відправляємо..."
                        : "Записатися на консультацію"}
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
      `}</style>
    </div>
  );
}

function Field({
  label,
  icon,
  hint,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-2.5 flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[1.2px] text-navyDeep">
        {icon ? <span className="text-sky2">{icon}</span> : null}
        {label}
      </div>
      {children}
      {hint ? (
        <div className="mt-1.5 text-[12px] text-muted">{hint}</div>
      ) : null}
    </label>
  );
}
