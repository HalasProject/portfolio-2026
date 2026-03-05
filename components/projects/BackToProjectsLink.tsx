"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useTranslations } from "@/components/i18n/useTranslations";

type Props = {
  href: string;
};

export function BackToProjectsLink({ href }: Props) {
  const { t } = useTranslations();

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
    >
      <ArrowLeft size={18} aria-hidden />
      {t.projectPage.backToProjects}
    </Link>
  );
}

