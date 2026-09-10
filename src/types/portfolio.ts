export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  date: string;
  description: string;
  overview: string;
  technologies: string[];
  accentColor: "blue" | "purple" | "cyan" | "green" | "orange";
  visualType: "route-planner" | "support-agent" | "sentiment-pipeline";
  githubPlaceholder: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  accent: "blue" | "purple" | "cyan" | "green" | "orange";
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
  hoursBadge?: string;
}

export interface Education {
  institution: string;
  degree: string;
  faculty: string;
  period: string;
  location: string;
}

export interface Course {
  id: string;
  title: string;
  provider: string;
  date: string;
  description?: string;
  achievement?: string;
  details?: string;
  score?: string;
  status?: "IN PROGRESS" | "COMPLETED";
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedInName: string;
  heroHeading: string;
  heroDescription: string;
  heroMetadata: {
    location: string;
    field: string;
    period: string;
  };
  aboutBio: string[];
  aboutTags: string[];
}
