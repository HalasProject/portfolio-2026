export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  location?: string;
  remote?: boolean;
  achievements: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Company Name",
    duration: "2022 – Present",
    location: "Remote",
    remote: true,
    achievements: [
      "Built and maintained customer-facing web applications using React and Next.js.",
      "Improved core web vitals and reduced load times by optimizing assets and code splitting.",
      "Collaborated with design and product teams to ship features on time.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Previous Company",
    duration: "2020 – 2022",
    remote: true,
    achievements: [
      "Developed reusable UI components and design system in TypeScript.",
      "Integrated REST and GraphQL APIs with robust error handling.",
      "Mentored junior developers and documented best practices.",
    ],
  },
];
