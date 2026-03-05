"use client";

import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "@/components/i18n/useTranslations";

type Props = {
  liveUrl?: string;
  githubUrl?: string;
};

export function ProjectCtas({ liveUrl, githubUrl }: Props) {
  const { t } = useTranslations();

  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-medium bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
        >
          <ExternalLink size={18} />
          {t.projectPage.visitLive}
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-medium border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Github size={18} />
          {t.projectPage.viewOnGithub}
        </a>
      )}
    </div>
  );
}

