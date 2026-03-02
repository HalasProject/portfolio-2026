"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { experience } from "@/content/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-card/20">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Experience"
          subtitle="Where I've worked and what I've delivered."
        />

        <div className="relative max-w-3xl mx-auto space-y-8">
          {experience.map((job, index) => (
            <Card key={index} className="text-left">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-accent font-medium">{job.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                  <Briefcase size={16} />
                  <span>{job.duration}</span>
                </div>
              </div>
              {(job.location || job.remote) && (
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin size={14} />
                  <span>
                    {job.location}
                    {job.remote ? " · Remote" : ""}
                  </span>
                </div>
              )}
              <ul className="mt-4 space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="text-accent shrink-0">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
