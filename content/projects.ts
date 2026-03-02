export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Project One",
    description:
      "A modern web application showcasing real-time features and a polished UI. Built with Next.js and a scalable backend.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Project Two",
    description:
      "Full-stack dashboard for analytics and reporting. Includes authentication, data visualization, and export options.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Project Three",
    description:
      "Developer tooling and CLI to streamline local development and deployments.",
    techStack: ["TypeScript", "Node.js", "Docker"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    githubUrl: "https://github.com",
  },
];
