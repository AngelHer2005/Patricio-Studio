import { SectionTitle } from '../ui/SectionTitle';
import { Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Hablemos de tu Proyecto" subtitle="Contacto" centered />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Info Directa */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">¿Listo para escalar tu negocio?</h3>
            <p className="text-slate-400 text-lg">
              Actualmente tengo disponibilidad para aceptar 2 nuevos clientes este mes. Cuéntame tu idea y analicemos la viabilidad técnica.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                    <Mail className="text-indigo-400" size={20} />
                </div>
                <span>hola@patriciostudio.com</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                    <MapPin className="text-indigo-400" size={20} />
                </div>
                <span>Remoto / Global</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form className="bg-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-400 text-sm mb-2">Nombre</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="tu@empresa.com" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Cuéntame sobre tu proyecto..." />
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]">
                Enviar Mensaje
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};