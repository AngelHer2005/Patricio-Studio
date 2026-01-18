export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Patricio Studio</h3>
          <p>Desarrollo web estratégico para negocios modernos.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Patricio Studio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};