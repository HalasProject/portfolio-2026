import Link from "next/link";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { socials } from "@/content/socials";

const socialLinks = [
  { href: socials.email, icon: Mail, label: "Email" },
  { href: socials.github, icon: Github, label: "GitHub" },
  { href: socials.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: socials.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  { href: socials.telegram, icon: Send, label: "Telegram" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30 py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} />
            <span>{socials.email}</span>
          </a>
          <div className="flex items-center gap-4">
            {socialLinks.slice(1).map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          © {year} Salah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
