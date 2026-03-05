"use client";

import { useTranslations } from "@/components/i18n/useTranslations";

export function HeroCTA() {
  const { t } = useTranslations();

  return (
    <a href="#contact" className="lets-talk-btn">
      <span className="btn-text" style={{ fontSize: 15 }}>
        {t.hero.ctaPrimary}
      </span>
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </span>
    </a>
  );
}
