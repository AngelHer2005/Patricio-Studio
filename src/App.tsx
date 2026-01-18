import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/Services';
import { Portfolio } from './components/sections/Portfolio'; // O usa una página dedicada
import { Contact } from './components/sections/Contact';     // O usa una página dedicada

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<ServicesPage />} />
          
          {/* Reutilizando tus secciones anteriores como páginas por ahora */}
          <Route path="portafolio" element={<div className="pt-10"><Portfolio /></div>} />
          <Route path="contacto" element={<div className="pt-10"><Contact /></div>} />
          
          {/* Ruta 404 */}
          <Route path="*" element={<div className="text-white text-center py-40">Página no encontrada</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;