"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const LANG_MAP = { en: "en", fr: "fr" } as const;

/**
 * Syncs document lang attribute with current app language for screen readers and i18n.
 */
export function LangSync() {
  const { language } = useLanguage();

  useEffect(() => {
    const lang = LANG_MAP[language] ?? "en";
    document.documentElement.lang = lang;
  }, [language]);

  return null;
}
