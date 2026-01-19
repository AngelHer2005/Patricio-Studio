import { motion } from 'framer-motion';
import { services, process } from '../data/Content';
import { Check, ArrowRight, ShieldCheck, Server, Globe, Mail, Smartphone, Search, Zap } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <div className="w-full bg-slate-950 min-h-screen overflow-hidden">
      
      {/* --- HERO SECTION (Idéntico al Home para consistencia) --- */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Fondo Ambiental */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Catálogo de Soluciones
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Diseño Web <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                Estratégico & Escalable
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              No solo hacemos que tu web se vea bien. Creamos herramientas digitales diseñadas para vender, posicionar tu marca y crecer contigo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID (Diseño Patricio Studio) --- */}
      <section className="py-20 relative px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 max-w-6xl">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="group relative flex flex-col h-full"
            >
              {/* Efecto de borde gradiente al hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              <div className="relative flex flex-col h-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 md:p-10 overflow-hidden transition-colors group-hover:bg-slate-900/95">
                
                {/* Glow ambiental dentro de la tarjeta */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-all" />

                {/* Icono con estilo Glass */}
                <div className="w-16 h-16 bg-slate-800/50 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300">
                  <service.icon size={32} className="text-indigo-400 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                {/* Lista de características (Estilo Check list) */}
                <div className="bg-slate-950/50 rounded-xl p-6 border border-slate-800/50 mb-8">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Incluye</p>
                  <div className="space-y-3">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-slate-300">
                        <Check size={16} className="text-emerald-400 shrink-0 mt-1" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={`https://wa.me/51997150226?text=Hola Patricio, me interesa cotizar: ${service.title}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-bold text-center transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-500/20"
                >
                  Solicitar Cotización <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- BENEFICIOS "TODO INCLUIDO" (Estilo Grid Tech) --- */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-900 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Arquitectura Premium Incluida
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No cobramos extra por lo esencial. Todos nuestros desarrollos incluyen la base técnica necesaria para triunfar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Server, title: "Hosting Veloz", desc: "Alojamiento optimizado (1 año gratis)", color: "text-indigo-400" },
              { icon: Globe, title: "Dominio .com", desc: "Tu identidad digital (1 año gratis)", color: "text-purple-400" },
              { icon: ShieldCheck, title: "Certificado SSL", desc: "Encriptación de seguridad bancaria", color: "text-emerald-400" },
              { icon: Mail, title: "Email Corporativo", desc: "Cuentas profesionales @tunegocio", color: "text-yellow-400" },
              { icon: Smartphone, title: "100% Responsive", desc: "Perfecto en Móviles y Tablets", color: "text-cyan-400" },
              { icon: Search, title: "SEO Ready", desc: "Estructura optimizada para Google", color: "text-red-400" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
                <div className={`w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-4 ${item.color} shadow-sm`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS TIMELINE (Minimalista) --- */}
      <section className="py-24 relative px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-white mb-4">Flujo de Trabajo</h2>
             <p className="text-slate-400">Simple, transparente y ágil.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
             {process.map((step, idx) => (
               <div key={idx} className="relative group text-center md:text-left">
                 {/* Línea conectora (Solo Desktop) */}
                 {idx !== process.length - 1 && (
                   <div className="hidden md:block absolute top-8 left-1/2 w-full h-[1px] bg-slate-800" />
                 )}
                 
                 <div className="w-16 h-16 mx-auto md:mx-0 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-center text-xl font-bold text-white mb-6 shadow-xl relative z-10 group-hover:border-indigo-500 transition-colors">
                   {idx + 1}
                 </div>
                 <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL (Consistente con Home) --- */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl">
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                  ¿Listo para profesionalizar tu marca?
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10 text-lg relative z-10">
                  Agenda una asesoría gratuita de 15 minutos para analizar tu proyecto y definir la mejor tecnología para ti.
                </p>
                
                <a 
                  href="https://wa.me/51997150226" 
                  className="relative z-10 inline-flex items-center gap-2 bg-white text-indigo-950 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl"
                >
                    <Zap size={20} className="text-indigo-600" />
                    Iniciar Conversación
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};