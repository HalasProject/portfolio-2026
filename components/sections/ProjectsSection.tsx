"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/content/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Projects"
          subtitle="A selection of things I've built."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl hover:border-accent/50 transition-all duration-300"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className =
                          "absolute inset-0 flex items-center justify-center text-muted-foreground text-4xl font-bold bg-muted";
                        fallback.textContent = project.title.charAt(0);
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="px-5 pb-5 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline ml-auto"
                >
                  View details →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
