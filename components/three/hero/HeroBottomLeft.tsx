"use client";

import { HeroSocials } from "./HeroSocials";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTranslations } from "@/components/i18n/useTranslations";

type Props = {
  tagline: string;
  subheading: string;
  socials: { whatsapp: string; linkedin: string; github: string };
  loaded: boolean;
};

export function HeroBottomLeft({
  tagline,
  subheading,
  socials,
  loaded,
}: Props) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations();

  return (
    <div
      className={`fade-in hidden md:block ${loaded ? "visible" : ""}`}
      style={{
        position: "absolute",
        bottom: 60,
        left: 32,
        zIndex: 30,
        maxWidth: 300,
        transitionDelay: "0.3s",
      }}
    >
      <div
        className="mb-3 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] text-white/80"
        role="group"
        aria-label={t.switcherAriaLabel}
      >
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`cursor-pointer tracking-[0.18em] ${
            language === "en"
              ? "text-white"
              : "text-white/60 hover:text-white/90"
          }`}
          aria-label={t.languageEnLabel}
          aria-pressed={language === "en"}
        >
          EN 🇺🇸
        </button>
        <span className="text-white/50" aria-hidden>
          /
        </span>
        <button
          type="button"
          onClick={() => setLanguage("fr")}
          className={`cursor-pointer tracking-[0.18em] ${
            language === "fr"
              ? "text-white"
              : "text-white/60 hover:text-white/90"
          }`}
          aria-label={t.languageFrLabel}
          aria-pressed={language === "fr"}
        >
          FR 🇫🇷
        </button>
      </div>
      <p
        className="body-text text-violet-300 font-medium uppercase tracking-wider"
        style={{ fontSize: 12, marginBottom: 12, letterSpacing: "0.14em" }}
      >
        {t.hero.roleLine ?? tagline}
      </p>
      <p
        className="body-text"
        style={{
          color: "white",
          fontSize: 14,
          lineHeight: 1.6,
          marginBottom: 20,
        }}
      >
        {t.hero.subheading ?? subheading}
      </p>
      <HeroSocials socials={socials} />
    </div>
  );
}
