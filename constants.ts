import { Project, Service, TeamMember, Enquiry, SiteSettings } from './types';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Dashboard Redesign',
    category: 'Web App',
    shortDescription: 'A complete overhaul of a legacy financial dashboard.',
    fullDescription: 'We transformed a cluttered, outdated interface into a streamlined, high-performance React application.',
    technologies: ['React', 'TypeScript', 'D3.js'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    featured: true,
  },
  {
    id: '2',
    title: 'HealthCare Mobile Portal',
    category: 'Mobile',
    shortDescription: 'Patient portal for accessing medical records securely.',
    fullDescription: 'Built with security and accessibility as primary drivers, ensuring HIPAA compliance.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    featured: true,
  },
  {
    id: '3',
    title: 'E-Commerce Growth Engine',
    category: 'E-Commerce',
    shortDescription: 'Custom Shopify headless implementation.',
    fullDescription: 'Increased conversion rates by 45% within the first month of launch.',
    technologies: ['Next.js', 'Shopify', 'Tailwind'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    featured: true,
  },
];

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom Web Development',
    shortDescription: 'Scalable, high-performance web applications.',
    fullDescription: 'We build robust full-stack solutions tailored to your specific business logic.',
    price: '$5,000+',
    features: ['React/Next.js', 'API Integration', 'Performance Optimization'],
    icon: 'Code',
  },
  {
    id: '2',
    title: 'UI/UX Design',
    shortDescription: 'User-centric interfaces that convert.',
    fullDescription: 'From wireframes to high-fidelity prototypes, we design delight.',
    price: '$3,000+',
    features: ['Prototyping', 'User Research', 'Design Systems'],
    icon: 'Palette',
  },
  {
    id: '3',
    title: 'Digital Strategy',
    shortDescription: 'Roadmapping your digital transformation.',
    fullDescription: 'Consulting services to align your tech stack with business goals.',
    price: '$200/hr',
    features: ['Tech Audit', 'Market Analysis', 'Growth Hacking'],
    icon: 'TrendingUp',
  },
];

export const MOCK_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15 years in tech.',
    imageUrl: 'https://picsum.photos/400/400?random=10',
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'CTO',
    bio: 'Full-stack architect and cloud expert.',
    imageUrl: 'https://picsum.photos/400/400?random=11',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Lead Designer',
    bio: 'Award-winning UI/UX specialist.',
    imageUrl: 'https://picsum.photos/400/400?random=12',
  },
];

export const MOCK_ENQUIRIES: Enquiry[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@startup.com',
    company: 'TechStart',
    budget: '$10k - $25k',
    interest: 'Web Development',
    message: 'We need a new landing page for our SaaS product.',
    status: 'New',
    createdAt: '2025-10-01',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@enterprise.org',
    company: 'BigCorp',
    budget: '$50k+',
    interest: 'Digital Strategy',
    message: 'Looking to modernize our internal tooling.',
    status: 'Read',
    createdAt: '2025-09-28',
  },
];

export const DEFAULT_SETTINGS: SiteSettings = {
  companyName: 'Brain WebInnovations',
  contactEmail: 'hello@brainweb.dev',
  contactPhone: '+1 (555) 123-4567',
  address: '123 Innovation Blvd, Tech City, TC 94000',
  heroHeadline: 'Building the Digital Future, Today.',
};