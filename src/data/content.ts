import { Code2, Rocket, Globe, Smartphone, Layout, ShieldCheck } from 'lucide-react';

export const navigation = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
];

export const services = [
  {
    title: 'Desarrollo de Aplicaciones Web',
    description: 'Sistemas complejos (SaaS, Dashboards) construidos con React y Node.js. Arquitectura escalable y segura.',
    icon: Code2,
  },
  {
    title: 'Sitios Corporativos de Alto Impacto',
    description: 'Landing pages optimizadas para conversión. Animaciones fluidas, carga instantánea y diseño premium.',
    icon: Globe,
  },
  {
    title: 'Optimización y Auditoría',
    description: 'Mejoro el rendimiento (Core Web Vitals), SEO técnico y la accesibilidad de plataformas existentes.',
    icon: Rocket,
  },
];

export const portfolio = [
  {
    title: 'FinTech Dashboard Pro',
    category: 'SaaS / Dashboard',
    description: 'Plataforma de gestión financiera en tiempo real. Reducción del tiempo de carga en un 40% migrando a Vite.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop', // Placeholder pro
  },
  {
    title: 'E-commerce Moda Minimal',
    category: 'E-commerce',
    description: 'Tienda online headless con pasarela de pagos customizada y gestión de inventario en tiempo real.',
    tech: ['Next.js', 'Stripe', 'Zustand'],
    image: 'https://images.unsplash.com/photo-1523206485979-5774023b3595?q=80&w=1000&auto=format&fit=crop',
  },
];

export const stats = [
  { label: 'Años de Experiencia', value: '8+' },
  { label: 'Proyectos Entregados', value: '50+' },
  { label: 'Retorno de Inversión', value: '300%' },
];