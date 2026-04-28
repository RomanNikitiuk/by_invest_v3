"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function HeaderCountdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const end = new Date(now);
    end.setDate(end.getDate() + 1);
    end.setHours(23, 59, 59, 999);
    return Math.floor((end.getTime() - now.getTime()) / 1000);
  };
  const [secs, setSecs] = useState(getSecondsLeft);
  useEffect(() => {
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.floor(secs / 86400);
  const h = String(Math.floor((secs % 86400) / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return (
    <span className="tabular-nums text-sky2 font-bold">
      {d > 0 ? `${d}Д ` : ""}{h}:{m}:{s}
    </span>
  );
}

const NAV = [
  { href: "#expert", label: "Експерт" },
  { href: "#program", label: "Програма" },
  { href: "#pricing", label: "Тарифи" },
  { href: "#faq", label: "Питання" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "border-b border-line bg-white/90 backdrop-blur-[14px] shadow-nav"
          : "bg-white/70 backdrop-blur-[10px]",
      ].join(" ")}
    >
      <div className="container-px flex h-[68px] items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[20px] font-extrabold tracking-[0.5px] text-textDark whitespace-nowrap shrink-0"
        >
          BY <span className="title-gradient">Finance</span>
          <span className="hidden items-center gap-1.5 text-[13px] font-medium text-muted sm:flex">
            <span className="text-line">/</span>
            ЮЛІЯ БАТКАЛОВА
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-[14px] font-medium text-steel lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-navyDeep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Countdown + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sky2" />
            Безкоштовна діагностика:
            <HeaderCountdown />
          </div>
          <Link href="/diagnostics" className="btn-primary">
            Діагностика <span className="ml-1">→</span>
          </Link>
        </div>

        <button
          aria-label="Меню"
          className="rounded-lg border border-line p-2 text-textDark lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container-px flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base text-textDark hover:bg-blue50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/diagnostics"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3"
            >
              Записатися на діагностику
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
