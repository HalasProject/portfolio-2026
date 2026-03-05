export type TechChip = {
  name: string;
  color: string; // hex for background/border
  textLight?: boolean; // true = white text (for dark brand colors)
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  logo?: string;
  logoAlt?: string;
  country?: string;
  countryFlag?: string;
  location?: string;
  remote?: boolean;
  keyContributions: string[];
  businessImpact?: string[];
  technologies?: TechChip[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Front-End Engineer",
    company: "Teamoty",
    duration: "Dec 2023 – Present",
    logo: "/teamoty.png",
    logoAlt: "Teamoty logo",
    country: "France",
    countryFlag: "🇫🇷",
    keyContributions: [
      "Architected and developed high-performance interactive visualization tools (Gantt charts, workflows, planning systems, advanced graphs) using Canvas-based 2D rendering to handle large datasets smoothly.",
      "Played a core role in the product's v1 → v2 transformation, modernizing the front-end architecture for better scalability, maintainability, and long-term evolution.",
      "Designed and maintained internal private NPM packages to standardize components and significantly accelerate feature delivery across teams.",
      "Delivered mission-critical tools used daily to manage large-scale construction projects involving significant operational budgets.",
    ],
    businessImpact: [
      "Improved UI performance and responsiveness for data-heavy interfaces.",
      "Reduced development duplication through reusable internal libraries.",
      "Contributed to a more scalable and future-proof product architecture.",
    ],
    technologies: [
      { name: "JavaScript", color: "#f7df1e" },
      { name: "React", color: "#61dafb" },
      { name: "Docker", color: "#0db7ed" },
      { name: "Jira", color: "#0052cc" },
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "MovingLab",
    duration: "May 2021 – Nov 2023",
    logo: "/movinglab.png",
    logoAlt: "MovingLab logo",
    country: "France",
    countryFlag: "🇫🇷",
    keyContributions: [
      "Contributed to building a real-time tendering platform allowing moving companies to generate optimized quotes through algorithm-driven decision systems.",
      "Designed and maintained scalable REST APIs integrated with Salesforce, ensuring seamless synchronization of operational and CRM data.",
      "Engineered a geographic calculation engine using Google Maps API, optimizing distance and route calculations to reduce latency and infrastructure load.",
      "Enhanced the distance matrix system to improve calculation speed, accuracy, and resource efficiency under high traffic.",
    ],
    businessImpact: [
      "Improved pricing accuracy and quote generation speed.",
      "Reduced latency in geolocation-based calculations.",
      "Strengthened integration reliability between internal systems and CRM platforms.",
    ],
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "Node.js", color: "#339933" },
      { name: "PHP", color: "#777bb4" },
      { name: "OpenAPI", color: "#6ba539" },
      { name: "Docker", color: "#0db7ed" },
      { name: "AWS", color: "#ff9900" },
      { name: "Salesforce", color: "#00a1e0" },
      { name: "GitLab", color: "#fc6d26" },
      { name: "Jira", color: "#0052cc" },
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Skaalab",
    duration: "Mar 2021 – Present",
    logo: "/skaalab.jpeg",
    logoAlt: "Skaalab logo",
    country: "Algeria",
    countryFlag: "🇩🇿",
    keyContributions: [
      "Delivered end-to-end web applications — from UI/UX implementation to database architecture and production deployment.",
      "Participated in client workshops and product discovery sessions, transforming business needs into technical roadmaps and scalable solutions.",
      "Built tailored systems using React, Node.js, Laravel, and TypeScript based on project requirements.",
      "Managed AWS infrastructure and Dockerized deployments to ensure reliability, scalability, and secure production environments.",
    ],
    businessImpact: [
      "Helped clients move from concept to production-ready platforms.",
      "Ensured stable and secure infrastructure operations.",
      "Acted as both technical executor and strategic product contributor.",
    ],
    technologies: [
      { name: "JavaScript", color: "#f7df1e" },
      { name: "Symfony", color: "#000000", textLight: true },
      { name: "AWS", color: "#ff9900" },
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Algebratec",
    duration: "Mar 2020 – Mar 2021",
    logo: "/algebratec.png",
    logoAlt: "Algebratec logo",
    country: "Algeria",
    countryFlag: "🇩🇿",
    keyContributions: [
      "Built and maintained travel-related web platforms serving real users.",
      "Developed and documented APIs using OpenAPI and Swagger to standardize integration processes and improve team collaboration.",
      "Contributed to architecture discussions and conducted structured code reviews to elevate code quality.",
      "Delivered production-ready Angular and Laravel applications.",
    ],
    businessImpact: [
      "Improved API clarity and cross-team communication.",
      "Contributed to stable and maintainable booking systems.",
      "Strengthened engineering best practices within the team.",
    ],
    technologies: [
      { name: "Angular", color: "#dd0031" },
      { name: "PHP", color: "#777bb4" },
      { name: "Laravel", color: "#ff2d20" },
      { name: "Swagger", color: "#85ea2d" },
      { name: "OpenAPI", color: "#6ba539" },
      { name: "Bitbucket", color: "#0052cc" },
      { name: "MySQL", color: "#4479a1" },
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Ktalyse",
    duration: "Summer 2019",
    country: "France",
    countryFlag: "🇫🇷",
    keyContributions: [
      "Developed a real-time monitoring module using WebRTC, enabling live system observation and improved responsiveness.",
      "Contributed to building a Platform-as-a-Service (PaaS) solution for deploying and managing applications.",
      "Refactored front-end interfaces to improve performance and responsiveness.",
      "Integrated multiple heterogeneous databases into a unified access system.",
    ],
    businessImpact: [
      "Improved real-time visibility into system activity.",
      "Enhanced deployment flexibility and operational efficiency.",
      "Strengthened multi-database data access architecture.",
    ],
    technologies: [
      { name: "PHP", color: "#777bb4" },
      { name: "CodeIgniter", color: "#ee4623" },
      { name: "Symfony", color: "#000000", textLight: true },
      { name: "WebRTC", color: "#333333" },
      { name: "JavaScript", color: "#f7df1e" },
      { name: "MySQL", color: "#4479a1" },
    ],
  },
  // {
  //   role: "Webmaster",
  //   company: "Le Libre Pinceau",
  //   duration: "Dec 2016 – Oct 2018",
  //   country: "Algeria",
  //   countryFlag: "🇩🇿",
  //   keyContributions: [
  //     "Managed and optimized website content across CMS platforms.",
  //     "Ensured cross-device responsiveness (desktop, tablet, mobile).",
  //     "Maintained uptime through structured updates, backups, and monitoring.",
  //     "Applied UX improvements based on competitive research and user behavior.",
  //   ],
  //   businessImpact: [
  //     "Improved site stability and consistency.",
  //     "Strengthened online presence through better user experience.",
  //     "Built foundational experience in ownership and long-term maintenance.",
  //   ],
  //   technologies: [
  //     { name: "Joomla", color: "#5091cd" },
  //     { name: "WordPress", color: "#21759b" },
  //     { name: "Photoshop", color: "#31a8ff" },
  //   ],
  // },
];
