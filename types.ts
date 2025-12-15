export enum UserRole {
  ADMIN = 'ADMIN',
  SUPER_ADMIN = 'SUPER_ADMIN'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  features: string[];
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  budget: string;
  interest: string;
  message: string;
  status: 'New' | 'Read' | 'Replied';
  createdAt: string;
}

export interface SiteSettings {
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  heroHeadline: string;
}

export interface AuthState {
  user: { name: string; email: string; role: UserRole } | null;
  isAuthenticated: boolean;
}