import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Send, MapPin, Clock, MessageCircle, 
  CheckCircle2, Loader2, AlertCircle, ChevronDown, 
  Monitor, ShoppingBag, Database, Layout, HelpCircle,
  ArrowRight, Globe, Plus, Minus
} from 'lucide-react';
import { supabase } from '../lib/supabase';

// --- DATOS ESTÁTICOS (Optimizados fuera del componente) ---
const projectOptions = [
  { id: 'Web Corporativa', label: 'Web Corporativa', icon: Monitor },
  { id: 'Tienda Virtual', label: 'Tienda Virtual', icon: ShoppingBag },
  { id: 'Sistema a Medida', label: 'Sistema a Medida', icon: Database },
  { id: 'Landing Page', label: 'Landing Page', icon: Layout },
  { id: 'Otro', label: 'Consultoría / Otro', icon: HelpCircle },
];

const faqs = [
  { 
    q: "¿Emiten factura o boleta?", 
    a: "Sí. Somos una empresa formal en Perú. Todos nuestros precios incluyen los impuestos de ley y emitimos facturas electrónicas o recibos por honorarios según corresponda." 
  },
  { 
    q: "¿Cuál es el tiempo de entrega?", 
    a: "Depende de la complejidad. Una Landing Page toma 3 días hábiles, una Web Corporativa 7 días y una Tienda Virtual entre 10 a 15 días. Te entregamos un cronograma exacto al iniciar." 
  },
  { 
    q: "¿Necesito pagar mensualidades?", 
    a: "No por el diseño. El pago del desarrollo es único. Solo deberás renovar el Hosting y Dominio una vez al año (el primer año te lo regalamos)." 
  },
  { 
    q: "¿Puedo actualizar la web yo mismo?", 
    a: "Totalmente. Te entregamos un panel de administración y un video tutorial para que puedas cambiar textos, fotos y productos sin depender de nosotros." 
  }
];

export const ContactPage = () => {
  // --- ESTADOS ---
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', project_type: 'Web Corporativa', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  
  // Estados de UI
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0); // El primero abierto por defecto
  const dropdownRef = useRef<HTMLDivElement>(null);

  // --- EFECTOS ---
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- HANDLERS ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('messages').insert([{ 
        name: formData.name, 
        email: formData.email, 
        project_type: formData.project_type, 
        message: `[Tel: ${formData.phone}] ${formData.message}` 
      }]);
      
      if (error) throw error;
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', project_type: 'Web Corporativa', message: '' });
    } catch (error) {
      console.error(error);
      setErrorMsg('Error de conexión. Inténtalo de nuevo.');
    } finally {
      if(status !== 'success') setStatus('idle'); // Solo resetea si falló, si fue success se queda en pantalla de éxito
    }
  };

  const selectedOption = projectOptions.find(opt => opt.id === formData.project_type) || projectOptions[0];

  return (
    <div className="w-full bg-slate-950 min-h-screen overflow-hidden selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Fondo Ambiental */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* --- HERO --- */}
      <section className="relative pt-32 pb-16 px-6 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
             <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>
             Respuesta en &lt; 24 horas
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Próximo Salto.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Analizamos tu caso y te proponemos una arquitectura ganadora.
          </p>
        </motion.div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* INFO COL (Left) */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-5 flex flex-col gap-6">
            <a href="https://wa.me/51997150226" target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-6 p-6 rounded-[2rem] bg-gradient-to-br from-[#25D366]/20 to-slate-900/50 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all cursor-pointer overflow-hidden">
              <div className="w-16 h-16 bg-[#25D366] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform z-10"><MessageCircle size={32} fill="white" /></div>
              <div className="z-10">
                <p className="text-[#4ade80] font-bold text-xs uppercase tracking-widest mb-1">WhatsApp Directo</p>
                <h3 className="text-2xl font-bold text-white">+51 997 150 226</h3>
                <div className="flex items-center gap-2 mt-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/><p className="text-slate-300 text-sm">Disponible ahora</p></div>
              </div>
            </a>

            <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-900/50 border border-slate-800">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-indigo-400 shadow-lg"><Mail size={24} /></div>
              <div><p className="text-slate-500 font-bold text-xs uppercase tracking-widest mb-1">Correo Electrónico</p><h3 className="text-lg font-bold text-white">angelhernan...</h3></div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900/30 border border-slate-800 backdrop-blur-sm space-y-6">
               <div className="flex gap-4"><MapPin className="text-purple-400" size={20} /><div><h4 className="text-white font-bold">Ubicación</h4><p className="text-slate-400 text-sm">Callao, Perú (Remoto Global)</p></div></div>
               <div className="flex gap-4"><Globe className="text-blue-400" size={20} /><div><h4 className="text-white font-bold">Zona Horaria</h4><p className="text-slate-400 text-sm">GMT-5 (Lima, Bogotá, NY)</p></div></div>
            </div>
          </motion.div>

          {/* FORM COL (Right) */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-7 h-full">
            <div className="h-full bg-slate-900/60 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
               <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
               
               {status === 'success' ? (
                 <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 min-h-[500px]">
                    <div className="w-24 h-24 bg-gradient-to-tr from-green-500 to-emerald-400 rounded-full flex items-center justify-center mb-6 text-white shadow-lg"><CheckCircle2 size={48} /></div>
                    <h3 className="text-3xl font-bold text-white mb-4">¡Enviado!</h3>
                    <p className="text-slate-300 max-w-md mx-auto mb-8">Hemos recibido tu solicitud correctamente.</p>
                    <button onClick={() => setStatus('idle')} className="px-8 py-3 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all border border-slate-700">Nuevo mensaje</button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div><h3 className="text-2xl font-bold text-white mb-2">Cuéntanos sobre tu proyecto</h3><p className="text-slate-400 text-sm">Completa los campos para recibir asesoría.</p></div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase ml-1">Nombre</label><input type="text" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} required disabled={status === 'submitting'} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-indigo-500 focus:bg-slate-950 transition-all outline-none" placeholder="Tu nombre" /></div>
                      <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase ml-1">Teléfono</label><input type="tel" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} disabled={status === 'submitting'} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-indigo-500 focus:bg-slate-950 transition-all outline-none" placeholder="+51..." /></div>
                    </div>

                    <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase ml-1">Email</label><input type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} required disabled={status === 'submitting'} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-indigo-500 focus:bg-slate-950 transition-all outline-none" placeholder="correo@empresa.com" /></div>

                    {/* SELECTOR OPTIMIZADO */}
                    <div className="space-y-2 relative" ref={dropdownRef}>
                      <label className="text-xs font-bold text-slate-500 uppercase ml-1">Servicio</label>
                      <div onClick={() => status !== 'submitting' && setIsDropdownOpen(!isDropdownOpen)} className={`w-full bg-slate-950/50 border ${isDropdownOpen ? 'border-indigo-500' : 'border-slate-800'} rounded-xl px-5 py-4 text-white flex justify-between items-center cursor-pointer transition-all`}>
                        <div className="flex items-center gap-3"><selectedOption.icon size={20} className="text-indigo-400" /><span className="font-medium">{selectedOption.label}</span></div>
                        <ChevronDown size={20} className={`text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </div>
                      <AnimatePresence>{isDropdownOpen && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute z-50 w-full mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden py-1">
                            {projectOptions.map((opt) => (
                              <div key={opt.id} onClick={() => { setFormData({...formData, project_type: opt.id}); setIsDropdownOpen(false); }} className={`px-5 py-3 flex items-center gap-3 cursor-pointer ${formData.project_type === opt.id ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`}>
                                <opt.icon size={18} /><span>{opt.label}</span>
                              </div>
                            ))}
                          </motion.div>
                      )}</AnimatePresence>
                    </div>

                    <div className="space-y-2"><label className="text-xs font-bold text-slate-500 uppercase ml-1">Detalles</label><textarea value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} rows={3} required disabled={status === 'submitting'} className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-5 py-4 text-white focus:border-indigo-500 focus:bg-slate-950 transition-all outline-none resize-none" placeholder="Breve descripción..." /></div>

                    {errorMsg && <div className="flex items-center gap-2 text-red-300 bg-red-900/30 p-3 rounded-lg text-sm border border-red-800"><AlertCircle size={18}/>{errorMsg}</div>}

                    <button type="submit" disabled={status === 'submitting'} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70">
                      {status === 'submitting' ? <><Loader2 className="animate-spin" size={20} /> Enviando...</> : <><Send size={20} /> Enviar Solicitud</>}
                    </button>
                 </form>
               )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FAQ SECTION (NUEVO DISEÑO ACORDEÓN) --- */}
      <section className="py-24 border-t border-slate-900 bg-slate-950/50">
         <div className="container mx-auto px-6 max-w-3xl">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
               <p className="text-slate-400">Todo lo que necesitas saber antes de empezar.</p>
             </div>
             
             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-indigo-500/30">
                    <button 
                      onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className={`font-bold text-lg ${openFaqIndex === idx ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                      {openFaqIndex === idx ? <Minus className="text-indigo-400" /> : <Plus className="text-slate-500" />}
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: "auto", opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>
         </div>
      </section>

    </div>
  );
};