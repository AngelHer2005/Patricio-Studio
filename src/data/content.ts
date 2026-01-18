import { 
  Code2, 
  Globe, 
  Database, 
  Layout, 
  Server, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Search, 
  Rocket 
} from 'lucide-react';

export const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Contacto', href: '/contacto' },
];

export const services = [
  {
    title: 'Sitios Web Corporativos',
    description: 'Tu carta de presentación digital. Diseño moderno, adaptado a móviles y optimizado para SEO. Ideal para empresas que buscan credibilidad.',
    features: ['Diseño Responsivo (Mobile First)', 'Optimización SEO Básica', 'Integración con WhatsApp/Redes'],
    icon: Layout,
  },
  {
    title: 'Sistemas Web a Medida',
    description: 'Más que una web informativa. Desarrollo plataformas funcionales (Dashboards, Intranets) con gestión de datos robusta usando MySQL.',
    features: ['Base de Datos MySQL (90% Opt.)', 'Paneles Administrativos', 'Seguridad Avanzada'],
    icon: Database,
  },
  {
    title: 'Landing Pages de Conversión',
    description: 'Páginas únicas diseñadas específicamente para vender un producto o captar clientes (Leads). Velocidad de carga instantánea.',
    features: ['Copywriting Persuasivo', 'Carga Ultra-rápida (Vite)', 'Formularios de Contacto'],
    icon: Rocket,
  },
  {
    title: 'Infraestructura & Hosting',
    description: 'No te preocupes por caídas. Despliego tu web utilizando tecnologías Cloud modernas para garantizar disponibilidad 24/7.',
    features: ['Certificados SSL (Candado Seguro)', 'Hosting en AWS/Vercel', 'Dominios Personalizados'],
    icon: Cloud,
  }
];

export const process = [
  {
    step: '01',
    title: 'Análisis',
    desc: 'Revisamos los requerimientos de tu negocio y definimos la estructura ideal para tu web.',
    icon: Search
  },
  {
    step: '02',
    title: 'Desarrollo',
    desc: 'Programación limpia usando React y TypeScript. Nada de plantillas pesadas de WordPress.',
    icon: Code2
  },
  {
    step: '03',
    title: 'Optimización',
    desc: 'Ajustamos bases de datos (MySQL) y rendimiento para asegurar velocidad máxima.',
    icon: Zap
  },
  {
    step: '04',
    title: 'Lanzamiento',
    desc: 'Despliegue a producción en servidores seguros y entrega del proyecto.',
    icon: Rocket
  }
];

// Usamos testimonios genéricos pero profesionales
export const testimonials = [
  {
    quote: "Necesitábamos una web rápida y Angel entregó exactamente eso. La estructura es sólida y carga al instante.",
    author: "Ricardo Gómez",
    role: "Gerente, Logística Express",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    quote: "El sistema de gestión que nos desarrolló simplificó todo nuestro inventario. Gran manejo de bases de datos.",
    author: "Mariana Costa",
    role: "Admin, Clínica Dental",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
];

// AQUÍ REFLEJAMOS TU CV REAL
export const techStack = [
  { name: 'React', icon: Code2 },       
  { name: 'TypeScript', icon: Layout }, 
  { name: 'MySQL', icon: Database },    
  { name: 'Node.js', icon: Server },    
  { name: 'AWS Cloud', icon: Cloud },    
  { name: 'Seguridad', icon: ShieldCheck }, 
];