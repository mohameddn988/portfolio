export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  height: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: "progix",
    company: "Progix",
    role: "Full Stack Developer",
    period: "July 2025 - January 2026",
    logo: "/WorkExperience/Progix.svg",
    height: "h-12",
  },
  {
    id: "freelancer",
    company: "Freelance",
    role: "Full Stack Developer",
    period: "June 2024 - June 2025",
    logo: "Logo.png",
    height: "h-12",
  },
];
