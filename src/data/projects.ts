export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
  detailedDescription?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string;
  solution?: string;
  year?: string;
  role?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: "adeola-adeoti-v1",
    title: "AdeolaAdeoti version 1",
    description:
      "Context7 brings up-to-date, version-specific documentation and code examples directly into AI coding assistants, preventing outdated code or hallucinated APIs.",
    tags: ["HTML", "SCSS", "JAVASCRIPT", "GSAP"],
    link: "https://context7.com",
    github: "https://github.com/context7/context7",
    year: "2024",
    role: "Full Stack Developer",
    detailedDescription:
      "A comprehensive documentation platform that revolutionizes how developers access and utilize API documentation. This project focuses on providing real-time, version-specific code examples and documentation directly within AI coding assistants, significantly reducing the occurrence of outdated code suggestions and hallucinated APIs.",
    features: [
      "Real-time documentation updates",
      "Version-specific code examples",
      "AI-powered code suggestions",
      "Seamless integration with popular IDEs",
      "Advanced search and filtering capabilities",
      "Interactive code playground",
    ],
    technologies: [
      "HTML5",
      "SCSS",
      "JavaScript ES6+",
      "GSAP",
      "Webpack",
      "REST API",
    ],
    challenges:
      "The main challenge was ensuring real-time synchronization between documentation versions and providing accurate, context-aware code examples that would integrate seamlessly with various AI coding assistants.",
    solution:
      "Implemented a robust version control system coupled with an intelligent caching mechanism that ensures documentation is always up-to-date while maintaining optimal performance. Developed a custom API that interfaces with major AI coding platforms.",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product filtering, shopping cart, and payment integration. Built with modern technologies for seamless user experience.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce-platform",
    year: "2024",
    role: "Full Stack Developer",
    detailedDescription:
      "A modern, scalable e-commerce solution designed to provide an exceptional shopping experience. This platform includes advanced product filtering, real-time inventory management, secure payment processing, and a responsive design that works flawlessly across all devices.",
    features: [
      "Advanced product search and filtering",
      "Real-time inventory management",
      "Secure payment integration with Stripe",
      "User authentication and profile management",
      "Order tracking and history",
      "Admin dashboard for inventory and order management",
      "Responsive design for mobile and desktop",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "JWT",
      "Redux",
      "Tailwind CSS",
    ],
    challenges:
      "Creating a scalable architecture that could handle high traffic volumes while maintaining fast load times and ensuring secure payment processing.",
    solution:
      "Implemented a microservices architecture with efficient caching strategies, optimized database queries, and utilized CDN for static assets. Integrated Stripe's secure payment gateway with comprehensive error handling and fraud detection.",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, team workspaces, and advanced project tracking features.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://taskmanager-app.com",
    github: "https://github.com/yourusername/task-manager",
    year: "2023",
    role: "Lead Developer",
    detailedDescription:
      "A powerful collaborative platform designed to streamline team workflows and project management. Features real-time synchronization, advanced task tracking, team collaboration tools, and comprehensive analytics to help teams stay organized and productive.",
    features: [
      "Real-time collaboration and updates",
      "Team workspaces and project boards",
      "Advanced task tracking with dependencies",
      "File attachments and comments",
      "Calendar integration",
      "Performance analytics and reporting",
      "Custom workflows and automation",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase Realtime Database",
      "Firebase Auth",
      "Tailwind CSS",
      "Framer Motion",
      "Chart.js",
    ],
    challenges:
      "Implementing real-time synchronization across multiple users while maintaining data consistency and handling offline scenarios.",
    solution:
      "Leveraged Firebase's real-time database with optimistic updates and conflict resolution. Implemented a robust offline-first architecture with data synchronization when connection is restored.",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "Interactive weather application displaying real-time weather data, forecasts, and location-based insights with beautiful visualizations.",
    tags: ["React", "API Integration", "D3.js", "Webpack"],
    link: "https://weather-dashboard.com",
    github: "https://github.com/yourusername/weather-dashboard",
    year: "2023",
    role: "Frontend Developer",
    detailedDescription:
      "An elegant weather dashboard that provides comprehensive weather information with stunning visualizations. The application offers real-time weather updates, detailed forecasts, interactive maps, and location-based insights to keep users informed about weather conditions.",
    features: [
      "Real-time weather updates",
      "7-day weather forecast",
      "Interactive weather maps",
      "Location-based weather alerts",
      "Historical weather data visualization",
      "Multiple location tracking",
      "Responsive charts and graphs",
    ],
    technologies: [
      "React",
      "D3.js",
      "OpenWeather API",
      "Webpack",
      "SASS",
      "Axios",
      "Geolocation API",
    ],
    challenges:
      "Creating meaningful data visualizations that present complex weather information in an intuitive and visually appealing manner while ensuring fast data retrieval and updates.",
    solution:
      "Implemented efficient data caching and utilized D3.js for creating interactive, responsive visualizations. Optimized API calls with debouncing and implemented a smart refresh strategy to balance data freshness with performance.",
  },
];
