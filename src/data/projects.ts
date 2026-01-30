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
    description:
      "Bless Fourchette delivers nourishing, vegan Canado-Haitian meals for schools and families, combining traditional flavors with community values, while supporting sickle cell anemia research through charitable contributions.",
    tags: [
      "Web App",
      "E-commerce",
      "Food Delivery",
      "Vegan Meals",
      "Community Service",
    ],
    challenges:
      "Designing a distinct visual identity and user experience for a meal service platform similar to previous work for the same client, ensuring differentiation while maintaining brand consistency and incorporating faith-based community values.",
    solution:
      "Crafted a unique design system inspired by cultural heritage and charitable mission, featuring warm, community-focused visuals and intuitive ordering flows that set the platform apart while delivering seamless functionality for meal planning and charitable contributions.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://bless-fourchette.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    gallery: [
      "/Project/BlessFourchette/Screenshot 2026-01-30 102823.png",
      "/Project/BlessFourchette/Screenshot 2026-01-30 102839.png",
      "/Project/BlessFourchette/Screenshot 2026-01-30 102850.png",
      "/Project/BlessFourchette/Screenshot 2026-01-30 102858.png",
    ],
    FeaturedCover: "/Project/BlessFourchette/Logo.png",
  },
  {
    id: "orionconseil",
    title: "Orion Conseil",
    description: "",
    link: "https://www.orionconseil.com/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    description:
      "Developed a professional website for Orion Conseil, a consulting firm specializing in business strategy, accounting, and research services. The design was mostly driven by the client, and I didn't have much to say in it. The site showcases their expertise in strategic consulting, financial compliance, and data-driven insights, featuring a modern design that reflects their commitment to excellence, ethics, and innovation.",
    tags: ["Web App", "Consulting", "Business Services"],
    challenges:
      "The most challenging thing I faced was to meet the client's idea and deliver its expectations.",
    solution:
      "Successfully implemented the client's design vision by building a responsive Next.js application with clean navigation, detailed service sections, client testimonials, and integrated contact forms, ensuring the final product aligned perfectly with their expectations and provided an engaging user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Cloudinary",
      "MongoDB",
      "JWT",
    ],
    FeaturedCover: "/Project/OrionConseil/Logo.png",
    gallery: [
      "/Project/OrionConseil/Screenshot 2026-01-30 103425.png",
      "/Project/OrionConseil/Screenshot 2026-01-30 103656.png",
      "/Project/OrionConseil/Screenshot 2026-01-30 103712.png",
    ],
  },
  {
    id: "monimpression",
    title: "Mon Impression",
    description:
      "A custom clothing shop specializing in personalized t-shirts, hoodies, and accessories. The platform features an online customization studio with real-time previews, guided quotes, and fast delivery across Quebec, enabling customers to create unique, high-quality garments that reflect their personal style or brand.",
    tags: ["Web App", "E-commerce", "Custom Clothing", "Online Customization"],
    link: "https://www.monimpression.ca/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "Implementing a user-friendly online customization tool with real-time previews and ensuring seamless integration with production processes for custom orders.",
    solution:
      "Built a responsive Next.js application with an intuitive customization interface, secure payment processing via Stripe, and efficient order management to deliver personalized products quickly and reliably.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Vercel"],
    FeaturedCover: "/Project/MonImpression/LogoWhite.png",
    gallery: [
      "/Project/MonImpression/Screenshot 2026-01-30 104444.png",
      "/Project/MonImpression/Screenshot 2026-01-30 104507.png",
      "/Project/MonImpression/Screenshot 2026-01-30 104601.png",
    ],
  },
  {
    id: "confort-plus-65",
    title: "Confort Plus 65",
    description:
      "This was my first professional website for Confort Plus 65, a dedicated home care service provider for seniors aged 65 and older. This project marked my entry into web development, creating an informative online platform that highlights their personalized care services, including daily activities assistance, domestic help, and support for cognitive difficulties, enabling families to access compassionate senior care information.",
    tags: ["Web App", "Home Care", "Seniors Services", "First Project"],
    link: "https://confort-plus-65.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "As my inaugural fullstack web development project, the primary challenges involved learning to build with Next.js, integrating a database for data management, and implementing JWT authentication for secure user access, while adhering to the client's design vision and ensuring the site effectively communicated Confort Plus 65's mission.",
    solution:
      "Successfully built a responsive Next.js application with database integration and JWT authentication, delivering a functional online platform that allows Confort Plus 65 to manage services and connect with families securely.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Vercel",
    ],
    FeaturedCover: "/Project/ConfortPlus65/Logo.png",
    gallery: [
      "/Project/ConfortPlus65/Screenshot 2026-01-30 110707.png",
      "/Project/ConfortPlus65/Screenshot 2026-01-30 110720.png",
    ],
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
    description:
      "A Quebec-based vehicle purchasing service that simplifies the process of selling used cars. The platform features an easy-to-use form for vehicle submissions, transparent pricing, and a commitment to hassle-free transactions, enabling sellers to get fair offers quickly and connect with a trusted dealer.",
    tags: ["Web App", "Automotive", "Vehicle Sales", "E-commerce"],
    link: "https://www.milleniumautos.ca/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "Creating an intuitive online platform that guides users through the vehicle selling process and builds trust through transparent communication and clear value propositions.",
    solution:
      "Built a responsive website with a user-friendly contact form, detailed service information, and a step-by-step selling guide, providing Millenium Autos with an effective online presence to attract and convert potential sellers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    FeaturedCover: "/Project/MilleniumAutos/Logo.png",
    gallery: [
      "/Project/MilleniumAutos/Screenshot 2026-01-30 111702.png",
      "/Project/MilleniumAutos/Screenshot 2026-01-30 111716.png",
      "/Project/MilleniumAutos/Screenshot 2026-01-30 111734.png",
    ],
  },
  {
    id: "mb-group-canada",
    title: "MB Group Canada",
    description:
      "A leading real estate development company specializing in residential and commercial projects across Quebec. The site highlights their 25+ years of experience, innovative developments, and commitment to quality and sustainability, enabling clients to explore projects and connect with the team.",
    tags: ["Web App", "Real Estate", "Construction", "Business Services"],
    link: "https://mb-group-canada.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "Creating a comprehensive online platform that showcases diverse real estate projects and builds credibility through professional presentation and detailed project information.",
    solution:
      "Built a responsive website with project galleries, service descriptions, and contact forms, providing MB Group Canada with an effective online presence to attract investors and partners.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    FeaturedCover: "/Project/MBGroupCanada/logoMB.png",
    gallery: [
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112353.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112407.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112426.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112442.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112515.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112528.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112546.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112602.png",
      "/Project/MBGroupCanada/Screenshot 2026-01-30 112745.png",
    ],
  },
  {
    id: "progix",
    title: "Progix",
    description:
      "The Montreal-based software development agency where I worked. The site showcases our expertise in web and mobile development, AI, blockchain, and business systems, highlighting our team's capabilities and successful projects to attract potential clients.",
    tags: ["Web App", "Agency", "Software Development", "Business Services"],
    link: "https://www.progix.pro/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "Creating a professional website that represents the agency's diverse services and technical expertise while maintaining a modern, engaging design.",
    solution:
      "Built a responsive Next.js website with detailed service sections, team profiles, case studies, and contact forms, effectively positioning Progix as a leading software development partner.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    FeaturedCover: "/Project/Progix/logo.png",
    gallery: [
      "/Project/Progix/Screenshot 2026-01-30 113500.png",
      "/Project/Progix/Screenshot 2026-01-30 113521.png",
      "/Project/Progix/Screenshot 2026-01-30 113540.png",
      "/Project/Progix/Screenshot 2026-01-30 113557.png",
      "/Project/Progix/Screenshot 2026-01-30 113617.png",
      "/Project/Progix/Screenshot 2026-01-30 113705.png",
      "/Project/Progix/Screenshot 2026-01-30 113719.png",
      "/Project/Progix/Screenshot 2026-01-30 113741.png",
      "/Project/Progix/Screenshot 2026-01-30 113855.png",
      "/Project/Progix/Screenshot 2026-01-30 113923.png",
      "/Project/Progix/Screenshot 2026-01-30 114012.png",
    ],
  },
  {
    id: "conseilcm360",
    title: "Conseil CM360",
    description:
      "A consulting firm specializing in treasury management optimization for businesses. The site was highly praised by the client for its design and functionality, showcasing their expertise in diagnostics, liquidity management, and cost optimization to attract clients seeking treasury solutions.",
    tags: ["Web App", "Consulting", "Treasury Management", "Business Services"],
    link: "https://www.conseilcm360.com/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "Implementing modals for the first time to enhance user interaction and display detailed service information dynamically.",
    solution:
      "Successfully integrated modals into the website, creating an engaging user experience that was highly appreciated by the client.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    FeaturedCover: "/Project/CM360/logomobile.jpg",
    gallery: [
      "/Project/CM360/Screenshot 2026-01-30 114639.png",
      "/Project/CM360/Screenshot 2026-01-30 114659.png",
      "/Project/CM360/Screenshot 2026-01-30 114717.png",
    ],
  },
  {
    id: "humanicia",
    title: "Humanicia",
    description:
      "Humanicia combats loneliness by offering genuine human companionship through personalized phone calls, video chats, and in-person activities, providing authentic connections that bring warmth and meaning to everyday moments.",
    tags: [
      "Web App",
      "Companionship",
      "Wellness",
      "Social Services",
      "E-commerce",
    ],
    challenges:
      "Developing a platform that facilitates authentic human connections while ensuring user safety, agent quality, and seamless booking for various interaction types.",
    solution:
      "Built an intuitive web platform with agent profiles, flexible subscription plans, and secure booking systems, enabling users to easily access meaningful companionship and combat loneliness effectively.",
    technologies: [
      "Next.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],
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
    id: "cheminement",
    title: "Cheminement",
    description:
      "An integrated mental health platform that connects users with qualified professionals for personalized care. The site features detailed service information, professional matching, and educational resources to support mental wellness journeys and provide accessible mental health support.",
    tags: ["Web App", "Mental Health", "Healthcare", "Platform"],
    link: "https://cheminement.vercel.app/",
    featured: false,
    year: "2025",
    role: "Fullstack Developer",
    challenges:
      "Creating an informative and trustworthy platform that clearly communicates mental health services and ensures user privacy and accessibility.",
    solution:
      "Built a responsive Next.js application with client and professional dashboards, database integration using MongoDB, and JWT authentication, providing a comprehensive platform for mental health support.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Stripe",
      "Vercel",
    ],
    FeaturedCover: "/Project/Cheminement/Logo.png",
    gallery: [
      "/Project/Cheminement/Screenshot 2026-01-30 115533.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115553.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115610.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115650.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115737.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115756.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115809.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115826.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115849.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115906.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115924.png",
      "/Project/Cheminement/Screenshot 2026-01-30 115947.png",
    ],
  },

];
