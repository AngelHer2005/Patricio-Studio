import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, ShoppingBag, Building2, Utensils, Stethoscope } from 'lucide-react';

// Importa tu video real aquí
import portfolioVideo from '../assets/videos/portfolio_web.mp4';

// --- DATA DE PROYECTOS (Simulada para que se vea lleno como la referencia) ---
const allProjects = [
  {
    id: 1,
    title: 'Portfolio Personal V1',
    category: 'Corporativo', // Categoría para el filtro
    description: 'Plataforma de marca personal con animaciones avanzadas y modo oscuro.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    video: portfolioVideo, // Tu video real
    image: null,
    link: 'https://angelher2005.github.io/Portfolio-Web-Angel-Patricio-Arroyo/',
    repo: 'https://github.com/AngelHer2005/Portfolio-Web-Angel-Patricio-Arroyo'
  },
  {
    id: 2,
    title: 'Moda E-commerce',
    category: 'Tienda Virtual',
    description: 'Tienda de ropa con carrito de compras, pasarela de pagos y panel administrativo.',
    tech: ['Next.js', 'Stripe', 'Supabase'],
    video: null,
    // Placeholder de alta calidad
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop', 
    link: '#',
    repo: '#'
  },
  {
    id: 3,
    title: 'Inmobiliaria Premium',
    category: 'Corporativo',
    description: 'Sitio web para venta de propiedades con mapas interactivos y galería 3D.',
    tech: ['React', 'Mapbox', 'Firebase'],
    video: null,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    repo: '#'
  },
  {
    id: 4,
    title: 'Dashboard Médico',
    category: 'Sistemas',
    description: 'Sistema SaaS para gestión de pacientes, citas y recetas médicas.',
    tech: ['React', 'Node.js', 'MySQL'],
    video: null,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    repo: '#'
  }
];

// Categorías para los botones de filtro
const categories = ["Todos", "Corporativo", "Tienda Virtual", "Sistemas"];

export const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  // Lógica de filtrado
  const filteredProjects = activeCategory === "Todos" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-slate-950 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 px-6 text-center">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
             <Code2 size={14} className="text-indigo-400"/>
             Galería de Experiencia
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Proyectos</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explora una selección de trabajos recientes. Desde landing pages de alto impacto hasta sistemas complejos.
          </p>
        </motion.div>
      </section>

      {/* --- FILTER TABS (Diseño estilo iOS/App) --- */}
      <section className="py-8 px-6 sticky top-20 z-40">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 bg-slate-900/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800 shadow-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                  activeCategory === cat ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="group relative bg-slate-900 rounded-[2rem] border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-500"
                >
                  {/* Media Container (Video o Imagen) */}
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all z-10" />
                    
                    {project.video ? (
                      <video 
                        src={project.video}
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img 
                        src={project.image!} 
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Botón Flotante "Ver Proyecto" */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white hover:text-slate-950 transition-all transform translate-y-4 group-hover:translate-y-0"
                        >
                          Ver Proyecto <ExternalLink size={16} />
                        </a>
                    </div>
                  </div>

                  {/* Info del Proyecto */}
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <a href={project.repo} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                        <Github size={20} />
                      </a>
                    </div>
                    
                    <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- SECTORES (Lo nuevo inspirado en la referencia) --- */}
      {/* Esto reemplaza a los logos de clientes si aún no tienes, mostrando versatilidad */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10">
            Desarrollamos soluciones para diversos sectores
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="flex flex-col items-center gap-3 group hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                <ShoppingBag size={32} className="text-white" />
              </div>
              <span className="text-slate-300 font-medium">E-commerce</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 group hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                <Building2 size={32} className="text-white" />
              </div>
              <span className="text-slate-300 font-medium">Inmobiliarias</span>
            </div>

            <div className="flex flex-col items-center gap-3 group hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                <Utensils size={32} className="text-white" />
              </div>
              <span className="text-slate-300 font-medium">Restaurantes</span>
            </div>

            <div className="flex flex-col items-center gap-3 group hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                <Stethoscope size={32} className="text-white" />
              </div>
              <span className="text-slate-300 font-medium">Salud / Clínicas</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 relative px-6">
        <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              ¿Tienes un proyecto similar en mente?
            </h2>
            <div className="flex justify-center gap-4">
               <a 
                 href="https://wa.me/51997150226" 
                 className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20"
               >
                 Cotizar mi Idea
               </a>
            </div>
        </div>
      </section>

    </div>
  );
};