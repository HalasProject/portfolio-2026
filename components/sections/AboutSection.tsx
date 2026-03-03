"use client";

import { motion } from "framer-motion";
import { Code2, Target, Zap, BookOpen } from "lucide-react";
import { personal } from "@/content/personal";
import { skills, type SkillGroup, type SkillItem } from "@/content/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

const iconMap: Record<string, string> = {
  react: "⚛️",
  nextjs: "▲",
  vue: "🟢",
  javascript: "🟡",
  typescript: "📘",
  tailwind: "🎨",
  node: "🟢",
  api: "🔌",
  database: "🗄️",
  git: "📦",
  docker: "🐳",
  vercel: "▲",
  aws: "☁️",
  python: "🐍",
  django: "🌿",
  laravel: "🧱",
  postgres: "🐘",
  aiAgent: "🤖",
};

const valueIcons = [Code2, Target, BookOpen];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="About Me"
          subtitle="A quick snapshot of who I am and how I work."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-5xl space-y-10 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10 lg:space-y-0"
        >
          {/* Left column – story & values */}
          <div className="space-y-10 sm:space-y-12">
            {/* Bio block */}
            <motion.div
              variants={item}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-br from-background/70 via-background/90 to-background/60 p-6 sm:p-7"
            >
              <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-accent/10 to-transparent pointer-events-none" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-3">
                Developer | Engineer | Passionate
              </p>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed">
                {personal.bio}
              </p>
            </motion.div>

            {/* Values — card-style grid */}
            <motion.div variants={item} className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Zap className="h-5 w-5 text-accent" aria-hidden />
                How I like to work
              </h3>
              <div className="grid gap-3 sm:grid-cols-1">
                {personal.values.map((value, i) => {
                  const Icon = valueIcons[i] ?? Target;
                  return (
                    <motion.div
                      key={i}
                      variants={item}
                      whileHover={{ x: 4 }}
                      className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-accent/40 hover:bg-card/90"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <p className="text-muted-foreground leading-relaxed pt-1.5">
                        {value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right column – skills spotlight */}
          <motion.div
            variants={item}
            className="mt-6 lg:mt-0 rounded-2xl border border-accent/40 bg-gradient-to-b from-accent/15 via-background to-background/80 p-5 sm:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.6)]"
          >
            <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Code2 className="h-5 w-5 text-accent" aria-hidden />
              Skills spotlight
            </h3>
            <p className="body-text mb-5 text-sm text-muted-foreground">
              I work across the full stack, with a focus on{" "}
              <span className="font-semibold text-foreground">
                React, Next.js, TypeScript, Node.js
              </span>{" "}
              and modern DevOps practices.
            </p>
            <div className="space-y-6">
              {skills.map((group: SkillGroup) => (
                <div key={group.label} className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground/90 uppercase tracking-[0.2em]">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill: SkillItem) => (
                      <Tag
                        key={skill.name}
                        className="border-accent/30 bg-background/80 text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/70 hover:bg-accent/10"
                      >
                        <span className="mr-1.5" aria-hidden>
                          {iconMap[skill.icon] ?? "•"}
                        </span>
                        {skill.name}
                      </Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
