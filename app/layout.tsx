import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BY INVEST — авторський курс із інвестування від Юлії Бєлінської",
  description:
    "Школа BY finance — навчання інвестуванню з нуля. Три тарифи: START, VIP, MAX. Запис на безкоштовну консультацію та консультацію.",
  openGraph: {
    title: "BY INVEST — школа фінансової грамотності BY finance",
    description:
      "Авторський курс із інвестування. 6 модулів, ексклюзивні бонуси, гарантія повернення.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white2 text-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
