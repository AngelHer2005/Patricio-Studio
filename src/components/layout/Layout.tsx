import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  const { pathname } = useLocation();

  // Hace que al cambiar de página, el scroll vuelva arriba automáticamente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 flex flex-col">
      {/* Fondo Global Tecnológico */}
      <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none" />
      
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Aquí se renderizarán las páginas (Home, Servicios, etc.) */}
      <main className="flex-grow z-10 relative pt-20">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};