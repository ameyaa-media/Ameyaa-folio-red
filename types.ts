export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  github?: string;
}

export interface NavItem {
  label: string;
  href: string; // can be a hash (#about) or a route (/projects)
  isRoute?: boolean;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  author: string;
  authorImage: string;
  tags: string[];
}