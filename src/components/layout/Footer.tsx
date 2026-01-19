import { Code2, Github, Linkedin, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Code2 className="text-white" size={18} />
              </div>
              <span className="text-xl font-bold text-white">PatricioStudio</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              Desarrollo web estratégico desde Callao, Perú para el mundo. Potenciamos negocios con tecnología de ingeniería.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/servicios" className="hover:text-indigo-400 transition-colors">Páginas Web</Link></li>
              <li><Link to="/servicios" className="hover:text-indigo-400 transition-colors">Tiendas Virtuales</Link></li>
              <li><Link to="/servicios" className="hover:text-indigo-400 transition-colors">Sistemas Web</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Política de Privacidad</a></li>
              <li>
                  <a href="#" className="flex items-center gap-2 border border-slate-700 rounded px-3 py-2 hover:border-white transition-colors">
                     <BookOpen size={16}/> Libro de Reclamaciones
                  </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Patricio Studio S.A.C. Todos los derechos reservados.</p>
          <p>Callao, Perú</p>
        </div>
      </div>
    </footer>
  );
};