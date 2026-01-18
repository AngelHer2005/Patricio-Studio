import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importante
import { Menu, X, Code } from 'lucide-react';

const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Portafolio', path: '/portafolio' },
  { name: 'Contacto', path: '/contacto' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white tracking-tight">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Code className="text-white" size={20} />
          </div>
          <span>Patricio<span className="text-indigo-400">Studio</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                location.pathname === link.path ? 'text-white' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacto" className="bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-indigo-50 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Cotizar Proyecto
          </Link>
        </div>

        {/* Mobile Toggle (simplificado) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu logic... (puedes mantener la lógica anterior adaptada con Link) */}
    </nav>
  );
};