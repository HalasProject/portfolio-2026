"use client";

import { useTranslations } from "@/components/i18n/useTranslations";

export function ScrollHint() {
  const { t } = useTranslations();

  return (
    <a
      href="#about"
      className="hero-scroll-hint absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2 md:bottom-6"
      aria-label="Scroll to content"
    >
      <span className="text-[10px] uppercase tracking-widest font-medium body-text">
        {t.about.title}
      </span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 5v14M19 12l-7 7-7-7" />
      </svg>
    </a>
  );
}
