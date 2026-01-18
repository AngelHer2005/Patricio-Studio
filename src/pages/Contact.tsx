import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, ArrowRight, Github, Linkedin, Twitter, MapPin } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="w-full bg-slate-950 min-h-screen overflow-hidden">
      
      {/* Fondo Ambiental (Consistente con las otras páginas) */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge de Disponibilidad */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Respuesta en &lt; 24h
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hablemos de tu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                próximo gran proyecto.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-lg">
              ¿Tienes una idea en mente o necesitas escalar tu plataforma actual? Estoy listo para analizar tu caso y proponerte una arquitectura sólida.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                  <Mail className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email Directo</h3>
                  <a href="mailto:hola@patriciostudio.com" className="text-slate-400 hover:text-white transition-colors">
                    hola@patriciostudio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-indigo-500/50 transition-colors">
                  <MapPin className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Zona Horaria</h3>
                  <p className="text-slate-400">
                    Remoto Global (GMT-5 / GMT+1)
                  </p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="mt-12 pt-12 border-t border-slate-900">
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">Sígueme en</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-950 hover:scale-110 transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- COLUMNA DERECHA: FORMULARIO --- */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              
              {/* Decoración sutil dentro del formulario */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-[100px] pointer-events-none" />

              <div className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Tu Nombre</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">Tu Email</label>
                    <input 
                      type="email" 
                      placeholder="juan@empresa.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Tipo de Proyecto</label>
                  <div className="relative">
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer">
                      <option>Desarrollo Web a Medida</option>
                      <option>E-commerce / Tienda Online</option>
                      <option>Aplicación Web (SaaS)</option>
                      <option>Auditoría / Mantenimiento</option>
                      <option>Otro</option>
                    </select>
                    {/* Flecha custom para el select */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Cuéntame sobre el proyecto</label>
                  <textarea 
                    rows={4} 
                    placeholder="¿Cuál es el objetivo principal? ¿Tienes plazos estimados?"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" // Cambiar a 'submit' cuando conectes el backend
                  className="w-full group bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all transform active:scale-[0.98] shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Enviar Mensaje
                </button>

                <p className="text-center text-xs text-slate-500 mt-4">
                  Al enviar este formulario aceptas la política de privacidad. Prometo no enviar spam.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};