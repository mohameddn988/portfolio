export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  description?: string;
  responsibilities?: string[];
  technologies?: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    id: "getgoing",
    company: "Getgoing",
    role: "UI/UX Designer",
    period: "December 2022 - Present",
    logo: "Logo.png",
    description: "Leading UI/UX design initiatives for innovative digital products.",
    responsibilities: [
      "Design and prototype user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Collaborate with development teams to ensure design implementation",
      "Create and maintain design systems and component libraries"
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"]
  },
  {
    id: "waresix",
    company: "Waresix",
    role: "Product Designer Intern",
    period: "September - December 2022",
    logo: "Logo.png",
    description: "Contributed to product design for logistics and supply chain solutions.",
    responsibilities: [
      "Designed user flows and wireframes for logistics platform",
      "Participated in design sprints and workshops",
      "Created high-fidelity mockups and prototypes",
      "Assisted in user testing and research"
    ],
    technologies: ["Figma", "Miro", "Notion", "Jira"]
  },
  {
    id: "sagara",
    company: "Sagara Technology",
    role: "UI/UX Designer Specialist Intern",
    period: "July - October 2022",
    logo: "Logo.png",
    description: "Specialized in creating intuitive user experiences for enterprise applications.",
    responsibilities: [
      "Designed enterprise software interfaces",
      "Conducted competitive analysis and market research",
      "Created design documentation and specifications",
      "Collaborated with cross-functional teams"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Protopie"]
  },
  {
    id: "vocasia",
    company: "Vocasia x Kampus Merdeka",
    role: "UI/UX Designer Intern",
    period: "August 2021 - February 2022",
    logo: "Logo.png",
    description: "Designed educational platform interfaces and learning experiences.",
    responsibilities: [
      "Created user-centered designs for educational platform",
      "Developed design components and patterns",
      "Participated in design critique sessions",
      "Delivered design presentations to stakeholders"
    ],
    technologies: ["Figma", "Adobe Illustrator", "Photoshop"]
  }
];
