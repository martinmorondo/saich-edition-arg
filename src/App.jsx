import React from 'react';
import PreHeader from './components/layout/PreHeader';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

// Secciones
import Banner from './components/sections/Banner';
import About from './components/sections/About';
import Services from './components/sections/Services';
import FreeQuote from './components/sections/FreeQuote';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <WhatsAppButton />
      <PreHeader />
      <Header />
      
      <main>
        <Banner />
        <About />
        <Services />
        <FreeQuote />
        <Portfolio />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;