import { portfolio } from '../../data/Content';
import { SectionTitle } from '../ui/SectionTitle';

export const Portfolio = () => {
  return (
    <section id="portafolio" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <SectionTitle title="Trabajos Seleccionados" subtitle="Portafolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolio.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              {/* Imagen con Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Contenido */}
              <div className="p-8">
                <div className="text-indigo-400 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};