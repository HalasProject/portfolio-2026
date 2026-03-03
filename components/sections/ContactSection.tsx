"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Loader2 } from "lucide-react";
import { socials } from "@/content/socials";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { contactAction, type ContactResult } from "@/app/actions/contact";

export function ContactSection() {
  const [result, setResult] = useState<ContactResult | null>(null);
  const [isPending, setIsPending] = useState(false);

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
          title="Contact"
          subtitle="Get in touch or reach out on WhatsApp or Telegram."
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
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>

            {result && (
              <div
                className={`rounded-xl px-4 py-3 text-sm ${
                  result.success
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
                  Sending...
                </>
              ) : (
                "Send message"
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
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-foreground hover:border-accent hover:bg-accent/10 transition-colors"
            >
              <Send size={20} />
              Telegram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
