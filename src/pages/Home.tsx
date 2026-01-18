import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Layout, Lock, TrendingUp, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/Content';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const Home = () => {
  return (
    <div className="overflow-hidden w-full">
      
      {/* --- HERO SECTION --- */}
      {/* pt-32 para compensar el navbar flotante */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        
        {/* Fondo con gradientes radiales optimizados */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-70" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent opacity-70" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto Hero */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="will-change-transform"
          >
            <motion.div variants={fadeInUp} className="inline-flexXH items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolutenH inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Aceptando proyectos nuevos
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Desarrollo web que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                marca la diferencia.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
              Transformo ideas en software de alto rendimiento. Especialista en React, arquitecturas escalables y experiencias de usuario inolvidables.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/contacto" className="group relative px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  Iniciar Proyecto <ArrowRight size={20} />
                </span>
              </Link>
              <Link to="/portafolio" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-whiteyb border border-slate-700 rounded-xl font-bold transition-colors">
                Ver Trabajo Reciente
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Hero (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block will-change-transform"
          >
            {/* Ventana de Código */}
            <div className="relative z-10 bg-[#0F1117] border border-slate-800 rounded-2xl p-6 shadow-2xl shadow-indigo-500/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-xs text-slate-500 font-mono ml-4">PatricioStudio.tsx</div>
              </div>
              
              <div className="font-mono text-sm leading-relaxed text-slate-300">
                <div className="flex"><span className="text-purple-400 mr-2">import</span> <span className="text-yellow-200">Success</span> <span className="text-purple-400 mx-2">from</span> <span className="text-green-400">'./Future'</span>;</div>
                <br />
                <div className="flex"><span className="text-blue-400 mr-2">const</span> <span className="text-yellow-200">App</span> = () <span className="text-blue-400">=&gt;</span> {'{'}</div>
                <div className="pl-4 flex items-center gap-2">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="pl-8">
                  &lt;<span className="text-yellow-200">DigitalExperience</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-300">performance</span>=<span className="text-green-400">"100%"</span>
                </div>
                <div className="pl-12">
                  <span className="text-blue-300">seo</span>=<span className="text-green-400">"Optimized"</span>
                </div>
                <div className="pl-8">/&gt;</div>
                <div className="pl-4">);</div>
                <div>{'}'};</div>
              </div>
            </div>
            
            {/* FIXED STATUS CARD: 
              - Posición ajustada para no salirse (-bottom-6 en vez de -10)
              - Aseguramos z-index alto
            */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3"
            >
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400 shrink-0">
                <CheckCircle2 size={24}/>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">System Status</div>
                <div className="text-sm font-bold text-white whitespace-nowrap">Production Ready</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- INFINITE TECH SCROLL --- */}
      <section className="py-10 border-y border-white/5 bg-slate-950 relative z-20">
        <div className="overflow-hidden relative max-w-full">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            className="flex gap-16 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center flex-shrink-0">
                {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'PostgreSQL', 'AWS', 'Framer Motion', 'Docker', 'Stripe'].map((tech, idx) => (
                  <span key={`${i}-${idx}`} className="text-2xl font-bold text-slate-600 hover:text-indigo-400 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- BENTO GRID --- */}
      <section className="py-32 relative bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Más que código limpio</h2>
            <p className="text-slate-400 text-lg">
              Construyo ecosistemas digitales diseñados para crecer, convertir y posicionarse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400">
                  <Zap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Rendimiento Extremo</h3>
                <p className="text-slate-400 max-w-md">Sitios optimizados para Core Web Vitals. Carga en menos de 1 segundo.</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diseño UI/UX</h3>
              <p className="text-slate-400 text-sm">Interfaces modernas y accesibles.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-cyan-400">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SEO Nativo</h3>
              <p className="text-slate-400 text-sm">Estructura semántica perfecta.</p>
            </div>

            <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
                  <Lock size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Seguridad y Escalabilidad</h3>
                <p className="text-slate-400 max-w-md">Arquitectura preparada para escalar y proteger datos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS & TESTIMONIALS --- */}
      <section className="py-20 border-y border-slate-900 bg-slate-950">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Años Experiencia", value: "8+" },
              { label: "Proyectos Exitosos", value: "50+" },
              { label: "Retorno Inversión", value: "300%" },
              { label: "Países", value: "12" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
        </div>
      </section>

      <section className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Clientes Satisfechos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_,star) => (
                    <TrendingUp key={star} size={16} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg italic leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover border border-slate-800" loading="lazy" />
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-indigo-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center border border-indigo-500/30 shadow-2xl relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 to-transparent pointer-events-none" />
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">¿Tienes un proyecto?</h2>
             <p className="text-indigo-200 text-xl max-w-2xl mx-auto mb-12 relative z-10">
               No pierdas tiempo con soluciones mediocres.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <Link to="/contacto" className="px-10 py-5 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl">
                 Agendar Llamada Gratis
               </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};