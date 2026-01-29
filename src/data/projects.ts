export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "AdeolaAdeoti version 1",
    description:
      "Context7 brings up-to-date, version-specific documentation and code examples directly into AI coding assistants, preventing outdated code or hallucinated APIs.",
    tags: ["HTML", "SCSS", "JAVASCRIPT", "GSAP"],
    link: "https://context7.com",
    github: "https://github.com/context7/context7",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product filtering, shopping cart, and payment integration. Built with modern technologies for seamless user experience.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://ecommerce-demo.com",
    github: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, team workspaces, and advanced project tracking features.",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://taskmanager-app.com",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Dashboard",
    description:
      "Interactive weather application displaying real-time weather data, forecasts, and location-based insights with beautiful visualizations.",
    tags: ["React", "API Integration", "D3.js", "Webpack"],
    link: "https://weather-dashboard.com",
    github: "https://github.com/yourusername/weather-dashboard",
  },
];
