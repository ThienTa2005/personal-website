export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  domain: string;
  url: string;
  toneColor: string;
  logoText?: string;
  logoBg?: string;
  logoSvg?: string;
  badge?: string;
  blogPostUrl?: string;
  blogPostTitle?: string;
  previewImage?: string;
  previewSubtitle?: string;
  tags?: string[];
}

export interface MicroProject {
  name: string;
  initials: string;
  bg: string;
  url: string;
  description?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  thumbnail?: string;
  url: string;
  featured?: boolean;
}

export interface QuickNote {
  title: string;
  date: string;
  url: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  bioParagraphs: string[];
  socials: {
    github: string;
    x: string;
    linkedin: string;
    email: string;
  };
}
