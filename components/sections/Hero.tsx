"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Mail, FolderOpen, Download } from "lucide-react";
import { personal } from "@/content/personal";
import { socials } from "@/content/socials";
import { Button } from "@/components/ui/Button";
import { useTranslations } from "@/components/i18n/useTranslations";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useTranslations();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600 px-4 py-10 sm:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.65),_transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/98 border border-white/10 shadow-[0_32px_80px_rgba(15,23,42,0.85)] overflow-hidden">
        {/* Top nav tabs */}
        <div className="flex items-center justify-between px-5 sm:px-8 pt-4 sm:pt-5">
          <div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 p-1">
            {[
              { label: t.nav.home, href: "#home", active: true },
              { label: t.nav.about, href: "#about" },
              { label: t.nav.projects, href: "#projects" },
              { label: t.nav.blog, href: "#blog" },
              { label: t.nav.contact, href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors ${item.active
                    ? "bg-violet-500 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                    : "text-slate-300/80 hover:bg-slate-800/80"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main hero content */}
        <div className="relative mt-4 grid gap-8 px-5 sm:px-8 pb-8 sm:pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Left text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.p
              variants={item}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-violet-300"
            >
              {personal.title}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none tracking-tight text-white"
            >
              {personal.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-md text-sm sm:text-base text-slate-300"
            >
              {t.hero.subheading}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap items-center gap-3"
            >
              <a href="#projects">
                <Button
                  variant="primary"
                  className="gap-2 rounded-full px-5 py-2.5 text-sm"
                >
                  <FolderOpen size={16} />
                  {t.hero.ctaViewProjects}
                </Button>
              </a>
              <a href="/cv.pdf" download="Salah-CV.pdf">
                <Button
                  variant="outline"
                  className="gap-2 rounded-full px-5 py-2.5 text-sm border-violet-400/70 text-violet-200 hover:bg-violet-500 hover:text-white"
                >
                  <Download size={16} />
                  {t.hero.ctaDownloadCv}
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="secondary"
                  className="gap-2 rounded-full px-5 py-2.5 text-sm"
                >
                  <Mail size={16} />
                  {t.hero.ctaPrimary}
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-4 flex items-center gap-3 text-slate-400 text-xs sm:text-sm"
            >
              <span className="text-slate-300/80">Find me on</span>
              <div className="flex items-center gap-2">
                <a
                  href={socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon size={18} />
                </a>
                <a
                  href={socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-500 transition-colors"
                  aria-label="Telegram"
                >
                  <Send size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: big name + avatar card */}
          <div className="relative mt-4 md:mt-0">
            {/* Oversized name in background */}
            <div className="pointer-events-none select-none">
              <p className="text-[56px] xs:text-[64px] sm:text-[80px] md:text-[92px] lg:text-[104px] font-extrabold tracking-tight text-white/6 leading-none">
                {personal.name.split(" ")[0]}
              </p>
              <p className="text-[56px] xs:text-[64px] sm:text-[80px] md:text-[92px] lg:text-[104px] font-extrabold tracking-tight text-white/6 leading-none -mt-4 ml-6">
                {personal.name.split(" ")[1] ?? personal.title.split(" ")[0]}
              </p>
            </div>

            {/* Avatar card */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-[2.5rem] bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.9)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(88,28,135,0.6),_transparent_60%)]" />

                {/* Placeholder image - replace src with your PNG later */}
                <div className="relative z-10 flex h-full items-end justify-center pb-2">
                  <Image
                    src="/me.png"
                    alt={personal.name}
                    width={320}
                    height={320}
                    className="h-[92%] w-auto object-contain drop-shadow-[0_26px_60px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
