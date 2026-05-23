export interface Project {
  title: string;
  slug: string;
  year: number;
  engine: string;
  shortDescription: string;
  description: string;
  role: string;
  contributions: string[];
  technologies: string[];
  image: string;
  images: string[];
  links: {
    steam?: string;
    itchIo?: string;
    website?: string;
    github?: string;
    custom?: { label: string; url: string }[];
  };
  featured: boolean;
  status: "released" | "in-development" | "game-jam" | "academic";
  videoUrl?: string;
}

export interface SocialLinks {
  twitter: string;
  github: string;
  youtube: string;
  itchIo: string;
  email: string;
}
