import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      
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
              Desarrollamos el futuro digital. Especialistas en React, arquitectura de software y experiencias de usuario de clase mundial.
            </p>
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Desarrollo Web</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Aplicaciones Móviles</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Consultoría Cloud</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Auditoría SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Patricio Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};