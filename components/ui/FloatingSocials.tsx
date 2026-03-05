"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Send, Mail } from "lucide-react";
import { socials } from "@/content/socials";
import { useTranslations } from "@/components/i18n/useTranslations";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export function FloatingSocials() {
  const [heroInView, setHeroInView] = useState(true);
  const { t } = useTranslations();
  const { language, setLanguage } = useLanguage();

  const links = [
    { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
    { href: socials.github, icon: Github, label: "GitHub" },
    { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socials.whatsapp, icon: WhatsappIcon, label: t.contact.whatsappLabel },
    { href: socials.telegram, icon: Send, label: t.contact.telegramLabel },
  ];

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) {
      // If there's no hero section (e.g. project detail pages), always show
      setHeroInView(false);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => setHeroInView(e.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {!heroInView && (
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.2 }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
          aria-label="Social links and language switcher"
        >
          <motion.button
            type="button"
            onClick={() => setLanguage(language === "en" ? "fr" : "en")}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm text-md font-semibold text-muted-foreground hover:text-accent hover:border-accent transition-colors"
            aria-label={t.switcherAriaLabel}
          >
            {language === "en" ? "🇬🇧" : "🇫🇷"}
          </motion.button>
          {links.map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-accent hover:border-accent transition-colors"
              aria-label={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
