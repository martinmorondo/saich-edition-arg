import { useState } from 'react';
import FadeIn from '../animations/FadeIn';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <FadeIn direction="down" duration={0.75} className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="#top" className="logo">
                <img src="/assets/images/logo-saich.png" alt="Saich Edition Logo" />
              </a>
              
              {/* Controlamos la visibilidad del menú en móviles con el estado de React */}
              <ul className="nav" style={{ display: isMenuOpen ? 'block' : '' }}>
                <li className="scroll-to-section"><a href="#top" className="active" onClick={toggleMenu}>Inicio</a></li>
                <li className="scroll-to-section"><a href="#about" onClick={toggleMenu}>Nosotros</a></li>
                <li className="scroll-to-section"><a href="#services" onClick={toggleMenu}>Servicios</a></li>
                <li className="scroll-to-section"><a href="#portfolio" onClick={toggleMenu}>Proyectos</a></li>
                <li className="scroll-to-section"><a href="#blog" onClick={toggleMenu}>Blog</a></li>
                <li className="scroll-to-section"><a href="#contact" onClick={toggleMenu}>Contacto</a></li> 
                <li className="scroll-to-section">
                  <div className="border-first-button"><a href="#contact" onClick={toggleMenu}>Cotización</a></div>
                </li> 
              </ul>        
              
              {/* Botón hamburguesa dinámico */}
              <a className={`menu-trigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}