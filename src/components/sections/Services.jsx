import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

// 1. Extraemos los datos para mantener el componente limpio y escalable
const servicesData = [
  {
    id: 'social',
    title: 'Gestión de Redes Sociales',
    navTitle: 'Redes Sociales',
    icon: '/assets/images/service-icon-01.png',
    image: '/assets/images/services-image.jpg',
    description: 'Desarrollamos estrategias personalizadas para tu marca en redes sociales, creando contenido relevante que conecta con tu audiencia y mejora el alcance e interacción.',
    ticks: ['Contenido atractivo', 'Publicaciones programadas', 'Análisis de métricas']
  },
  {
    id: 'multimedia',
    title: 'Creación de Contenidos Multimedia',
    navTitle: 'Contenido Multimedia',
    icon: '/assets/images/service-icon-02.png',
    image: '/assets/images/services-image-02.jpg',
    description: 'Desarrollamos material audiovisual de alta calidad, incluyendo videos, fotografías y gráficos que reflejan la esencia de tu marca y captan la atención de tu público.',
    ticks: ['Vídeos profesionales', 'Imágenes creativas', 'Diseño de infografías', 'Contenidos interactivos', 'Edición avanzada']
  },
  {
    id: 'web',
    title: 'Diseño y Desarrollo Web',
    navTitle: 'Desarrollo Web',
    icon: '/assets/images/service-icon-03.png',
    image: '/assets/images/services-image-03.jpg',
    description: 'Diseñamos y desarrollamos sitios web personalizados que se adaptan a las necesidades de tu negocio, brindando una experiencia de usuario atractiva y funcional.',
    ticks: ['Diseño responsivo', 'Optimización SEO', 'Integración e-commerce', 'Desarrollo personalizado', 'Soporte continuo']
  },
  {
    id: 'ads',
    title: 'Campañas Publicitarias',
    navTitle: 'Publicidad',
    icon: '/assets/images/service-icon-04.png',
    image: '/assets/images/services-image-04.jpg',
    description: 'Creación y gestión de campañas publicitarias en redes sociales y Google Ads, dirigidas a incrementar el alcance y atraer clientes potenciales a tu negocio.',
    ticks: ['Publicidad segmentada', 'Análisis de resultados', 'Campañas creativas', 'Optimización de conversiones', 'Marketing en redes', 'Estrategias personalizadas']
  },
  {
    id: 'strategy',
    title: 'Asesoría y Estrategia Digital',
    navTitle: 'Estrategia Digital',
    icon: '/assets/images/service-icon-01.png',
    image: '/assets/images/services-image.jpg',
    description: 'Ofrecemos asesoría personalizada y estrategias digitales para que tu negocio se destaque en el mercado, mejorando su presencia y alcanzando sus objetivos.',
    ticks: ['Consultoría en marketing', 'Gestión de proyectos', 'Optimización de procesos', 'Análisis de mercado', 'Transformación digital']
  }
];

export default function Services() {
  // 2. Estado para controlar la pestaña activa (iniciamos con el primer servicio)
  const [activeTab, setActiveTab] = useState(servicesData[0].id);

  // Encontramos la data del servicio activo
  const activeService = servicesData.find(service => service.id === activeTab);

  return (
    <section id="services" className="services section" style={{ paddingTop: '100px', paddingBottom: '80px', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <FadeIn direction="down" duration={0.8} className="section-heading text-center mb-5">
              <h6 style={{ color: '#006B38', fontWeight: '700', textTransform: 'uppercase' }}>Nuestros servicios</h6>
              <h4 style={{ fontWeight: '800', color: '#2a2a2a' }}>Lo que <em>ofrecemos</em></h4>
              <div className="line-dec" style={{ margin: '15px auto', backgroundColor: '#006B38', width: '50px', height: '4px', borderRadius: '2px' }}></div>
            </FadeIn>
          </div>

          <div className="col-lg-12">
            {/* 3. Navegación de Pestañas (Tabs) */}
            <FadeIn direction="up" delay={0.2} duration={0.8}>
              <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                {servicesData.map((service) => (
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
                    {service.navTitle}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* 4. Contenido Dinámico Animado */}
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
                      <h4 style={{ fontWeight: '700', color: '#2a2a2a', marginBottom: '20px' }}>{activeService.title}</h4>
                      <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '30px' }}>{activeService.description}</p>
                      
                      <div className="row">
                        {activeService.ticks.map((tick, index) => (
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
                        src={activeService.image} 
                        alt={activeService.title} 
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