import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react';

// IMPORTANTE: Importa el video aquí para que Vite gestione la ruta
// Asegúrate de que el nombre del archivo coincida exactamente
import portfolioVideo from '../assets/videos/portfolio_web.mp4';

const projects = [
  {
    title: 'Portfolio Web V1',
    category: 'Personal Brand / Frontend',
    description: 'Mi primera web de portafolio personal. Diseñada para exponer mi trayectoria, habilidades y primeros proyectos. Cuenta con un diseño responsivo y animaciones personalizadas.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'], 
    // Usamos una propiedad 'video' en lugar de 'image' para este caso
    videoSource: portfolioVideo,
    link: 'https://angelher2005.github.io/Portfolio-Web-Angel-Patricio-Arroyo/',
    github: 'https://github.com/AngelHer2005/Portfolio-Web-Angel-Patricio-Arroyo'
  }
];

export const PortfolioPage = () => {
  return (
    <div className="w-full bg-slate-950 min-h-screen flex flex-col">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-indigo-400 mb-4 font-mono text-sm">
                <Code2 size={16} />
                <span>/work/featured</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Proyectos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
                Seleccionados
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Calidad sobre cantidad. Aquí presento mi trabajo más reciente, enfocado en código limpio y experiencia de usuario.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SINGLE PROJECT SHOWCASE --- */}
      <section className="pb-32 px-6 flex-grow">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group w-full"
              >
                {/* Tarjeta Dividida */}
                <div className="relative rounded-[2.5rem] bg-slate-900 border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl grid lg:grid-cols-2">
                    
                    {/* COLUMNA VIDEO (Izquierda/Arriba) */}
                    <div className="relative h-64 lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-800 bg-black">
                        {/* Overlay para oscurecer un poco el video al inicio */}
                        <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-all z-10 pointer-events-none" />
                        
                        <video 
                            src={project.videoSource}
                            autoPlay
                            loop
                            muted
                            playsInline // Importante para iOS
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    {/* COLUMNA INFO (Derecha/Abajo) */}
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-950">
                        <div>
                            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-6 border border-indigo-500/20">
                              {project.category}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-10">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-4 py-1.5 text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-auto">
                            <a 
                                href={project.github} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-xl font-bold transition-all border border-slate-700"
                            >
                                <Github size={20} />
                                <span>Código</span>
                            </a>
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="flex-[2] inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20"
                            >
                                <span>Ver Demo en Vivo</span>
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- GITHUB CTA --- */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
          >
              <p className="text-slate-500 mb-6">¿Quieres ver más código?</p>
              <a 
                href="https://github.com/AngelHer2005" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors font-medium border-b border-indigo-400/30 hover:border-white pb-1"
              >
                  Visita mi perfil de GitHub @AngelHer2005 <ArrowRight size={16} />
              </a>
          </motion.div>

        </div>
      </section>
    </div>
  );
};