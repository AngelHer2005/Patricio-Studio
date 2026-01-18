import { Hero } from '../components/sections/Hero';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Sección "Resumen" exclusiva del Home */}
      <section className="py-20 border-t border-slate-900 bg-slate-950/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-indigo-400 font-medium mb-4">¿Por qué elegirnos?</p>
          <h2 className="text-3xl font-bold text-white mb-12">No es solo código, es estrategia</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Entrega en tiempo récord",
              "Optimización SEO nativa",
              "Soporte Post-Lanzamiento"
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-slate-300 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
                <CheckCircle2 className="text-indigo-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};