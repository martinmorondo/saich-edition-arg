import React, { Suspense, lazy } from 'react';
import SEO from './components/seo/SEO'; 
import PreHeader from './components/layout/PreHeader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import Banner from './components/sections/Banner';

// Importamos de forma diferida las secciones que NO están en la primera pantalla 
const About = lazy(() => import('./components/sections/About'));
const Services = lazy(() => import('./components/sections/Services'));
const FreeQuote = lazy(() => import('./components/sections/FreeQuote'));
const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const Blog = lazy(() => import('./components/sections/Blog'));
const Contact = lazy(() => import('./components/sections/Contact'));

function App() {
  return (
    <>
      <SEO />
      
      <WhatsAppButton />
      <PreHeader />
      <Header />
      
      <main>
        {/* El Banner se carga inmediatamente porque es lo primero que ve el usuario */}
        <Banner />
        
        {/* Suspense envuelve los componentes perezosos. Muestra un "fallback" mientras se descargan */}
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Cargando sección...</div>}>
          <About />
          <Services />
          <FreeQuote />
          <Portfolio />
          <Blog />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;