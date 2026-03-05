import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { Check } from "lucide-react";
import { getProjectBySlug, projects } from "@/content/projects";
import { getProjectGalleryImages } from "@/lib/project-images";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocials } from "@/components/ui/FloatingSocials";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToProjectsLink } from "@/components/projects/BackToProjectsLink";
import { ProjectCtas } from "@/components/projects/ProjectCtas";
import { FeaturesHeading } from "@/components/projects/FeaturesHeading";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const galleryImages = getProjectGalleryImages(slug);

  return (
    <>
      <ScrollProgressBar />
      <FloatingSocials />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <BackToProjectsLink href="/#projects" />

          <article className="max-w-4xl mx-auto">
            {/* Hero image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted mb-10 shadow-xl">
              <ProjectImage
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>

            {/* Project gallery from public/projects/[slug]/ */}
            <ProjectGallery images={galleryImages} title={project.title} />

            <header className="mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {project.longDescription ?? project.description}
              </p>
            </header>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-accent/20 px-3 py-1.5 text-sm font-medium text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.slug === "miyam" && (
              <section className="mb-10 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="plate">
                      🍽
                    </span>
                    Miyam – Digital Menu Generator for Restaurants
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Miyam.io is a digital menu creation platform that lets restaurants, cafés,
                    and fast-food businesses create, manage, and share modern mobile-friendly
                    menus. It replaces static printed menus with dynamic digital menus that can
                    be updated in seconds.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Why I built it
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Spending a lot of time in restaurants, I kept seeing the same problems:
                      outdated printed menus, missing items, no real photos, and inconsistent
                      branding. Miyam was my answer — a way to help restaurant owners modernize
                      their image, update menus instantly, and give customers a better digital
                      experience.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We successfully onboarded over 100 restaurants, fast-food spots, and
                      coffee shops across Algeria, helping them transition to digital menus.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      What it offers
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>📱 Mobile-first digital menus</li>
                      <li>🖼 Image support for real dish presentation</li>
                      <li>🛠 Simple dashboard for creating & editing menus</li>
                      <li>🔗 Shareable public links and QR codes</li>
                      <li>🔐 Secure authentication for restaurant owners</li>
                      <li>⚡ Instant updates without reprinting</li>
                      <li>🎨 Clean, customizable layout</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-border/70 bg-card/70 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Technical stack
                  </h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Frontend</p>
                      <ul className="space-y-1">
                        <li>• Next.js with SSR for performance and SEO</li>
                        <li>• Responsive, mobile-first UI</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Auth & APIs</p>
                      <ul className="space-y-1">
                        <li>• NextAuth.js for secure authentication</li>
                        <li>• tRPC for type-safe end-to-end communication</li>
                        <li>• Prisma as ORM with structured data models</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Database</p>
                      <ul className="space-y-1">
                        <li>• PostgreSQL</li>
                        <li>• Schema designed for multi-restaurant usage</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Media & assets</p>
                      <ul className="space-y-1">
                        <li>• S3 bucket for optimized image storage & delivery</li>
                        <li>• Fast loading menus even on mobile networks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Impact & what it represents
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Miyam shows my ability to identify real problems in local markets, turn them
                    into SaaS products, and design scalable full-stack solutions. It&apos;s a mix
                    of product thinking and engineering — built to help small businesses go
                    digital with tools that feel premium but stay simple to use.
                  </p>
                </div>
              </section>
            )}

            {project.slug === "trackfast" && (
              <section className="mb-10 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="car">
                      🚗
                    </span>
                    TrackFast – Real-Time GPS Tracking Platform
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    TrackFast is a real-time GPS tracking system for cars and motorcycles.
                    It lets vehicle owners and fleet managers monitor location, movement, and
                    activity through a secure web dashboard — from device, to cloud, to UI.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Why I built it
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I&apos;m passionate about cars and motorcycles, and wanted to see if I could
                      build my own end-to-end GPS ecosystem — owning the full pipeline from
                      embedded device to cloud infrastructure to real-time dashboard.
                      What started as a curiosity turned into a production-ready, scalable
                      platform.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      What it does
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>📍 Real-time GPS tracking with live location updates</li>
                      <li>📊 Movement history and route visualization</li>
                      <li>🚦 Vehicle status and activity monitoring</li>
                      <li>🔐 Secure device-to-server communication</li>
                      <li>🧩 Scalable multi-device architecture</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-border/70 bg-card/70 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Technical architecture
                  </h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Device layer</p>
                      <ul className="space-y-1">
                        <li>• GPS module for precise location data</li>
                        <li>• GSM / 4G module for data transmission</li>
                        <li>• Lightweight custom protocol and payloads</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Backend & APIs</p>
                      <ul className="space-y-1">
                        <li>• Java backend with custom TCP / socket server</li>
                        <li>• REST APIs consumed by the React dashboard</li>
                        <li>• Real-time event handling and device auth</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Frontend</p>
                      <ul className="space-y-1">
                        <li>• React.js dashboard with live maps</li>
                        <li>• Vehicle management and tracking UI</li>
                        <li>• Real-time data updates and route playback</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Infrastructure</p>
                      <ul className="space-y-1">
                        <li>• Cloud-hosted backend</li>
                        <li>• Time-series optimized database schema</li>
                        <li>• Scaled to support multiple devices</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    What this project shows
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    TrackFast reflects my ability to think beyond a simple web app: design a
                    hardware-integrated system, architect the backend, build the frontend
                    experience, and ship a solution that is both scalable and production-ready.
                  </p>
                </div>
              </section>
            )}

            {project.slug === "blaner" && (
              <section className="mb-10 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <span role="img" aria-label="chart">
                      📊
                    </span>
                    Blaner – Internal Management System for Food Businesses
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    Blaner is an internal management application built for restaurants and
                    fast-food businesses. It centralizes daily operations like purchases,
                    supplier debts, employee salaries, treasury, revenue, and expenses into a
                    single, easy-to-use dashboard.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Why I built it
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      As the owner of a fast-food restaurant, I tried several ERPs and
                      management tools. Most were too generic, too complex, or too expensive —
                      and none matched the rhythm of a real fast-food operation. Blaner started
                      as an internal tool to track meat purchases, bread orders, supplier debts,
                      salaries, treasury balance, and expenses.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      After six months of daily use and iteration, I turned it into a SaaS
                      product so other food businesses could benefit from the same clarity.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      What it manages
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>📦 Ingredient purchases (meat, bread, fries, drinks, etc.)</li>
                      <li>🧾 Supplier debts and outstanding payments</li>
                      <li>👥 Employee salaries and payouts</li>
                      <li>💰 Treasury and cash flow</li>
                      <li>📈 Daily revenue overview</li>
                      <li>💸 Expense tracking and categorization</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4 rounded-2xl border border-border/70 bg-card/70 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Technical stack
                  </h3>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Frontend</p>
                      <ul className="space-y-1">
                        <li>• Next.js for a responsive management dashboard</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Authentication</p>
                      <ul className="space-y-1">
                        <li>• Firebase Authentication for secure access</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Database</p>
                      <ul className="space-y-1">
                        <li>• Firestore (real-time NoSQL) for operational data</li>
                        <li>• Data model tuned for financial and daily tracking</li>
                      </ul>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Deployment</p>
                      <ul className="space-y-1">
                        <li>• Deployed on Vercel for fast, serverless hosting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    What this project represents
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Blaner shows how I combine entrepreneurship with engineering — building a
                    tool from inside a business, validating it in a real fast-food environment,
                    then turning it into a SaaS product. It&apos;s a practical system designed
                    from day-to-day operations, not from theory.
                  </p>
                </div>
              </section>
            )}

            {project.features && project.features.length > 0 && (
              <section className="mb-10">
                <FeaturesHeading />
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <Check
                        size={20}
                        className="mt-0.5 shrink-0 text-accent"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <ProjectCtas
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
