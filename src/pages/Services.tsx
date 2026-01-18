import { services } from '../data/Content'; // Usa tu data existente
import { SectionTitle } from '../components/ui/SectionTitle';

export const ServicesPage = () => {
  return (
    <div className="py-20 container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
        <h1 className="text-5xl font-bold text-white mb-6">Soluciones Digitales</h1>
        <p className="text-xl text-slate-400">
          Transformamos ideas complejas en productos digitales fluidos, rápidos y escalables.
        </p>
      </div>

      <div className="grid gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-8 bg-slate-900/40 border border-slate-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all">
            <div className="w-20 h-20 bg-indigo-500/10 rounded-2xl flex items-center justify-center shrink-0">
               <service.icon className="text-indigo-400" size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};