import FadeIn from '../animations/FadeIn';

export default function Banner() {
  return (
    <section className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <FadeIn direction="left" delay={1} duration={1} className="left-content show-up header-text">
                  <div className="row">
                    <div className="col-lg-12">
                      <h6>Saich Edition Argentina</h6>
                      <h1>Impulsamos tu Marca en el Mundo Digital</h1>
                      <p>En Saich Edition Argentina transformamos tus ideas en una poderosa presencia digital. Ofrecemos servicios de desarrollo de páginas web, tiendas en línea, diseño de logos, flyers, creación de videos y paquetes completos para redes sociales. Haz crecer tu marca con una estrategia digital personalizada y profesional.</p>
                    </div>
                    <div className="col-lg-12">
                      <div className="border-first-button scroll-to-section">
                        <a href="#contact">Pide una cotización</a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="col-lg-6">
                <FadeIn direction="right" delay={0.5} duration={1} className="right-image">
                  <img src="/assets/images/logo-saich.png" alt="Presencia digital Saich Edition" />
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}