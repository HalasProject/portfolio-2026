export type Language = "en" | "fr";

export const SUPPORTED_LANGUAGES: Language[] = ["en", "fr"];

export const messages = {
  en: {
    languageLabelShort: "EN",
    languageLabelFull: "English",
    switcherAriaLabel: "Switch language",
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      roleLine: "Developer | Engineer | Passionate",
      subheading:
        "I don't just write code — I engineer experiences. Every pixel, every function, every interaction is intentional.",
      detailsLine:
        "Let’s turn your idea into a fast, scalable product people will love.",
      ctaPrimary: "Let\u2019s Talk",
      ctaViewProjects: "View Projects",
      ctaDownloadCv: "Download CV",
    },
    about: {
      title: "About Me",
      subtitle: "A quick snapshot of who I am and how I work.",
      roleLine: "Developer | Engineer | Passionate",
      howIWork: "How I like to work",
      skillsSpotlight: "Skills spotlight",
      skillsIntro:
        "I work across the full stack, with a focus on React, Next.js, TypeScript, Node.js and modern DevOps practices.",
    },
    experience: {
      title: "Experience",
      subtitle: "Where I've worked and what I've delivered.",
      keyContributionsHeading: "Key Contributions",
      businessImpactHeading: "Business Impact",
      remoteSuffix: " · Remote",
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of things I've built.",
      liveLabel: "Live",
      githubLabel: "GitHub",
      viewDetails: "View details →",
    },
    contact: {
      title: "Contact",
      subtitle: "Get in touch or reach out on WhatsApp or Telegram.",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Your message...",
      submitIdle: "Send message",
      submitLoading: "Sending...",
      whatsappLabel: "WhatsApp",
      telegramLabel: "Telegram",
    },
    projectPage: {
      backToProjects: "Back to projects",
      featuresHeading: "Features",
      visitLive: "Visit live site",
      viewOnGithub: "View on GitHub",
    },
  },
  fr: {
    languageLabelShort: "FR",
    languageLabelFull: "Français",
    switcherAriaLabel: "Changer de langue",
    nav: {
      home: "Accueil",
      about: "À propos",
      experience: "Expérience",
      projects: "Projets",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      roleLine: "Développeur | Ingénieur | Passionné",
      subheading:
        "Je ne me contente pas d\u2019écrire du code \u2014 je conçois des expériences. Chaque pixel, chaque fonction, chaque interaction est intentionnelle.",
      detailsLine:
        "Une idée en tête ? Construisons ensemble un produit digital puissant.",
      ctaPrimary: "Parlons-en",
      ctaViewProjects: "Voir les projets",
      ctaDownloadCv: "Télécharger le CV",
    },
    about: {
      title: "À propos de moi",
      subtitle:
        "Un aperçu rapide de qui je suis et de ma manière de travailler.",
      roleLine: "Développeur | Ingénieur | Passionné",
      howIWork: "Ma façon de travailler",
      skillsSpotlight: "Compétences clés",
      skillsIntro:
        "J\u2019interviens sur toute la stack, avec un focus sur React, Next.js, TypeScript, Node.js et les pratiques DevOps modernes.",
    },
    experience: {
      title: "Expérience",
      subtitle: "Où j'ai travaillé et ce que j'y ai livré.",
      keyContributionsHeading: "Contributions clés",
      businessImpactHeading: "Impact métier",
      remoteSuffix: " · À distance",
    },
    projects: {
      title: "Projets",
      subtitle: "Une sélection de projets que j'ai réalisés.",
      liveLabel: "En ligne",
      githubLabel: "GitHub",
      viewDetails: "Voir les détails →",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Contactez-moi ou écrivez-moi sur WhatsApp ou Telegram.",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailLabel: "Email",
      emailPlaceholder: "vous@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Votre message...",
      submitIdle: "Envoyer le message",
      submitLoading: "Envoi en cours...",
      whatsappLabel: "WhatsApp",
      telegramLabel: "Telegram",
    },
    projectPage: {
      backToProjects: "Retour aux projets",
      featuresHeading: "Fonctionnalités",
      visitLive: "Voir le site en ligne",
      viewOnGithub: "Voir sur GitHub",
    },
  },
} as const;

export type Messages = (typeof messages)["en"];
