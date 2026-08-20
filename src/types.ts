export interface Skill {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'database' | 'mobile' | 'tools' | 'cloud' | 'version_control';
  level: number; // Percentage or 1-5 scale
  iconName?: string;
  description: string;
  badgeColor?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'backend' | 'mobile' | 'bot';
  subtitle: string;
  description: string;
  problemSolved: string;
  features: string[];
  techStack: string[];
  liveDemoUrl?: string;
  botUrl?: string;
  botUsername?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
  architectureNotes?: string;
  apiEndpoints?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
    sampleResponse: object;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills: string[];
  category?: 'backend' | 'mobile' | 'web' | 'database' | 'academic' | 'cloud';
}

export interface Education {
  id?: string;
  institution: string;
  degree: string;
  major: string;
  graduationYear: string;
  status: string;
  highlights: string[];
  coursework?: string[];
  type?: 'university' | 'high_school';
  certificates?: Certificate[];
}

export interface SpokenLanguage {
  language: string;
  proficiency: string;
  levelText: string;
  levelScore: number;
  nativeName?: string;
  notes?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
