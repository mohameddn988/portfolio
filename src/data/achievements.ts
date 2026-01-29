export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "production-apps",
    year: "2024",
    title: "Led development of 10+ production applications",
    description: "Successfully delivered enterprise-scale projects",
  },
  {
    id: "open-source",
    year: "2023",
    title: "Open Source Contributor",
    description: "Contributed to major open-source projects",
  },
  {
    id: "certification",
    year: "2022",
    title: "Full Stack Development Certification",
    description: "Completed advanced certification program",
  },
];