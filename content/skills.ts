export type SkillIcon =
  | "react"
  | "nextjs"
  | "vue"
  | "javascript"
  | "typescript"
  | "tailwind"
  | "node"
  | "api"
  | "database"
  | "git"
  | "docker"
  | "vercel"
  | "aws"
  | "python"
  | "django"
  | "laravel"
  | "postgres"
  | "aiAgent";

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
      { name: "Vue.js", icon: "vue" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "REST APIs", icon: "api" },
      { name: "Laravel (PHP)", icon: "laravel" },
      { name: "Python", icon: "python" },
      { name: "Django", icon: "django" },
    ],
  },
  {
    label: "Cloud, Data & DevOps",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Database Design", icon: "database" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
  {
    label: "AI & Automation",
    items: [{ name: "AI Agents & Automation", icon: "aiAgent" }],
  },
];
