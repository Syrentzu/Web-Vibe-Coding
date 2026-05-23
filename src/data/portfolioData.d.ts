export interface Profile {
  name: string;
  title: string;
  pageTitle: string;
  location: string;
  email: string;
  github: string;
  githubUrl: string;
  linkedin: string;
  linkedinUrl: string;
  avatarUrl: string;
  statusBadge: string;
  bio: string;
}

export interface ColorPalette {
  primaryDark: string;
  accentMain: string;
  accentMid: string;
  accentLight: string;
  darkModeBg: string;
  darkModeCard: string;
}

export interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  timeline: string;
  details: string;
}

export interface Skills {
  development: string[];
  design: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
}

export interface FilterOptionItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'saas' | 'landing' | 'agency' | 'ecommerce';
  categoryLabel: string;
  tags: string[];
  year: string;
  desc: string;
  img: string;
  url: string;
}

export interface BlogArticleItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  desc: string;
  img: string;
}

export interface PortfolioDataType {
  profile: Profile;
  colorPalette: ColorPalette;
  education: EducationItem[];
  skills: Skills;
  services: ServiceItem[];
  filterOptions: FilterOptionItem[];
  projects: ProjectItem[];
  blogArticles: BlogArticleItem[];
}

export const portfolioData: PortfolioDataType;
