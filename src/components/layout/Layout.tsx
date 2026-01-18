import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col">
      {/* Fondo Global (Grid) */}
      <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-40" />
      
      {/* Navbar Fixed */}
      <Navbar />

      {/* IMPORTANTE: Quitamos 'pt-20' aquí. 
         Ahora cada página debe gestionar su propio padding superior.
         Esto permite que el Hero tenga el fondo detrás del navbar.
      */}
      <main className="flex-grow z-10 relative w-full">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};