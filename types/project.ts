export interface Project {
  title: string;
  slug: string;
  description: string;
  status: string;
  category: string;
  featured: boolean;

  technologies: string[];

  github?: string;

  demo?: string;

  coverImage?: string;
}