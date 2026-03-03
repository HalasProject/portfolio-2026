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
  achievements: string[];
  technologies?: TechChip[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Front End Developer",
    company: "Teamoty",
    duration: "Dec 2023 - Now",
    logo: "/teamoty.png",
    logoAlt: "Teamoty logo",
    country: "France",
    countryFlag: "🇫🇷",
    achievements: [
      "Built custom Canvas & 2D-based components (Gantt, workflows, planning, graphs) for project management.",
      "Contributed to the migration from v1 → v2, upgrading the stack with modern technologies.",
      "Developed and maintained private NPM packages to standardize and speed up feature delivery.",
      "Delivered visualization tools now used by major French construction companies.",
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
    duration: "May 2021 - Nov 2023",
    logo: "/movinglab.jpeg",
    logoAlt: "MovingLab logo",
    country: "France",
    countryFlag: "🇫🇷",
    achievements: [
      "Collaborated with the team to create a real-time tendering system for movers, leveraging cutting-edge algorithms and advanced technologies to streamline the bidding process and provide faster and more accurate quotes for customers.",
      "Worked with the team to develop multiple REST APIs that integrate with Salesforce, ensuring seamless data transfer and management.",
      "Developed a geographic calculation system using Google Map API, optimizing algorithms and leveraging cloud-based computing to minimize latency.",
      "Spearheaded the enhancement of a distance matrix calculation system using Google Map API, achieving faster and more accurate results with reduced resource usage.",
    ],
    technologies: [
      { name: "React", color: "#61dafb" },
      { name: "Node.js", color: "#339933" },
      { name: "OpenAPI", color: "#6ba539" },
      { name: "Docker", color: "#0db7ed" },
      { name: "AWS", color: "#ff9900" },
      { name: "PHP", color: "#777bb4" },
      { name: "Salesforce", color: "#00a1e0" },
      { name: "GitLab", color: "#fc6d26" },
      { name: "Jira", color: "#0052cc" },
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Skaalab",
    duration: "Mar 2021 - Now",
    logo: "/skaalab.jpeg",
    logoAlt: "Skaalab logo",
    country: "Algeria",
    countryFlag: "🇩🇿",
    achievements: [
      "Developed web applications for several external clients, including UI design, feature implementation, database management, maintenance, and bug resolution.",
      "Participated in brainstorming, design, and project planning with clients and the Skaalab team.",
      "Developed custom solutions using React, Node.js, Laravel, JavaScript, and TypeScript.",
      "Managed infrastructure operations using AWS and Docker for smooth and secure production deployment.",
    ],
    technologies: [
      { name: "Javascript", color: "#f7df1e" },
      { name: "Symfony", color: "#000000", textLight: true },
      { name: "AWS", color: "#ff9900" },
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "Algebratec",
    duration: "Mar 2020 - Mar 2021",
    logo: "/algebratec.png",
    logoAlt: "Algebratec logo",
    country: "Algeria",
    countryFlag: "🇩🇿",
    achievements: [
      "Collaborated with a team to design, develop and implement multiple applications and APIs related to travel, including flight and hotel booking systems and travel insurance services.",
      "Leveraged Angular and Laravel PHP frameworks to develop and maintain web applications.",
      "Utilized OpenAPI and Swagger to document and streamline API development processes.",
      "Conducted regular code reviews and provided constructive feedback to other developers.",
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
    achievements: [
      "Developed monitoring module using WebRTC for real-time monitoring and improved performance.",
      "Created a Platform as a Service (PaaS) solution for deploying and managing web applications.",
      "Redesigned the front-end to improve responsiveness and user experience.",
      "Linked several databases with different architectures for seamless data access.",
    ],
    technologies: [
      { name: "PHP", color: "#777bb4" },
      { name: "CodeIgniter", color: "#ee4623" },
      { name: "Symfony", color: "#000000", textLight: true },
      { name: "WebRTC", color: "#333333" },
      { name: "Javascript", color: "#f7df1e" },
      { name: "MySQL", color: "#4479a1" },
    ],
  },
  {
    role: "WebMaster",
    company: "Le Libre Pinceau",
    duration: "Dec 2016 - Oct 2018",
    country: "Algeria",
    countryFlag: "🇩🇿",
    achievements: [
      "Regularly updated website content using CMS to ensure accurate and up-to-date information.",
      "Adapted the website to various interfaces (computers, mobile, tablets) for optimal user experience.",
      "Maintained the website with regular updates, backups, and maintenance tasks.",
      "Conducted competitive intelligence research and implemented industry best practices.",
    ],
    technologies: [
      { name: "Joomla", color: "#5091cd" },
      { name: "WordPress", color: "#21759b" },
      { name: "Photoshop", color: "#31a8ff" },
    ],
  },
];
