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
    id: "queendeq",
    title: "Queen De Q",
    description: "",
    tags: [],
    link: "https://www.queendeq.com/",
    featured: true,
  },
  {
    id: "queen-de-q-platform-v2",
    title: "Queen De Q Platform V2",
    description: "",
    tags: [],
    link: "https://queen-de-q-platform-v2.vercel.app/",
    featured: false,
  },
  {
    id: "pump-fourchette",
    title: "Pump Fourchette",
    description: "",
    tags: [],
    link: "https://pump-fourchette.vercel.app/",
    featured: true,
  },
  {
    id: "bless-fourchette",
    title: "Bless Fourchette",
    description: "",
    tags: [],
    link: "https://bless-fourchette.vercel.app/",
    featured: false,
  },
  {
    id: "orionconseil",
    title: "Orion Conseil",
    description: "",
    tags: [],
    link: "https://www.orionconseil.com/",
    featured: false,
  },
  {
    id: "monimpression",
    title: "Mon Impression",
    description: "",
    tags: [],
    link: "https://www.monimpression.ca/",
    featured: false,
  },
  {
    id: "confort-plus-65",
    title: "Confort Plus 65",
    description: "",
    tags: [],
    link: "https://confort-plus-65.vercel.app/",
    featured: false,
  },
  {
    id: "tct",
    title: "TCT",
    description: "",
    tags: [],
    link: "https://www.tct.pro/",
    featured: true,
  },
  {
    id: "milleniumautos",
    title: "Millenium Autos",
    description: "",
    tags: [],
    link: "https://www.milleniumautos.ca/",
    featured: false,
  },
  {
    id: "mb-group-canada",
    title: "MB Group Canada",
    description: "",
    tags: [],
    link: "https://mb-group-canada.vercel.app/",
    featured: false,
  },
  {
    id: "progix",
    title: "Progix",
    description: "",
    tags: [],
    link: "https://www.progix.pro/",
    featured: false,
  },
  {
    id: "conseilcm360",
    title: "Conseil CM360",
    description: "",
    tags: [],
    link: "https://www.conseilcm360.com/",
    featured: false,
  },
  {
    id: "humanicia",
    title: "Humanicia",
    description: "",
    tags: [],
    link: "https://www.humanicia.com/",
    featured: true,
  },
  {
    id: "enseignesmediaprint",
    title: "Enseignes Media Print",
    description: "",
    tags: [],
    link: "https://www.enseignesmediaprint.com/",
    featured: false,
  },
  {
    id: "ags-globalfarm-sarl",
    title: "AGS Global Farm SARL",
    description: "",
    tags: [],
    link: "https://ags-globalfarm-sarl.vercel.app/",
    featured: false,
  },
  {
    id: "cheminement",
    title: "Cheminement",
    description: "",
    tags: [],
    link: "https://cheminement.vercel.app/",
    featured: false,
  },
  {
    id: "safyr-nine",
    title: "Safyr Nine",
    description: "",
    tags: [],
    link: "https://safyr-nine.vercel.app/",
    featured: false,
  },
];
