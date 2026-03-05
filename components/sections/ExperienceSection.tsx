"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ChevronRight } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useTranslations } from "@/components/i18n/useTranslations";

export function ExperienceSection() {
  const { t } = useTranslations();

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

        {/* Experience cards — vertical on mobile, horizontal carousel on larger screens */}
        <div className="relative -mx-4 sm:-mx-6 px-4 sm:px-6">
          <div className="relative flex flex-col gap-6 py-8 sm:py-10 sm:flex-row sm:overflow-x-auto sm:snap-x sm:snap-mandatory scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border hover:scrollbar-thumb-muted-foreground/30">
            {experience.map((job, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative flex w-full sm:w-[min(100%,340px)] sm:min-w-[300px] shrink-0 sm:snap-center sm:snap-always"
              >
                {/* Timeline label — date range above the card */}
                <div className="absolute -top-6 left-0 right-0 flex justify-center">
                  <span className="rounded-full border border-accent/60 bg-background px-3 py-1 text-xs font-medium text-accent shadow-sm">
                    {job.duration}
                  </span>
                </div>

                {/* Card */}
                <div className="mt-4 flex h-full min-h-[280px] flex-col rounded-2xl border border-border bg-card/80 p-5 shadow-lg backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-xl">
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
                      <h3 className="font-semibold text-foreground truncate">
                        {job.role}
                      </h3>
                      <p className="flex items-center gap-1 text-sm font-medium text-accent truncate">
                        <span className="truncate">{job.company}</span>
                        {job.country && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                            <span aria-hidden>{job.countryFlag ?? ""}</span>
                            <span className="hidden sm:inline">{job.country}</span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {(job.location || job.remote) && (
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} className="shrink-0" />
                      <span>
                        {job.location}
                        {job.remote ? t.experience.remoteSuffix : ""}
                      </span>
                    </div>
                  )}

                  <div className="mt-4 flex-1 space-y-3">
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
                    {job.businessImpact && job.businessImpact.length > 0 && (
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

                  {job.technologies && job.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
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
              </motion.article>
            ))}

            {/* Right padding for last card */}
            <div className="h-1 w-4 shrink-0 sm:w-6" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
