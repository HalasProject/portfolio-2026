"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Send, Download, FolderOpen, Mail } from "lucide-react";
import { personal } from "@/content/personal";
import { socials } from "@/content/socials";
import { Button } from "@/components/ui/Button";

const HeroCanvas = dynamic(
  () => import("@/components/three/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [0.7, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroCanvas />
      <motion.div
        style={{ opacity, y }}
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background pointer-events-none"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 sm:px-6 py-24 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
          >
            {personal.headline}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {personal.subheading}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a href="/cv.pdf" download="Salah-CV.pdf">
              <Button variant="primary" className="gap-2">
                <Download size={18} />
                Download CV
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="gap-2">
                <FolderOpen size={18} />
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" className="gap-2">
                <Mail size={18} />
                Contact Me
              </Button>
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-card/50 p-3 text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={22} />
            </a>
            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-border bg-card/50 p-3 text-muted-foreground hover:text-foreground hover:border-accent transition-colors"
              aria-label="Telegram"
            >
              <Send size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
