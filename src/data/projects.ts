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
    description:
      "Pump Fourchette eliminates the stress of holiday meal preparation by providing expertly crafted, fresh dishes for celebrations and events, delivering premium quality and convenience that lets families focus on creating joyful, memorable moments together.",
    tags: [
      "Web App",
      "E-commerce",
      "Food Delivery",
      "Catering",
      "Festive Meals",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    challenges:
      "Creating an intuitive online platform for ordering diverse festive meals and ensuring reliable delivery coordination for special events.",
    solution:
      "Built a responsive web application with an integrated ordering system, enabling easy access to premium, fresh-prepared meals that enhance celebrations.",
    year: "2025",
    role: "Fullstack Developer",
    gallery: [
      "/Project/PumpFourchette/Screenshot 2026-01-30 094121.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094136.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094200.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094226.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094345.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094412.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094450.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094512.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094546.png",
      "/Project/PumpFourchette/Screenshot 2026-01-30 094611.png",
    ],
    FeaturedCover: "/Project/PumpFourchette/Logo.png",
    featured: true,
  },
  {
    id: "bless-fourchette",
    title: "Bless Fourchette",
    description: "",
    tags: [],
    link: "https://bless-fourchette.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "orionconseil",
    title: "Orion Conseil",
    description: "",
    tags: [],
    link: "https://www.orionconseil.com/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "monimpression",
    title: "Mon Impression",
    description: "",
    tags: [],
    link: "https://www.monimpression.ca/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "confort-plus-65",
    title: "Confort Plus 65",
    description: "",
    tags: [],
    link: "https://confort-plus-65.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "tct",
    title: "TCT",
    description:
      "TCT Pro transforms the automotive experience in Montreal by providing an integrated one-stop solution for used car sales, expert maintenance, professional detailing, vehicle customization, and personalized consultations, enabling customers to manage all vehicle needs efficiently and with confidence.",
    tags: ["Web App", "Automotive", "E-commerce", "Vehicle Sales", "Services"],
    challenges:
      "Creating a comprehensive online platform that integrates vehicle sales, service listings, and customer resources for a seamless one-stop automotive experience.",
    solution:
      "Developed an intuitive website showcasing vehicle inventory, detailed services, and easy contact options, providing customers with a complete automotive hub that simplifies access to all their vehicle needs.",
    link: "https://www.tct.pro/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    year: "2025",
    role: "Fullstack Developer",
    gallery: [
      "/Project/TctPro/Screenshot 2026-01-30 100339.png",
      "/Project/TctPro/Screenshot 2026-01-30 100356.png",
      "/Project/TctPro/Screenshot 2026-01-30 100409.png",
      "/Project/TctPro/Screenshot 2026-01-30 100423.png",
      "/Project/TctPro/Screenshot 2026-01-30 100505.png",
    ],
    FeaturedCover: "/Project/TctPro/Logo.png",
  },
  {
    id: "milleniumautos",
    title: "Millenium Autos",
    description: "",
    tags: [],
    link: "https://www.milleniumautos.ca/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "mb-group-canada",
    title: "MB Group Canada",
    description: "",
    tags: [],
    link: "https://mb-group-canada.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "progix",
    title: "Progix",
    description: "",
    tags: [],
    link: "https://www.progix.pro/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "conseilcm360",
    title: "Conseil CM360",
    description: "",
    tags: [],
    link: "https://www.conseilcm360.com/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "humanicia",
    title: "Humanicia",
    description:
      "Humanicia combats loneliness by offering genuine human companionship through personalized phone calls, video chats, and in-person activities, providing authentic connections that bring warmth and meaning to everyday moments.",
    tags: ["Web App", "Companionship", "Wellness", "Social Services", "E-commerce"],
    challenges:
      "Developing a platform that facilitates authentic human connections while ensuring user safety, agent quality, and seamless booking for various interaction types.",
    solution:
      "Built an intuitive web platform with agent profiles, flexible subscription plans, and secure booking systems, enabling users to easily access meaningful companionship and combat loneliness effectively.",
    technologies: ["Next.js", "MongoDB", "JWT", "Stripe", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://www.humanicia.com/",
    featured: true,
    year: "2025",
    role: "Fullstack Developer",
    gallery: [
      "/Project/Humanicia/Screenshot 2026-01-30 101648.png",
      "/Project/Humanicia/Screenshot 2026-01-30 101713.png",
      "/Project/Humanicia/Screenshot 2026-01-30 101725.png",
      "/Project/Humanicia/Screenshot 2026-01-30 101744.png",
      "/Project/Humanicia/Screenshot 2026-01-30 101821.png",
    ],
    FeaturedCover: "/Project/Humanicia/Logo.png",
  },
  {
    id: "enseignesmediaprint",
    title: "Enseignes Media Print",
    description: "",
    tags: [],
    link: "https://www.enseignesmediaprint.com/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "ags-globalfarm-sarl",
    title: "AGS Global Farm SARL",
    description: "",
    tags: [],
    link: "https://ags-globalfarm-sarl.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
  },
  {
    id: "cheminement",
    title: "Cheminement",
    description: "",
    tags: [],
    link: "https://cheminement.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
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
    year: "2025",
    role: "Fullstack Developer",
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
