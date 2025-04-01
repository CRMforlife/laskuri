export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  value: number;
}

export interface FormData {
  pageCount: Option | null;
  contentCreation: Option | null;
  visualDesign: Option | null;
  maintenance: Option | null;
  seoAnalysis: Option | null;
  aiVisibility: Option | null;
  trafficGrowth: Option | null;
  blog: Option | null;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  company: string;
} 