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
    company: "workExperience.progix.company",
    role: "workExperience.progix.role",
    period: "workExperience.progix.period",
    logo: "/WorkExperience/Progix.svg",
    height: "h-[2.4rem]",
  },
  {
    id: "freelancer",
    company: "workExperience.freelancer.company",
    role: "workExperience.freelancer.role",
    period: "workExperience.freelancer.period",
    logo: "Logo.png",
    height: "h-[2.4rem]",
  },
];
