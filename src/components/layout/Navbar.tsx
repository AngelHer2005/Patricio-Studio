import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { navigation } from '../../data/Content';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-0'}`}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
          relative flex items-center justify-between px-6 transition-all duration-300
          ${scrolled 
            ? 'w-[90%] md:w-[85%] lg:w-[1200px] h-16 rounded-full bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'w-full h-24 bg-transparent border-transparent'
          }
        `}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className={`
            relative flex items-center justify-center rounded-xl transition-all duration-300
            ${scrolled ? 'w-10 h-10 bg-indigo-600' : 'w-12 h-12 bg-transparent'}
          `}>
            {/* Efecto de brillo detrás del logo */}
            <div className="absolute inset-0 bg-indigo-500 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
            <Code2 className={`${scrolled ? 'text-white' : 'text-indigo-400'} relative z-10 transition-colors`} size={scrolled ? 20 : 32} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold tracking-tight transition-all ${scrolled ? 'text-lg text-white' : 'text-2xl text-white'}`}>
              Patricio<span className="text-indigo-400">Studio</span>
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION (Center) */}
        <div className="hidden md:flex items-center gap-2 bg-slate-950/20 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 z-10
                  ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}
                `}
              >
                {/* Fondo animado al hacer hover (El efecto "Mágico") */}
                {hoveredPath === item.href && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                {/* Indicador de activo */}
                {isActive && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-400 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                )}
                
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON (Right) */}
        <div className="hidden md:flex items-center z-50">
          <Link
            to="/contacto"
            className={`
              relative group overflow-hidden rounded-full font-semibold transition-all duration-300
              ${scrolled ? 'px-5 py-2 text-sm' : 'px-8 py-3 text-base'}
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-xy" />
            <div className="absolute inset-[1px] bg-slate-950 rounded-full transition-opacity group-hover:opacity-90" />
            <div className="relative flex items-center gap-2 text-white">
              <Sparkles size={16} className="text-yellow-300" />
              <span>Cotizar</span>
            </div>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden relative z-50 p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 left-0 bg-slate-950 z-40 flex flex-col pt-32 px-6 overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col gap-6">
              {navigation.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-bold tracking-tight ${
                      location.pathname === item.href ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400' : 'text-slate-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link 
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-white text-slate-950 py-4 rounded-xl font-bold text-center block text-lg"
                >
                  Empezar Proyecto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};