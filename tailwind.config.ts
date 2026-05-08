import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // BY finance brand palette (light theme)
        bg: "#f7fcff",
        white2: "#ffffff",
        blue50: "#eff6fc",
        blue100: "#e7f4fe",
        blue200: "#d6ecfc",
        blueSoft: "#aadeff",
        sky1: "#94d4fd",
        sky2: "#5abfff",
        navyDeep: "#1e3f60",
        navyMid: "#5383b3",
        steel: "#587f97",
        text: "#404040",
        textDark: "#1e3f60",
        muted: "#587f97",
        line: "rgba(30, 63, 96, 0.12)",
        accent: "#5abfff",
      },
      fontFamily: {
        sans: ["Raleway", "Inter", "system-ui", "sans-serif"],
        display: ["Raleway", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        nav: "0 1px 0 rgba(30,63,96,0.06)",
        card: "0 30px 80px rgba(30,63,96,0.08), 0 4px 16px rgba(30,63,96,0.04)",
        cardHover: "0 22px 46px rgba(30,63,96,0.14)",
        primary: "0 8px 20px rgba(30,63,96,0.28)",
        primaryHover: "0 14px 28px rgba(30,63,96,0.4)",
        sky: "0 10px 24px rgba(90,191,255,0.25)",
      },
      backgroundImage: {
        "navy-gradient":
          "linear-gradient(294deg, #1e3f60 0%, #5383b3 54%, #1e3f60 100%)",
        "sky-gradient":
          "linear-gradient(116deg, #94d4fd 0%, #aadeff 55%, #94d4fd 100%)",
        "title-gradient":
          "linear-gradient(116deg, #5383b3 0%, #5abfff 100%)",
        "hero-gradient":
          "linear-gradient(116deg, #1e3f60 0%, #5383b3 55%, #5abfff 100%)",
        "section-blue":
          "linear-gradient(180deg, #e7f4fe 0%, #d6ecfc 100%)",
        "hero-radial":
          "radial-gradient(900px 500px at 85% 10%, rgba(90,191,255,0.45), transparent 60%), radial-gradient(700px 400px at 0% 90%, rgba(148,212,253,0.35), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(90,191,255,0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgba(90,191,255,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        float: "float 6.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
