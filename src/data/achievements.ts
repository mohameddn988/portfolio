export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "masters-degree",
    year: "2026",
    title: "Master's Degree in IT Systems and Decision",
    description:
      "University Badji Mokhtar, Annaba, Algeria. Currently pursuing advanced studies in information systems, decision support, and intelligent systems, with coursework focused on algorithmic complexity, advanced Java programming, Service-Oriented Architectures, Machine Learning and Deep Learning, cloud computing, information theory, and advanced database systems.",
  },
  {
    id: "bachelors-degree",
    year: "2024",
    title: "Bachelor's Degree in Computer Science (B.Sc.)",
    description:
      "University Badji Mokhtar, Annaba, Algeria. Comprehensive curriculum covering algorithms, data structures, computer architecture, graph theory, information systems, database systems, operating systems, compiler theory, object-oriented programming, software engineering, web development, computer networks, AI fundamentals, cybersecurity, mobile development, and semi-structured data.",
  },
];