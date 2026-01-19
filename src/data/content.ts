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
  Monitor,
  ShoppingBag, 
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
    title: 'Páginas Web Corporativas',
    description: 'Ideal para empresas que buscan posicionamiento. Muestra tus servicios, historia y galería con un diseño elegante que genera confianza inmediata.',
    features: ['Hasta 5 Secciones Internas', 'Integración con Google Maps', 'Formulario de Contacto', 'Enlaces a Redes Sociales'],
    icon: Monitor, // Icono de Monitor
  },
  {
    title: 'Tiendas Virtuales (E-commerce)',
    description: 'Vende tus productos las 24/7. Sistema completo con carrito de compras, pasarela de pagos (Visa/Niubiz/Yape) y panel para gestionar pedidos.',
    features: ['Catálogo Ilimitado', 'Pasarela de Pagos Segura', 'Gestión de Inventario', 'Panel de Administración'],
    icon: ShoppingBag, // Icono de Bolsa de Compras
  },
  {
    title: 'Landing Pages (Publicidad)',
    description: 'Páginas de aterrizaje diseñadas específicamente para campañas de Facebook o Google Ads. Optimizadas para convertir visitantes en leads.',
    features: ['Diseño de Una Sola Página', 'Llamadas a la Acción Claras', 'Carga Ultra Rápida', 'Botón Flotante de WhatsApp'],
    icon: Rocket, // Icono de Cohete
  },
  {
    title: 'Sistemas Web a Medida',
    description: '¿Necesitas algo más complejo? Intranets, sistemas de gestión, aulas virtuales o plataformas SaaS desarrolladas desde cero con React y Node.js.',
    features: ['Base de Datos Personalizada', 'Roles de Usuario (Admin/Cliente)', 'Reportes y Dashboards', 'Seguridad Avanzada'],
    icon: Database, // Icono de Base de Datos
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

export const pricing = [
  {
    name: 'Plan Emprendedor',
    price: 'S/ 500', // Ajusta a tu moneda si no es Soles
    description: 'Ideal para profesionales y pequeños negocios que necesitan presencia digital rápida.',
    features: [
      'Landing Page (1 Página)',
      'Diseño Responsivo (Móvil/PC)',
      'Formulario de Contacto',
      'Enlace a WhatsApp',
      'Hosting Gratis (1 año)',
      'Entrega en 3 días'
    ],
    highlight: false
  },
  {
    name: 'Plan Corporativo',
    price: 'S/ 950',
    description: 'Sitio web multipágina para empresas que buscan posicionamiento y autoridad.',
    features: [
      'Sitio Web Completo (Hasta 5 pág)',
      'Panel Administrable',
      'Optimización SEO Básica',
      'Integración con Google Maps',
      'Correo Corporativo',
      'Soporte Técnico (1 mes)'
    ],
    highlight: true // Este será el recomendado
  },
  {
    name: 'Tienda Virtual',
    price: 'S/ 1800',
    description: 'Vende tus productos online con pasarela de pagos y gestión de inventario.',
    features: [
      'Catálogo de Productos',
      'Pasarela de Pagos (Visa/Yape)',
      'Carrito de Compras',
      'Panel de Ventas',
      'Gestión de Stock',
      'Capacitación de uso'
    ],
    highlight: false
  }
];

export const faqs = [
  {
    question: "¿Incluye Hosting y Dominio?",
    answer: "Sí, todos nuestros planes incluyen el primer año de hosting de alta velocidad y un dominio .com o .pe gratuito."
  },
  {
    question: "¿El pago es único o mensual?",
    answer: "El pago por el diseño es único. Solo deberás renovar el hosting y dominio anualmente (aprox. S/ 300 al año) después del primer año."
  },
  {
    question: "¿Puedo administrar mi propia web?",
    answer: "Absolutamente. En los planes Corporativo y Tienda, te entregamos un panel de control para que cambies textos y fotos sin saber programar."
  },
  {
    question: "¿Cuánto tiempo tardan?",
    answer: "Dependiendo del plan, entregamos entre 3 a 10 días hábiles, siempre que tengamos toda la información de tu parte."
  }
];

