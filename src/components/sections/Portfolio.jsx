import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Portfolio() {
  return (
    <section id="portfolio" className="our-portfolio section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
              <h6>Nuestro portfolio</h6>
              <h4><em>Proyectos</em> más recientes</h4>
              <div className="line-dec"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid wow fadeIn" data-wow-duration="1s" data-wow-delay="0.7s">
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
              <SwiperSlide>
                <a href="https://vikingas-sportbar.com/inicio" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item">
                    <div className="thumb">
                      <img src="/assets/images/restaurant-interior.jpg" alt="Vikingas Restaurante" />
                    </div>
                    <div className="down-content">
                      <h4>Vikingas Restaurante</h4>
                      <span>Marketing y página web</span>
                    </div>
                  </div>
                </a>  
              </SwiperSlide>

              <SwiperSlide>
                <a href="https://martinmorondoportfoli0.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item">
                    <div className="thumb">
                      <img src="/assets/images/portfolio-personal.png" alt="Portfolio Martín Morondo" />
                    </div>
                    <div className="down-content">
                      <h4>Portfolio Martín Morondo</h4>
                      <span>Página web</span>
                    </div>
                  </div>
                </a>  
              </SwiperSlide>

              <SwiperSlide>
                <a href="https://para-variar-diario.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="portfolio-item">
                    <div className="thumb">
                      <img src="/assets/images/diario-online.jpg" alt="Diario Online Para Variar" />
                    </div>
                    <div className="down-content">
                      <h4>Diario Online "Para Variar"</h4>
                      <span>Página web</span>
                    </div>
                  </div>
                </a>  
              </SwiperSlide>
              

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}