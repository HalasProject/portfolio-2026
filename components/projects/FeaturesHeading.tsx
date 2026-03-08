"use client";

import { useTranslations } from "@/components/i18n/useTranslations";

export function FeaturesHeading() {
  const { t } = useTranslations();

  return (
    <h2 className="text-xl font-semibold mb-4">
      {t.projectPage.featuresHeading}
    </h2>
  );
}
