"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Send, Mail } from "lucide-react";
import { socials } from "@/content/socials";

const links = [
  { href: `mailto:${socials.email}`, icon: Mail, label: "Email" },
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: socials.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  { href: socials.telegram, icon: Send, label: "Telegram" },
];

export function FloatingSocials() {
  return (
    <aside
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
      aria-label="Social links"
    >
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
    </aside>
  );
}
