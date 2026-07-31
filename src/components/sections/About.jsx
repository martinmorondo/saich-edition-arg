import FadeIn from '../animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <FadeIn direction="left" delay={0.5} duration={1} className="about-left-image">
                  <img src="/assets/images/about-dec.png" alt="Sobre nosotros" loading="lazy"/>
                </FadeIn>
              </div>
              <div className="col-lg-6 align-self-center">
                <FadeIn direction="right" delay={0.5} duration={1} className="about-right-content">
                  <div className="section-heading">
                    <h6>Sobre nosotros</h6>
                    <h4>¿Quiénes somos en <em>Saich Edition Argentina</em>?</h4>
                    <div className="line-dec"></div>
                  </div>
                  <p>En Saich Edition Argentina, transformamos ideas en experiencias digitales memorables. Nos especializamos en desarrollo de páginas web personalizadas, diseño de identidad visual y estrategias de marketing para hacer brillar a pequeñas empresas y grandes marcas en el mundo digital.</p>
                  
                  <div className="row">
                    <div className="col-lg-4 col-sm-4">
                      {/* Efecto en cascada ajustando el delay progresivamente */}
                      <FadeIn direction="up" delay={0} duration={1} className="skill-item first-skill-item">
                        <div className="progress" data-percentage="90">
                          <span className="progress-left"><span className="progress-bar"></span></span>
                          <span className="progress-right"><span className="progress-bar"></span></span>
                          <div className="progress-value">
                            <div>90%<br /><span>Desarrollo web</span></div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <FadeIn direction="up" delay={0.2} duration={1} className="skill-item second-skill-item">
                        <div className="progress" data-percentage="80">
                          <span className="progress-left"><span className="progress-bar"></span></span>
                          <span className="progress-right"><span className="progress-bar"></span></span>
                          <div className="progress-value">
                            <div>80%<br /><span>Diseño gráfico</span></div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                    <div className="col-lg-4 col-sm-4">
                      <FadeIn direction="up" delay={0.4} duration={1} className="skill-item third-skill-item">
                        <div className="progress" data-percentage="80">
                          <span className="progress-left"><span className="progress-bar"></span></span>
                          <span className="progress-right"><span className="progress-bar"></span></span>
                          <div className="progress-value">
                            <div>80%<br /><span>Animación</span></div>
                          </div>
                        </div>
                      </FadeIn>
                    </div>
                  </div> 
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}