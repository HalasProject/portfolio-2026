"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { socials } from "@/content/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { contactAction, type ContactResult } from "@/app/actions/contact";
import { useTranslations } from "@/components/i18n/useTranslations";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";

export function ContactSection() {
  const [result, setResult] = useState<ContactResult | null>(null);
  const [isPending, setIsPending] = useState(false);
  const { t } = useTranslations();

  async function handleSubmit(formData: FormData) {
    setResult(null);
    setIsPending(true);
    try {
      const res = await contactAction(formData);
      setResult(res);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="contact" data-section className="py-20 sm:py-28 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mx-auto max-w-xl space-y-8">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            action={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            {result && (
              <div
                className={`rounded-xl px-4 py-3 text-sm ${result.success
                    ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
                  }`}
              >
                {result.message}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full gap-2"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  {t.contact.submitLoading}
                </>
              ) : (
                t.contact.submitIdle
              )}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <WhatsappIcon size={20} />
              {t.contact.whatsappLabel}
            </a>
            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <Send size={20} />
              {t.contact.telegramLabel}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
