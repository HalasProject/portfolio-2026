"use client";

import { motion } from "framer-motion";
import { personal } from "@/content/personal";
import { skills } from "@/content/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

const iconMap: Record<string, string> = {
  react: "⚛️",
  nextjs: "▲",
  typescript: "📘",
  tailwind: "🎨",
  node: "🟢",
  api: "🔌",
  database: "🗄️",
  git: "📦",
  docker: "🐳",
  vercel: "▲",
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="About Me"
          subtitle="A bit about who I am and what I do."
        />

        <div className="max-w-2xl">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {personal.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-3"
            >
              <h3 className="font-semibold text-foreground">What I value</h3>
              <ul className="space-y-2">
                {personal.values.map((value, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-accent mt-0.5">•</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-foreground">Skills</h3>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Tag key={skill.name}>
                          <span className="mr-1">
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
          </div>
        </div>
      </div>
    </section>
  );
}
