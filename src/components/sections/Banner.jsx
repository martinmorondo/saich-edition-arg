import FadeIn from '../animations/FadeIn';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; 

export default function Banner() {
  const { t } = useTranslation("global"); // <--  Iniciamos la traducción

  return (
    <section className="main-banner" id="top" style={{ paddingTop: '150px', paddingBottom: '80px', overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row align-items-center">

              <div className="col-lg-6">
                <FadeIn direction="up" delay={0.2} duration={1}>
                  <h6 style={{ color: '#006B38', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>
                    {t("banner.subtitle")} {/* <-- Aplicamos traducción */}
                  </h6>
                  <h1 style={{ fontWeight: '800', fontSize: '3.2rem', lineHeight: '1.2', color: '#2a2a2a', marginBottom: '20px' }}>
                    {t("banner.title_part1")} <span style={{ color: '#006B38' }}>{t("banner.title_highlight")}</span>
                  </h1>
                  <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '40px' }}>
                    {t("banner.description")}
                  </p>

                  <div className="d-flex flex-wrap" style={{ gap: '15px' }}>
                    <a href="#contact" className="btn text-white px-4 py-3 rounded-pill" style={{ backgroundColor: '#006B38', fontWeight: '600', transition: 'all 0.3s' }}>
                      {t("banner.btn_primary")}
                    </a>
                    <a href="#portfolio" className="btn px-4 py-3 rounded-pill" style={{ color: '#006B38', border: '2px solid #006B38', backgroundColor: 'transparent', fontWeight: '600', transition: 'all 0.3s' }}>
                      {t("banner.btn_secondary")}
                    </a>
                  </div>
                </FadeIn>
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0 text-center">
                <FadeIn direction="up" delay={0.5} duration={1}>
                  <motion.img 
                    src="/assets/images/logo-saich.png" 
                    alt="Mockup de desarrollo web y diseño" 
                    style={{ width: '100%', maxWidth: '550px', filter: 'drop-shadow(0px 20px 30px rgba(0,0,0,0.15))' }}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </FadeIn>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}