"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useTranslations } from "@/components/i18n/useTranslations";

export function MobileLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslations();
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      // If there's no hero section (e.g. project detail pages), always show
      queueMicrotask(() => setHeroInView(false));
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!heroInView && (
        <motion.button
          type="button"
          onClick={() => setLanguage(language === "en" ? "fr" : "en")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer fixed bottom-4 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-lg shadow-lg backdrop-blur sm:hidden"
          aria-label={t.switcherAriaLabel}
        >
          {language === "en" ? "🇬🇧" : "🇫🇷"}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
