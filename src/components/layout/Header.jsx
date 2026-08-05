import { useState } from 'react';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation("global");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

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
                
                {/* Botón de Cotización */}
                <li className="scroll-to-section" style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                  <a 
                    href="#contact" 
                    onClick={toggleMenu}
                    style={{
                      border: '2px solid #006B38',
                      color: '#006B38',
                      borderRadius: '50px',
                      padding: '8px 24px',
                      fontWeight: '600',
                      lineHeight: '1',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#006B38';
                      e.currentTarget.style.setProperty('color', '#ffffff', 'important');
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.setProperty('color', '#006B38', 'important');
                    }}
                  >
                    {t("header.quote")}
                  </a>
                </li> 

                {/* Selector de idioma */}
                <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '20px' }}>
                  <button 
                    onClick={() => handleChangeLanguage('es')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: currentLang.startsWith('es') ? '#006B38' : '#aaa', padding: 0 }}
                  >
                    ES
                  </button>
                  <span style={{ color: '#ccc', margin: '0 8px', lineHeight: '1' }}>|</span>
                  <button 
                    onClick={() => handleChangeLanguage('en')}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold', color: currentLang.startsWith('en') ? '#006B38' : '#aaa', padding: 0 }}
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