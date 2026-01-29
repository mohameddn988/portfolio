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
  featured?: boolean;
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
  },
  {
    id: "social-media-analytics",
    title: "Social Media Analytics Dashboard",
    description:
      "A comprehensive analytics platform for social media management with real-time data visualization, engagement tracking, and automated reporting.",
    tags: ["Vue.js", "Python", "Django", "PostgreSQL", "Chart.js"],
    link: "https://social-analytics.com",
    github: "https://github.com/yourusername/social-analytics",
    year: "2024",
    role: "Full Stack Developer",
    featured: false,
    detailedDescription:
      "A powerful analytics dashboard that helps businesses track and optimize their social media presence across multiple platforms. Features real-time data aggregation, advanced analytics, automated reporting, and actionable insights.",
    features: [
      "Multi-platform social media integration",
      "Real-time engagement tracking",
      "Advanced analytics and KPIs",
      "Automated report generation",
      "Custom dashboard widgets",
      "Competitor analysis",
      "Scheduled posting optimization",
    ],
    technologies: [
      "Vue.js",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Chart.js",
      "Celery",
      "Docker",
    ],
    challenges:
      "Handling large volumes of real-time data from multiple social media APIs while maintaining performance and data accuracy.",
    solution:
      "Implemented a microservices architecture with Redis caching, background task processing with Celery, and optimized database queries with proper indexing.",
  },
  {
    id: "fitness-tracker-app",
    title: "Personal Fitness Tracker",
    description:
      "A mobile-first fitness tracking application with workout planning, progress monitoring, and social features for fitness enthusiasts.",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB"],
    link: "https://fittracker-app.com",
    github: "https://github.com/yourusername/fitness-tracker",
    year: "2024",
    role: "Mobile App Developer",
    featured: false,
    detailedDescription:
      "A comprehensive fitness tracking solution that helps users monitor their workouts, track progress, and connect with other fitness enthusiasts. Features personalized workout plans, progress analytics, and social challenges.",
    features: [
      "Personalized workout planning",
      "Real-time workout tracking",
      "Progress analytics and charts",
      "Social challenges and leaderboards",
      "Nutrition logging",
      "Wearable device integration",
      "Offline workout support",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Stripe",
    ],
    challenges:
      "Ensuring accurate workout tracking across different devices and handling complex workout data structures.",
    solution:
      "Developed a robust data model for workouts, implemented device synchronization, and created a flexible API that supports various workout types and tracking methods.",
  },
  {
    id: "ai-chatbot-platform",
    title: "AI-Powered Chatbot Platform",
    description:
      "A scalable chatbot platform with natural language processing, multi-channel support, and advanced analytics for customer service automation.",
    tags: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    link: "https://ai-chatbot.com",
    github: "https://github.com/yourusername/ai-chatbot",
    year: "2024",
    role: "AI/ML Engineer",
    featured: false,
    detailedDescription:
      "An enterprise-grade chatbot platform that leverages advanced AI and machine learning to provide intelligent customer service automation. Supports multiple communication channels and includes comprehensive analytics.",
    features: [
      "Natural language understanding",
      "Multi-channel support (web, mobile, messaging apps)",
      "Advanced conversation flows",
      "Real-time analytics and reporting",
      "Integration with CRM systems",
      "Customizable chatbot personalities",
      "A/B testing for conversation optimization",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    challenges:
      "Training accurate NLP models and handling complex conversation flows while maintaining scalability.",
    solution:
      "Implemented a modular architecture with microservices, used transfer learning for NLP models, and designed a flexible conversation engine that can handle various use cases.",
  },
  {
    id: "virtual-event-platform",
    title: "Virtual Event Management Platform",
    description:
      "A comprehensive platform for hosting virtual events with live streaming, networking features, and interactive engagement tools.",
    tags: ["Next.js", "WebRTC", "Socket.io", "MongoDB", "AWS"],
    link: "https://virtual-events.com",
    github: "https://github.com/yourusername/virtual-events",
    year: "2023",
    role: "Full Stack Developer",
    featured: false,
    detailedDescription:
      "A complete solution for organizing and managing virtual events, conferences, and webinars. Features live streaming, interactive networking, engagement tools, and comprehensive analytics.",
    features: [
      "Live video streaming and recording",
      "Interactive networking lounge",
      "Real-time chat and Q&A",
      "Virtual booths and exhibitions",
      "Attendee engagement analytics",
      "Custom branding and theming",
      "Integration with calendar systems",
    ],
    technologies: [
      "Next.js",
      "WebRTC",
      "Socket.io",
      "MongoDB",
      "AWS S3",
      "AWS CloudFront",
      "Redis",
      "Docker",
    ],
    challenges:
      "Managing real-time video streaming for large audiences while ensuring low latency and high quality.",
    solution:
      "Utilized WebRTC for peer-to-peer connections, implemented adaptive bitrate streaming, and used CDN for global distribution to ensure optimal performance.",
  },
  {
    id: "blockchain-voting-system",
    title: "Secure Blockchain Voting System",
    description:
      "A decentralized voting platform built on blockchain technology, ensuring transparency, security, and immutability of election results.",
    tags: ["Solidity", "Ethereum", "React", "Web3.js", "Node.js"],
    link: "https://blockchain-vote.com",
    github: "https://github.com/yourusername/blockchain-voting",
    year: "2023",
    role: "Blockchain Developer",
    featured: false,
    detailedDescription:
      "A secure and transparent voting system leveraging blockchain technology to ensure election integrity. Features cryptographic security, anonymous voting, and real-time result verification.",
    features: [
      "Cryptographically secure voting",
      "Anonymous ballot submission",
      "Real-time result verification",
      "Immutable audit trail",
      "Multi-signature admin controls",
      "Voter eligibility verification",
      "Decentralized storage",
    ],
    technologies: [
      "Solidity",
      "Ethereum",
      "React",
      "Web3.js",
      "Node.js",
      "IPFS",
      "Truffle",
      "Ganache",
    ],
    challenges:
      "Ensuring voter privacy while maintaining transparency and preventing double-voting in a decentralized system.",
    solution:
      "Implemented zero-knowledge proofs for voter anonymity, used smart contracts for vote counting, and created a hybrid on-chain/off-chain architecture for scalability.",
  },
  {
    id: "smart-home-automation",
    title: "IoT Smart Home Automation System",
    description:
      "A comprehensive smart home platform with device integration, automation rules, energy monitoring, and voice control capabilities.",
    tags: ["IoT", "Python", "MQTT", "React", "InfluxDB"],
    link: "https://smart-home-automation.com",
    github: "https://github.com/yourusername/smart-home",
    year: "2023",
    role: "IoT Developer",
    featured: false,
    detailedDescription:
      "An intelligent home automation system that connects and controls various smart devices. Features energy monitoring, automated routines, voice control, and a user-friendly mobile interface.",
    features: [
      "Multi-device integration",
      "Automated home routines",
      "Energy consumption monitoring",
      "Voice control with NLP",
      "Mobile app control",
      "Security system integration",
      "Custom automation rules",
    ],
    technologies: [
      "Python",
      "MQTT",
      "React Native",
      "InfluxDB",
      "Raspberry Pi",
      "Arduino",
      "TensorFlow",
      "Docker",
    ],
    challenges:
      "Creating a reliable system that works with diverse IoT devices from different manufacturers.",
    solution:
      "Developed a modular architecture with device abstraction layers, implemented robust error handling, and created a device discovery and pairing system.",
  },
  {
    id: "educational-gamification",
    title: "Educational Gamification Platform",
    description:
      "An interactive learning platform that gamifies education with points, badges, leaderboards, and adaptive learning paths.",
    tags: ["Angular", "Spring Boot", "MySQL", "WebSocket"],
    link: "https://edu-gamify.com",
    github: "https://github.com/yourusername/edu-gamification",
    year: "2023",
    role: "Full Stack Developer",
    featured: false,
    detailedDescription:
      "A comprehensive educational platform that makes learning engaging through gamification. Features adaptive learning, progress tracking, social learning, and detailed analytics for educators.",
    features: [
      "Adaptive learning paths",
      "Points and badge system",
      "Leaderboards and competitions",
      "Interactive quizzes and challenges",
      "Progress tracking and analytics",
      "Social learning features",
      "Teacher dashboard",
    ],
    technologies: [
      "Angular",
      "Spring Boot",
      "MySQL",
      "WebSocket",
      "Redis",
      "Docker",
      "JWT",
      "Stripe",
    ],
    challenges:
      "Creating engaging gamification mechanics that motivate learning while ensuring educational value.",
    solution:
      "Implemented a flexible reward system, created adaptive difficulty algorithms, and designed a comprehensive analytics system to track learning outcomes.",
  },
  {
    id: "real-estate-marketplace",
    title: "Real Estate Marketplace",
    description:
      "A modern real estate platform with advanced search filters, virtual tours, mortgage calculators, and agent management tools.",
    tags: ["Vue.js", "Laravel", "PostgreSQL", "Mapbox"],
    link: "https://real-estate-market.com",
    github: "https://github.com/yourusername/real-estate",
    year: "2022",
    role: "Full Stack Developer",
    featured: false,
    detailedDescription:
      "A comprehensive real estate marketplace that connects buyers, sellers, and agents. Features advanced property search, virtual tours, market analytics, and integrated financial tools.",
    features: [
      "Advanced property search and filters",
      "Virtual reality tours",
      "Mortgage calculator",
      "Market analytics and trends",
      "Agent management system",
      "Property valuation tools",
      "Document management",
    ],
    technologies: [
      "Vue.js",
      "Laravel",
      "PostgreSQL",
      "Mapbox API",
      "AWS S3",
      "Redis",
      "Docker",
      "Stripe",
    ],
    challenges:
      "Handling large amounts of property data and images while providing fast search results.",
    solution:
      "Implemented Elasticsearch for fast property search, used CDN for image delivery, and created an efficient caching strategy for frequently accessed data.",
  },
  {
    id: "music-streaming-app",
    title: "Music Streaming Platform",
    description:
      "A music streaming application with personalized playlists, social features, high-quality audio, and artist management tools.",
    tags: ["React", "Python", "Flask", "PostgreSQL", "Redis"],
    link: "https://music-stream.com",
    github: "https://github.com/yourusername/music-streaming",
    year: "2022",
    role: "Backend Developer",
    featured: false,
    detailedDescription:
      "A full-featured music streaming platform with personalized recommendations, social sharing, and high-quality audio streaming. Includes artist dashboards and comprehensive analytics.",
    features: [
      "High-quality audio streaming",
      "Personalized music recommendations",
      "Social playlist sharing",
      "Artist management dashboard",
      "Offline music downloads",
      "Concert and event integration",
      "Music discovery algorithms",
    ],
    technologies: [
      "React",
      "Python",
      "Flask",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "Docker",
      "Kubernetes",
    ],
    challenges:
      "Delivering high-quality audio streaming while managing large media files and ensuring low latency.",
    solution:
      "Implemented adaptive bitrate streaming, used CDN for media delivery, and optimized database queries for recommendation algorithms.",
  },
  {
    id: "supply-chain-optimizer",
    title: "Supply Chain Optimization Tool",
    description:
      "An AI-powered supply chain management platform with demand forecasting, inventory optimization, and route planning capabilities.",
    tags: ["Python", "Machine Learning", "React", "PostgreSQL"],
    link: "https://supply-chain-opt.com",
    github: "https://github.com/yourusername/supply-chain",
    year: "2022",
    role: "Data Scientist",
    detailedDescription:
      "An intelligent supply chain optimization platform that uses machine learning to forecast demand, optimize inventory levels, and plan efficient delivery routes.",
    features: [
      "AI-powered demand forecasting",
      "Inventory optimization",
      "Route planning and optimization",
      "Supplier performance tracking",
      "Risk assessment and mitigation",
      "Real-time supply chain visibility",
      "Automated reorder points",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS Lambda",
    ],
    challenges:
      "Creating accurate forecasting models with limited historical data and handling complex supply chain variables.",
    solution:
      "Implemented ensemble machine learning models, used time series analysis techniques, and created a modular system that can adapt to different industries.",
  },
  {
    id: "mental-health-app",
    title: "Mental Health Support App",
    description:
      "A mobile application providing mental health resources, mood tracking, meditation guides, and professional therapist connections.",
    tags: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    link: "https://mental-health-app.com",
    github: "https://github.com/yourusername/mental-health",
    year: "2021",
    role: "Mobile App Developer",
    featured: false,
    detailedDescription:
      "A compassionate mental health support application that provides users with tools for mental wellness, mood tracking, guided meditations, and connections to professional help.",
    features: [
      "Mood tracking and journaling",
      "Guided meditation sessions",
      "Crisis support resources",
      "Therapist matching and booking",
      "Community support forums",
      "Progress tracking and insights",
      "Emergency contact integration",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Stripe",
      "Twilio",
    ],
    challenges:
      "Creating a sensitive and supportive user experience while ensuring user privacy and data security.",
    solution:
      "Implemented end-to-end encryption, created a compassionate UI/UX design, and partnered with mental health professionals for content validation.",
  },
];
