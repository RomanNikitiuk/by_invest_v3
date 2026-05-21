"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useSharedCountdown } from "@/hooks/useSharedCountdown";
import { track } from "@vercel/analytics";

function HeaderCountdown() {
  const secs = useSharedCountdown();

  if (secs === null) {
    return <span className="tabular-nums text-sky2/30 font-bold">--:--:--</span>;
  }

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  return (
    <span className="tabular-nums text-sky2 font-bold">
      {h}:{m}:{s}
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
            Безкоштовна консультація:
            <HeaderCountdown />
          </div>
          <Link href="/diagnostics" onClick={() => track("cta_click", { location: "header_desktop" })} className="btn-primary flex-col items-center gap-0 text-center animate-pulse-glow">
            <span className="flex items-center gap-1.5">Консультація <ArrowRight size={16} className="shrink-0" /></span>
            <span className="text-[9px] font-semibold uppercase tracking-[1px] opacity-70 leading-none">
              Для початківців в інвестиціях
            </span>
          </Link>
        </div>

        <button
          aria-label="Меню"
          className="rounded-lg border border-line p-2 text-textDark lg:hidden"
          onClick={() => { const next = !open; setOpen(next); track("menu_toggle", { action: next ? "open" : "close" }); }}
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
              onClick={() => { setOpen(false); track("cta_click", { location: "header_mobile" }); }}
              className="btn-primary mt-3 flex-col items-center gap-0 text-center animate-pulse-glow"
            >
              <span className="flex items-center gap-2">Записатися на консультацію <ArrowRight size={16} className="shrink-0" /></span>
              <span className="text-[9px] font-semibold uppercase tracking-[1px] opacity-70 leading-none">
                Для початківців в інвестиціях
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
