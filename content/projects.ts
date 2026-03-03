export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "miyam",
    title: "Miyam",
    description:
      "Digital menu platform for restaurants. Transform paper menus into QR-based digital experiences.",
    longDescription:
      "Miyam is a digital menu solution that helps restaurants modernize their offering. Customers scan a QR code to access the menu on any device—no app required. Restaurants get an intuitive admin to manage menus, categories, promotions, and dark/light themes. Optimized for SEO and social sharing.",
    techStack: ["Next.js", "tRPC"],
    image: "/miyam.jpg",
    liveUrl: "https://miyam.io",
    features: [
      "QR code menu access from any device",
      "Admin interface for menu management",
      "Multiple menus and categories per restaurant",
      "Promotional banners",
      "Dark and light themes",
      "SEO optimized pages",
      "Custom subdomains (restaurant.miyam.io)",
    ],
  },
  {
    id: "2",
    slug: "trackfast",
    title: "TrackFast",
    description:
      "Production-ready tracking and analytics platform for monitoring and insights.",
    longDescription:
      "TrackFast is a tracking and analytics platform designed to help teams monitor performance, events, and user behavior. Built for scale with a focus on real-time data and actionable insights.",
    techStack: ["Java", "React", "PostgreSQL"],
    image: "/trackfast.jpg",
    liveUrl: "https://trackfast.io",
    features: [
      "Real-time tracking and analytics",
      "Event monitoring",
      "Dashboards and reports",
      "API for integration",
    ],
  },
  {
    id: "3",
    slug: "blaner",
    title: "Blaner",
    description:
      "Open-source project from my GitHub. A modern web application.",
    longDescription:
      "Blaner is an open-source project available on GitHub. Built with modern web technologies, it showcases clean architecture and best practices for full-stack development.",
    techStack: ["Next.js", "Firebase"],
    image: "/blaner.jpg",
    githubUrl: "https://github.com/salahbentayeb/blaner",
    features: [
      "Open-source and community-driven",
      "Next.js frontend",
      "Firebase backend",
      "Well-documented codebase",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
