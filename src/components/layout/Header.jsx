import { useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from 'react-i18next'; 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("global"); // <-- Iniciamos la traducción

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para cambiar el idioma
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Pequeña lógica para saber qué idioma está activo y pintar el botón
  const currentLang = i18n.language || 'es';

  return (
    <FadeIn direction="down" duration={0.75} className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="#top" className="logo">
                <img src="/assets/images/logo-saich.png" alt="Saich Edition Logo" />
              </a>
              
              <ul className="nav" style={{ display: isMenuOpen ? 'block' : '' }}>
                <li className="scroll-to-section"><a href="#top" className="active" onClick={toggleMenu}>{t("header.home")}</a></li>
                <li className="scroll-to-section"><a href="#about" onClick={toggleMenu}>{t("header.about")}</a></li>
                <li className="scroll-to-section"><a href="#services" onClick={toggleMenu}>{t("header.services")}</a></li>
                <li className="scroll-to-section"><a href="#portfolio" onClick={toggleMenu}>{t("header.portfolio")}</a></li>
                <li className="scroll-to-section"><a href="#blog" onClick={toggleMenu}>{t("header.blog")}</a></li>
                <li className="scroll-to-section"><a href="#contact" onClick={toggleMenu}>{t("header.contact")}</a></li> 
                <li className="scroll-to-section">
                  <div className="border-first-button"><a href="#contact" onClick={toggleMenu}>{t("header.quote")}</a></div>
                </li> 

                {/* Selector de idioma (Switch) */}
                <li className="d-flex align-items-center justify-content-center" style={{ paddingLeft: '15px' }}>
                  <button 
                    onClick={() => handleChangeLanguage('es')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: currentLang.startsWith('es') ? '#006B38' : '#aaa' }}
                  >
                    ES
                  </button>
                  <span style={{ color: '#ccc', margin: '0 5px' }}>|</span>
                  <button 
                    onClick={() => handleChangeLanguage('en')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: currentLang.startsWith('en') ? '#006B38' : '#aaa' }}
                  >
                    EN
                  </button>
                </li>
              </ul>        
              
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