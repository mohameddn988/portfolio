export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string;
  solution?: string;
  year?: string;
  role?: string;
  gallery?: string[];
  FeaturedCover?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "queendeq",
    title: "Queen De Q",
    description:
      "A transformative journey of self-discovery that empowers women to embrace their inner sovereignty and navigate relationships with wisdom and grace. Queen De Q features an AI-powered chatbot and three core experiences: self-discovery through inner Queen archetypes, insights into male archetypes in relationships, and emotional support rituals. It creates a safe space where women can explore their authentic selves, heal emotional patterns, and build meaningful connections through playful yet profound self-reflection tools.",
    tags: [
      "Web App",
      "AI Chatbot",
      "Personal Development",
      "Feminist Tech",
      "Wellness App",
      "Self-Care",
    ],
    link: "https://www.queendeq.com/",
    technologies: [
      "Express",
      "React",
      "Vite",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Auth0",
      "MongoDB",
      "JWT",
      "OpenAI",
      "Mongoose",
      "Framer Motion",
    ],
    challenges:
      "Delivering a stunning and attractive user experience to effectively attract users to the main platform through the landing page, and customizing the AI chatbot to provide tailored interactions for each of the three core experiences: self-discovery, relationship insights, and emotional support.",
    solution:
      "Designed an engaging landing page with compelling visuals, clear value proposition highlighting feminist personal development tools, and interactive elements that guide users towards the app, resulting in high user attraction and seamless conversion to the platform.",
    year: "2025",
    role: "Fullstack Developer",
    gallery: [
      "/Project/QueenDeQ/Screenshot 2026-01-30 013433.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 013456.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 013633.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 013652.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 013711.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 013814.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 013836.png",
      "/Project/QueenDeQ/Screenshot 2026-01-30 092756.png",
    ],
    FeaturedCover: "/Project/QueenDeQ/logo-gold.png",
    featured: true,
  },
  {
    id: "pump-fourchette",
    title: "Pump Fourchette",
    description: "",
    tags: [],
    link: "https://pump-fourchette.vercel.app/",
    featured: true,
  },
  {
    id: "bless-fourchette",
    title: "Bless Fourchette",
    description: "",
    tags: [],
    link: "https://bless-fourchette.vercel.app/",
    featured: false,
  },
  {
    id: "orionconseil",
    title: "Orion Conseil",
    description: "",
    tags: [],
    link: "https://www.orionconseil.com/",
    featured: false,
  },
  {
    id: "monimpression",
    title: "Mon Impression",
    description: "",
    tags: [],
    link: "https://www.monimpression.ca/",
    featured: false,
  },
  {
    id: "confort-plus-65",
    title: "Confort Plus 65",
    description: "",
    tags: [],
    link: "https://confort-plus-65.vercel.app/",
    featured: false,
  },
  {
    id: "tct",
    title: "TCT",
    description: "",
    tags: [],
    link: "https://www.tct.pro/",
    featured: true,
  },
  {
    id: "milleniumautos",
    title: "Millenium Autos",
    description: "",
    tags: [],
    link: "https://www.milleniumautos.ca/",
    featured: false,
  },
  {
    id: "mb-group-canada",
    title: "MB Group Canada",
    description: "",
    tags: [],
    link: "https://mb-group-canada.vercel.app/",
    featured: false,
  },
  {
    id: "progix",
    title: "Progix",
    description: "",
    tags: [],
    link: "https://www.progix.pro/",
    featured: false,
  },
  {
    id: "conseilcm360",
    title: "Conseil CM360",
    description: "",
    tags: [],
    link: "https://www.conseilcm360.com/",
    featured: false,
  },
  {
    id: "humanicia",
    title: "Humanicia",
    description: "",
    tags: [],
    link: "https://www.humanicia.com/",
    featured: true,
  },
  {
    id: "enseignesmediaprint",
    title: "Enseignes Media Print",
    description: "",
    tags: [],
    link: "https://www.enseignesmediaprint.com/",
    featured: false,
  },
  {
    id: "ags-globalfarm-sarl",
    title: "AGS Global Farm SARL",
    description: "",
    tags: [],
    link: "https://ags-globalfarm-sarl.vercel.app/",
    featured: false,
  },
  {
    id: "cheminement",
    title: "Cheminement",
    description: "",
    tags: [],
    link: "https://cheminement.vercel.app/",
    featured: false,
  },
  {
    id: "safyr-nine",
    title: "Safyr Nine",
    description:
      "A modern web application for managing safyr nine services with advanced features and user-friendly interface.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://safyr-nine.vercel.app/",
    github: "https://github.com/username/safyr-nine",
    features: [
      "User authentication and authorization",
      "Real-time data updates",
      "Interactive dashboards",
      "Mobile-responsive design",
      "API integration",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    challenges:
      "Implementing real-time features while maintaining performance and ensuring data security across multiple user sessions.",
    solution:
      "Utilized WebSockets for real-time communication, implemented JWT for secure authentication, and optimized database queries with proper indexing.",
    year: "2024",
    role: "Lead Developer",
    gallery: [
      "/About/IDontKnow.png",
      "/About/MyselfHackathon.png",
      "/About/Myself.png",
      "/About/IDontKnow.png",
      "/About/MyselfHackathon.png",
    ],
    featured: false,
  },
];
