export type SkillIcon =
  | "react"
  | "nextjs"
  | "typescript"
  | "tailwind"
  | "node"
  | "api"
  | "database"
  | "git"
  | "docker"
  | "vercel";

export type SkillItem = {
  name: string;
  icon: SkillIcon;
};

export type SkillGroup = {
  label: string;
  items: SkillItem[];
};

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "REST APIs", icon: "api" },
      { name: "Database Design", icon: "database" },
    ],
  },
  {
    label: "DevOps & Tooling",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

