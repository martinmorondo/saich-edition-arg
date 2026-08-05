import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FadeIn from '../animations/FadeIn'; 
import { useTranslation } from 'react-i18next'; 

// Separamos la configuración estática de los proyectos
const portfolioProjects = [
  {
    id: 'vikingas',
    link: 'https://vikingas-sportbar.com/inicio',
    image: '/assets/images/restaurant-interior.jpg',
  },
  {
    id: 'portfolio',
    link: 'https://martinmorondoportfoli0.netlify.app/',
    image: '/assets/images/portfolio-personal.png',
  },
  {
    id: 'diario',
    link: 'https://para-variar-diario.vercel.app/',
    image: '/assets/images/diario-online.jpg',
  }
];

export default function Portfolio() {
  const { t } = useTranslation("global");

  return (
    <section id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <FadeIn direction="left" delay={0.3} duration={1} className="section-heading">
              <h6>{t("portfolio.subtitle")}</h6>
              <h4><em>{t("portfolio.title_highlight")}</em>{t("portfolio.title_part2")}</h4>
              <div className="line-dec"></div>
            </FadeIn>
          </div>
        </div>
      </div>
      
      <FadeIn direction="up" delay={0.5} duration={1} className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {/* Iteramos sobre el arreglo de proyectos */}
              {portfolioProjects.map((project) => (
                <SwiperSlide key={project.id}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="portfolio-item">
                      <div className="thumb">
                        <img 
                          src={project.image} 
                          alt={t(`portfolio.projects.${project.id}.title`)} 
                          loading="lazy" 
                        />
                      </div>
                      <div className="down-content">
                        <h4>{t(`portfolio.projects.${project.id}.title`)}</h4>
                        <span>{t(`portfolio.projects.${project.id}.category`)}</span>
                      </div>
                    </div>
                  </a>  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}