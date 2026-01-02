export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  liveLink?: string;
  githubLink?: string;
  detailsLink: string;
  category: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

// Perbaiki tipe Skill
export interface Skill {
  name: string;
  level: number;
  category:
    | "programming"
    | "frameworks"
    | "databases"
    | "cloud"
    | "ml"
    | "testing"
    | "tools"
    | "softskills";
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
