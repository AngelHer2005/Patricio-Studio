import { services } from '../../data/Content';
import { SectionTitle } from '../ui/SectionTitle';

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Soluciones Técnicas" subtitle="Mis Servicios" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700 hover:border-indigo-500/50 group">
              <div className="w-14 h-14 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors">
                <service.icon className="text-indigo-400 group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};