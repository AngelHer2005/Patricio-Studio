import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Loading Component (Spinner simple mientras carga la página)
const PageLoader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-slate-950">
    <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Lazy Loading: Solo carga el código cuando se necesita
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ServicesPage = lazy(() => import('./pages/Services').then(module => ({ default: module.ServicesPage })));
const PortfolioPage = lazy(() => import('./pages/Portfolio').then(module => ({ default: module.PortfolioPage })));
const ContactPage = lazy(() => import('./pages/Contact').then(module => ({ default: module.ContactPage })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="portafolio" element={<PortfolioPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="*" element={<div className="h-[50vh] flex items-center justify-center text-xl text-slate-500">404 | Página no encontrada</div>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;