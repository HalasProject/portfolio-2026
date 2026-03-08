"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import { messages, type Language } from "@/content/i18n";

export function useTranslations() {
  const { language } = useLanguage();
  const activeLanguage: Language =
    language in messages ? (language as Language) : "en";

  const t = messages[activeLanguage];

  return {
    t,
    language: activeLanguage,
  };
}
