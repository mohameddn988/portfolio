export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "masters-degree",
    year: "2024 - 2026",
    title: "achievements.mastersDegree.title",
    description: "achievements.mastersDegree.description",
  },
  {
    id: "bachelors-degree",
    year: "2021 - 2024",
    title: "achievements.bachelorsDegree.title",
    description: "achievements.bachelorsDegree.description",
  },
];
