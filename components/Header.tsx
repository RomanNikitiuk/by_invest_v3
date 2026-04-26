"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#about", label: "Про автора" },
  { href: "#program", label: "Програма" },
  { href: "#tariffs", label: "Тарифи" },
  { href: "#bonuses", label: "Бонуси" },
  { href: "#cases", label: "Кейси" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#results", label: "Результати" },
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
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-[22px] font-extrabold tracking-[0.5px] text-textDark whitespace-nowrap"
        >
          BY <span className="title-gradient">INVEST</span>
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

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/diagnostics" className="btn-primary">
            Діагностика
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
