"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslations } from "@/components/i18n/useTranslations";

export function ExperienceSection() {
  const { t } = useTranslations();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      data-section
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="relative flex flex-col gap-10 py-8 sm:py-10 sm:flex-row sm:gap-6 sm:items-start sm:overflow-x-auto sm:snap-x sm:snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border hover:scrollbar-thumb-muted-foreground/30">
            {experience.map((job, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group  relative flex w-[320px] min-w-[320px] shrink-0 mx-auto sm:mx-0 sm:snap-center sm:snap-always"
                >
                  {/* Date badge above the card */}
                  <div className=" absolute -top-6 left-0 right-0 flex justify-center">
                    <span className="rounded-full border border-accent/60 bg-background px-3 py-1 text-xs font-medium text-accent shadow-sm">
                      {job.duration}
                    </span>
                  </div>

                  <div
                    className="w-full mt-4 flex h-full min-h-0 flex-col rounded-2xl border border-border bg-card/80 shadow-lg backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-xl overflow-hidden min-h-[200px]"
                    style={{ minHeight: isExpanded ? 280 : undefined }}
                  >
                    {/* Always visible: company, country, date, technologies */}
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="flex h-full min-h-[200px] w-full flex-col items-stretch p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-2xl"
                      aria-expanded={isExpanded}
                      aria-controls={`experience-details-${index}`}
                      id={`experience-card-${index}`}
                    >
                      <div className="flex flex-col gap-3 flex-1 min-h-0">
                        <div className="flex items-start gap-3">
                          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-border bg-card flex items-center justify-center">
                            {job.logo ? (
                              <Image
                                src={job.logo}
                                alt={job.logoAlt ?? `${job.company} logo`}
                                width={44}
                                height={44}
                                className="h-full w-full object-contain"
                              />
                            ) : (
                              <span className="text-sm font-semibold text-accent">
                                {job.company
                                  .split(" ")
                                  .map((word) => word[0])
                                  .join("")
                                  .slice(0, 3)}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-foreground truncate">
                              {job.company}
                            </p>
                            {job.country && (
                              <p className="flex items-center gap-1 mt-0.5 text-sm text-muted-foreground">
                                <span aria-hidden>{job.countryFlag ?? ""}</span>
                                <span>{job.country}</span>
                              </p>
                            )}
                          </div>
                          <span
                            className="shrink-0 text-muted-foreground transition-transform duration-200"
                            aria-hidden
                          >
                            {isExpanded ? (
                              <ChevronDown size={20} />
                            ) : (
                              <ChevronRight size={20} />
                            )}
                          </span>
                        </div>

                        {job.technologies && job.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech.name}
                                className="rounded-md px-2 py-0.5 text-xs font-medium"
                                style={{
                                  backgroundColor: `${tech.color}22`,
                                  color: tech.textLight ? "#fff" : tech.color,
                                  borderWidth: 1,
                                  borderStyle: "solid",
                                  borderColor: `${tech.color}44`,
                                }}
                              >
                                {tech.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <span className="mt-auto pt-3 text-xs font-medium text-accent border-t border-border/60">
                        {isExpanded
                          ? t.experience.showLess
                          : t.experience.viewDetails}
                      </span>
                    </button>

                    {/* Collapsible content */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`experience-details-${index}`}
                          role="region"
                          aria-labelledby={`experience-card-${index}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-border/60"
                        >
                          <div className="p-5 pt-2 space-y-4">
                            <p className="text-sm font-medium text-foreground">
                              {job.role}
                            </p>
                            <div>
                              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent/90">
                                {t.experience.keyContributionsHeading}
                              </p>
                              <ul className="space-y-1.5">
                                {job.keyContributions.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex gap-2 text-muted-foreground text-sm leading-relaxed"
                                  >
                                    <ChevronRight
                                      size={14}
                                      className="mt-0.5 shrink-0 text-accent"
                                      aria-hidden
                                    />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {job.businessImpact &&
                              job.businessImpact.length > 0 && (
                                <div>
                                  <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent/90">
                                    {t.experience.businessImpactHeading}
                                  </p>
                                  <ul className="space-y-1.5">
                                    {job.businessImpact.map((item, i) => (
                                      <li
                                        key={i}
                                        className="flex gap-2 text-muted-foreground text-sm leading-relaxed"
                                      >
                                        <ChevronRight
                                          size={14}
                                          className="mt-0.5 shrink-0 text-accent"
                                          aria-hidden
                                        />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.article>
              );
            })}

            <div className="h-1 w-4 shrink-0 sm:w-6" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
