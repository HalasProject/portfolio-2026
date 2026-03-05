"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { personal } from "@/content/personal";
import { useTranslations } from "@/components/i18n/useTranslations";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslations();
  const { language, setLanguage } = useLanguage();

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link
          href="#home"
          className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
        >
          {personal.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-2 py-1 text-xs font-medium text-muted-foreground">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-1.5 transition-colors ${
                language === "en"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={t.switcherAriaLabel}
            >
              EN
            </button>
            <span className="text-muted-foreground/60">/</span>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-1.5 transition-colors ${
                language === "fr"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              FR
            </button>
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md"
          >
            <nav className="container mx-auto flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-muted-foreground hover:text-foreground font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={`text-sm font-medium px-1 ${
                    language === "en"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
                <span className="text-muted-foreground/60">/</span>
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={`text-sm font-medium px-1 ${
                    language === "fr"
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  FR
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
