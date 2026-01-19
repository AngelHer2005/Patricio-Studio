import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Layout, Globe, Check, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { testimonials, techStack, pricing, faqs } from '../data/Content';
import { WhatsAppBtn } from '../components/ui/WhatsAppBtn'; // Importamos el botón

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export const Home = () => {
  return (
    <div className="overflow-hidden w-full relative">
      <WhatsAppBtn /> {/* Botón Flotante Activo */}
      
      {/* --- HERO SECTION (Tu diseño Premium) --- */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
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
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Diseño Web Profesional en Perú
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Tu negocio necesita <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
                vender más.
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed">
              Diseñamos páginas web que convierten visitantes en clientes. Rápidas, seguras y optimizadas para Google.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/contacto" className="group relative px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                <span className="relative flex items-center gap-2">
                  Cotizar Ahora <ArrowRight size={20} />
                </span>
              </Link>
              <a href="#planes" className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-xl font-bold transition-colors">
                Ver Planes
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Hero (Mockup) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block will-change-transform"
          >
            <div className="relative z-10 bg-[#0F1117] border border-slate-800 rounded-2xl p-2 shadow-2xl shadow-indigo-500/10 rotate-1">
               {/* Simulación de navegador simple */}
               <div className="bg-slate-900 rounded-t-xl p-3 flex gap-2 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="ml-4 bg-slate-800 rounded-md px-3 py-1 text-xs text-slate-500 w-full">tunegocio.com</div>
               </div>
               <div className="bg-slate-950 p-8 rounded-b-xl flex flex-col items-center justify-center min-h-[300px] text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Aumenta tus Ventas</h3>
                  <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm">Comprar Ahora</button>
                  <div className="mt-8 grid grid-cols-2 gap-4 w-full opacity-50">
                     <div className="h-20 bg-slate-800 rounded-lg"></div>
                     <div className="h-20 bg-slate-800 rounded-lg"></div>
                  </div>
               </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3">
              <div className="bg-green-500/20 p-2 rounded-lg text-green-400 shrink-0">
                <CheckCircle2 size={24}/>
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Resultados</div>
                <div className="text-sm font-bold text-white whitespace-nowrap">+40% Ventas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION: PLANES Y PRECIOS (La clave de la referencia) --- */}
      <section id="planes" className="py-24 relative bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white">Planes a tu Medida</h2>
              <p className="text-slate-400 text-lg">Precios transparentes. Pago único. Sin comisiones ocultas.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, idx) => (
                <div key={idx} className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                   plan.highlight 
                   ? 'bg-slate-900/80 border-indigo-500 shadow-2xl shadow-indigo-500/20 scale-105 z-10' 
                   : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}>
                   {plan.highlight && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                       Más Vendido
                     </div>
                   )}
                   <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                   <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-500 text-sm">/único</span>
                   </div>
                   <p className="text-slate-400 text-sm mb-8 min-h-[40px]">{plan.description}</p>
                   
                   <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                           <Check size={16} className="text-indigo-400 mt-0.5 shrink-0" />
                           {feat}
                        </li>
                      ))}
                   </ul>

                   <a 
                     href={`https://wa.me/51997150226?text=Hola, me interesa el ${plan.name}`}
                     target="_blank"
                     className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                       plan.highlight 
                       ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg' 
                       : 'bg-slate-800 hover:bg-slate-700 text-white'
                     }`}
                   >
                     Solicitar Plan
                   </a>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- BENEFITS GRID (Simplificado) --- */}
      <section className="py-24 relative bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
               <Zap className="text-yellow-400 mb-4" size={32} />
               <h3 className="text-xl font-bold text-white mb-2">Súper Rápida</h3>
               <p className="text-slate-400">Tus clientes no esperarán. Optimizamos todo para cargar en menos de 1 segundo.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
               <Globe className="text-cyan-400 mb-4" size={32} />
               <h3 className="text-xl font-bold text-white mb-2">Dominio Incluido</h3>
               <p className="text-slate-400">Te regalamos el dominio .com o .pe por el primer año con cualquier plan.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
               <Layout className="text-purple-400 mb-4" size={32} />
               <h3 className="text-xl font-bold text-white mb-2">100% Administrable</h3>
               <p className="text-slate-400">Podrás cambiar fotos, textos y precios tú mismo desde un panel fácil de usar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION (Para matar objeciones) --- */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
           </div>
           <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                   <div className="flex gap-4">
                      <HelpCircle className="text-indigo-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{faq.question}</h4>
                        <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- TECH MARQUEE (Tu sello de calidad) --- */}
      <section className="py-12 border-y border-white/5 bg-slate-950">
        <div className="container mx-auto px-6 mb-6 text-center">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Desarrollado con la mejor tecnología</p>
         </div>
        <div className="overflow-hidden relative max-w-full">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
          <motion.div 
            className="flex gap-16 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-16 items-center flex-shrink-0">
                {techStack.map((tech, idx) => (
                   <div key={`${i}-${idx}`} className="flex items-center gap-2 text-slate-600 hover:text-indigo-400 transition-colors">
                      <tech.icon size={20} />
                      <span className="text-xl font-bold">{tech.name}</span>
                   </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 relative overflow-hidden bg-slate-950">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[2.5rem] p-12 md:p-24 text-center border border-indigo-500/30 shadow-2xl relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 to-transparent pointer-events-none" />
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">¿Listo para despegar?</h2>
             <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-10 relative z-10">
               Empieza hoy con el Plan Emprendedor o cotiza una solución a medida.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <a href="https://wa.me/51997150226" className="px-10 py-5 bg-white text-indigo-900 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl">
                 Escribir al WhatsApp
               </a>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};