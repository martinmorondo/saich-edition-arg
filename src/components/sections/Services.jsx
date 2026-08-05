import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from 'react-i18next';

// 1. Mantenemos SOLO la estructura estática (IDs y rutas de imágenes)
const servicesConfig = [
  { id: 'social', icon: '/assets/images/service-icon-01.png', image: '/assets/images/services-image.jpg' },
  { id: 'multimedia', icon: '/assets/images/service-icon-02.png', image: '/assets/images/services-image-02.jpg' },
  { id: 'web', icon: '/assets/images/service-icon-03.png', image: '/assets/images/services-image-03.jpg' },
  { id: 'ads', icon: '/assets/images/service-icon-04.png', image: '/assets/images/services-image-04.jpg' },
  { id: 'strategy', icon: '/assets/images/service-icon-01.png', image: '/assets/images/services-image.jpg' }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(servicesConfig[0].id);
  const { t } = useTranslation("global");

  const activeServiceConfig = servicesConfig.find(service => service.id === activeTab);
  
  // Extraemos el array de "ticks" directamente desde el JSON usando returnObjects
  const activeTicks = t(`services.items.${activeTab}.ticks`, { returnObjects: true });

  return (
    <section id="services" className="services section" style={{ paddingTop: '100px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <FadeIn direction="down" duration={0.8} className="section-heading text-center mb-5">
              <h6 style={{ color: '#006B38', fontWeight: '700', textTransform: 'uppercase' }}>{t("services.subtitle")}</h6>
              <h4 style={{ fontWeight: '800', color: '#2a2a2a' }}>{t("services.title_part1")} <em>{t("services.title_highlight")}</em></h4>
              <div className="line-dec" style={{ margin: '15px auto', backgroundColor: '#006B38', width: '50px', height: '4px', borderRadius: '2px' }}></div>
            </FadeIn>
          </div>

          <div className="col-lg-12">
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                {servicesConfig.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`btn rounded-pill px-4 py-2 fw-bold transition-all ${activeTab === service.id ? 'text-white shadow-sm' : 'bg-white text-dark border'}`}
                    style={{ 
                      backgroundColor: activeTab === service.id ? '#006B38' : '#ffffff',
                      border: activeTab === service.id ? 'none' : '1px solid #dee2e6',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <img src={service.icon} alt="" style={{ width: '20px', marginRight: '8px', filter: activeTab === service.id ? 'brightness(0) invert(1)' : 'none' }} />
                    {/* Buscamos el título del botón dinámicamente según el ID */}
                    {t(`services.items.${service.id}.navTitle`)}
                  </button>
                ))}
              </div>
            </FadeIn>

            <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm" style={{ minHeight: '400px', overflow: 'hidden' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ width: '100%' }}
                >
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      {/* Extraemos Título y Descripción dinámicamente según el ID activo */}
                      <h4 style={{ fontWeight: '700', color: '#2a2a2a', marginBottom: '20px' }}>
                        {t(`services.items.${activeTab}.title`)}
                      </h4>
                      <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '30px' }}>
                        {t(`services.items.${activeTab}.description`)}
                      </p>
                      
                      <div className="row">
                        {/* Iteramos sobre el array de traducciones que extrajimos arriba */}
                        {Array.isArray(activeTicks) && activeTicks.map((tick, index) => (
                          <div className="col-md-6 mb-2" key={index}>
                            <span style={{ color: '#444', fontSize: '0.95rem' }}>
                              <i className="fa fa-check-circle me-2" style={{ color: '#006B38' }}></i> 
                              {tick}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-lg-6 text-center">
                      <img 
                        src={activeServiceConfig.image} 
                        alt={t(`services.items.${activeTab}.title`)} 
                        loading="lazy" 
                        className="img-fluid rounded-4 shadow-sm"
                        style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}