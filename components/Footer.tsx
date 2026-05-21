"use client";

import Link from "next/link";
import { Instagram, Send, Youtube } from "lucide-react";
import { trackEvent } from "@/lib/trackEvent";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white2">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-display text-[18px] font-extrabold tracking-tight"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-gradient text-white shadow-primary">
                BY
              </span>
              <span className="text-navyDeep">
                <span className="title-gradient">INVEST</span>
              </span>
            </Link>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted">
              Авторський курс із інвестування від школи фінансової грамотності
              BY finance. Системне навчання, кураторський супровід та реальні
              результати студентів.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://t.me/+0-vDu-9dAc9lY2Ey"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                onClick={() => trackEvent("social_click", { location: "footer_telegram" })}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:text-sky2 hover:shadow-sky"
              >
                <Send size={16} />
              </a>
              <a
                href="https://www.youtube.com/@byfinance"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                onClick={() => trackEvent("social_click", { location: "footer_youtube" })}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:text-sky2 hover:shadow-sky"
              >
                <Youtube size={16} />
              </a>
              <a
                href="https://www.instagram.com/yulia.batkalova"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                onClick={() => trackEvent("social_click", { location: "footer_instagram" })}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white2 text-navyDeep transition-all hover:-translate-y-0.5 hover:border-sky2 hover:text-sky2 hover:shadow-sky"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="font-display text-[12px] font-extrabold uppercase tracking-[2px] text-navyDeep">
              Розділи
            </div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <Link
                  href="#about"
                  className="text-text transition-colors hover:text-sky2"
                >
                  Про автора
                </Link>
              </li>
              <li>
                <Link
                  href="#program"
                  className="text-text transition-colors hover:text-sky2"
                >
                  Програма
                </Link>
              </li>
              <li>
                <Link
                  href="#tariffs"
                  className="text-text transition-colors hover:text-sky2"
                >
                  Тарифи
                </Link>
              </li>
              <li>
                <Link
                  href="#bonuses"
                  className="text-text transition-colors hover:text-sky2"
                >
                  Бонуси
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="font-display text-[12px] font-extrabold uppercase tracking-[2px] text-navyDeep">
              Контакти
            </div>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a
                  href="mailto:by.finance.school@gmail.com"
                  className="text-text transition-colors hover:text-sky2"
                >
                  by.finance.school@gmail.com
                </a>
              </li>

              <li>
                <Link
                  href="/diagnostics"
                  onClick={() => trackEvent("cta_click", { location: "footer" })}
                  className="text-text transition-colors hover:text-sky2"
                >
                  Записатися на консультацію
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-line" />

        <div className="flex flex-col items-start justify-between gap-3 text-[12px] text-muted sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} BY finance · BY INVEST. Всі права
            захищені.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" onClick={() => trackEvent("legal_click", { page: "privacy" })} className="transition-colors hover:text-sky2">
              Політика конфіденційності
            </Link>
            <Link href="/offer" onClick={() => trackEvent("legal_click", { page: "offer" })} className="transition-colors hover:text-sky2">
              Публічна оферта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
