import { type Collection } from "./collection";

export type Author = {
  id: string;
  name: string;
  biography: string;
  avatarUrl: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

export type Feature = {
  id: string; 
  title: string;
  description: string;
  icon: string
}

export type SectionType = "ComplexAppSection" | "SimpleAppSection" | "SingleAppSection";

export interface Project extends Collection {
  title: string;
  description: string;
  previewUrl: string;
  coverUrl: string;
  content: string;
  features: Feature[];
  authors: Author[];
  sectionType: SectionType;
}