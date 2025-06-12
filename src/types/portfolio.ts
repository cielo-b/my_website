export interface Skill {
  name: string;
  percentage: number;
}

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  position: 'left' | 'right';
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description?: string;
  image: string;
  url: string;
  github?: string;
  category: string;
  delay: string;
  technologies?: string[];
  features?: string[];
  status?: 'completed' | 'in-progress' | 'maintenance';
  year?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
} 