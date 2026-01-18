import { motion } from 'framer-motion';
import { services, process } from '../data/Content';
import { Check, ArrowRight, Code2, Cpu, Globe, Zap, Search, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  return (
    <div className="w-full overflow-hidden bg-slate-950">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Fondo ambiental optimizado */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Nuestras Capacidades
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Soluciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Ingeniería Digital</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              No vendemos plantillas. Diseñamos e implementamos arquitecturas de software a medida que resuelven problemas de negocio reales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="group relative p-8 md:p-10 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all shadow-lg">
                  <service.icon className="text-indigo-400 group-hover:text-white transition-colors" size={28} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed h-auto md:h-16">
                  {service.description}
                </p>
                
                <div className="space-y-4 border-t border-slate-800 pt-8">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Incluye</p>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                         <Check size={12} className="text-indigo-400" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECH COMPARISON (Nuevo Bloque "Senior") --- */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Stack Tecnológico Moderno</h2>
              <p className="text-slate-400 text-lg mb-8">
                Elegimos las herramientas no por moda, sino por rendimiento, seguridad y mantenibilidad a largo plazo. Tu proyecto no quedará obsoleto en 6 meses.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-white font-bold"><Globe size={18} className="text-cyan-400"/> Frontend</div>
                    <p className="text-sm text-slate-500">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-white font-bold"><Cpu size={18} className="text-purple-400"/> Backend</div>
                    <p className="text-sm text-slate-500">Node.js, Supabase (SQL), Edge Functions</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-white font-bold"><ShieldCheck size={18} className="text-green-400"/> Seguridad</div>
                    <p className="text-sm text-slate-500">JWT, Row Level Security, SSL Encriptado</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-white font-bold"><Zap size={18} className="text-yellow-400"/> Performance</div>
                    <p className="text-sm text-slate-500">Vite, CDN Global, Image Optimization</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
                 {/* Decoración Visual Abstracta */}
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 blur-[80px] opacity-20" />
                 <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                            <span className="text-slate-400">Puntuación Google Lighthouse</span>
                            <span className="text-green-400 font-mono font-bold">100/100</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                                <span>Performance</span>
                                <span>99%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }} whileInView={{ width: "99%" }} transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-green-500" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                                <span>Accesibilidad</span>
                                <span>100%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.6 }}
                                    className="h-full bg-green-500" 
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm text-slate-300">
                                <span>SEO</span>
                                <span>100%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.7 }}
                                    className="h-full bg-green-500" 
                                />
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-bold mb-4">Metodología de Trabajo</h2>
             <p className="text-slate-400">Transparencia total desde el día 1 hasta el lanzamiento.</p>
          </div>
          
          <div className="relative grid md:grid-cols-4 gap-8">
             {/* Línea conectora (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-800 -z-10" />

             {process.map((step, idx) => (
               <div key={idx} className="relative pt-4 group">
                 <div className="w-16 h-16 bg-slate-950 border border-slate-800 group-hover:border-indigo-500 transition-colors rounded-2xl flex items-center justify-center text-xl font-bold text-white mb-6 shadow-xl relative z-10 mx-auto md:mx-0">
                   {idx + 1}
                   <div className="absolute -inset-1 bg-indigo-500/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3 text-center md:text-left">{step.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20">
        <div className="container mx-auto px-6">
            <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">¿Dudas sobre qué tecnología usar?</h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                    No te preocupes. Agenda una consultoría inicial gratuita y te orientaremos sobre la mejor arquitectura para tu modelo de negocio.
                </p>
                <Link to="/contacto" className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                    Consultar con un Experto <ArrowRight size={18} />
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};