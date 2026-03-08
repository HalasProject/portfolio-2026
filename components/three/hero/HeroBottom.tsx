"use client";

import { HeroSocialsMobile } from "./HeroSocials";
import { HeroCTA } from "./HeroCTA";
import { useTranslations } from "@/components/i18n/useTranslations";
import { useLanguage } from "@/components/providers/LanguageProvider";

type Props = {
  tagline: string;
  subheading: string;
  socials: { whatsapp: string; linkedin: string; github: string };
  loaded: boolean;
};

export function HeroBottom({ tagline, subheading, socials, loaded }: Props) {
  const { t } = useTranslations();
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`fade-in absolute bottom-16 left-0 right-0 z-30 flex flex-col items-center justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:bottom-16 md:pb-0 md:left-auto md:right-8 md:items-end md:max-w-[300px] md:px-0 ${loaded ? "visible" : ""}`}
      style={{ transitionDelay: "0.5s" }}
    >
      <HeroSocialsMobile socials={socials} />
      <div
        className="mb-2 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] text-white/80 md:hidden"
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
        className="body-text mb-2 text-center text-xs font-medium uppercase tracking-wider text-violet-300 md:hidden"
        style={{ letterSpacing: "0.12em" }}
      >
        {t.hero.roleLine ?? tagline}
      </p>
      <p className="body-text mb-4 text-center text-sm text-white/90 max-w-[280px] md:hidden">
        {t.hero.subheading ?? subheading}
      </p>
      <p
        className="body-text hidden md:block"
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 14,
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {t.hero.detailsLine}
      </p>
      <div className="self-center md:self-start">
        <HeroCTA />
      </div>
    </div>
  );
}
