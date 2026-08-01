import FadeIn from '../animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="about section" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6">
            <FadeIn direction="left" delay={0.2} duration={1} className="about-left-image">
              <img 
                src="/assets/images/about-dec.png" 
                alt="Infraestructura tecnológica Saich Edition" 
                style={{ width: '100%', borderRadius: '20px', filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.08))' }}
              />
            </FadeIn>
          </div>

          <div className="col-lg-6">
            <FadeIn direction="right" delay={0.4} duration={1} className="about-right-content">
              <div className="section-heading mb-4">
                <h6 style={{ color: '#006B38', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Sobre la Agencia
                </h6>
                <h4 style={{ fontWeight: '800', fontSize: '2.5rem', color: '#2a2a2a', marginTop: '10px' }}>
                  Innovación Digital en <em>Saich Edition</em>
                </h4>
                <div className="line-dec" style={{ backgroundColor: '#006B38', width: '50px', height: '4px', marginTop: '15px', borderRadius: '2px' }}></div>
              </div>
              
              <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
                En Saich Edition Argentina, transformamos ideas en plataformas digitales de alto rendimiento. Nos alejamos de las plantillas genéricas para construir arquitecturas sólidas, identidades visuales que impactan y estrategias orientadas a la conversión de tu negocio.
              </p>

              {/* El Stack Tecnológico de la Agencia */}
              <div className="tech-stack mb-4">
                <h5 style={{ fontSize: '1rem', fontWeight: '700', color: '#2a2a2a', marginBottom: '15px' }}>Tecnologías que dominamos:</h5>
                <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express', 'Python'].map((tech) => (
                    <span 
                      key={tech} 
                      className="badge bg-white text-dark" 
                      style={{ border: '1px solid #e0e0e0', padding: '8px 15px', fontSize: '0.9rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tarjetas de Valor (Reemplazo de los porcentajes) */}
              <div className="row mt-4">
                <div className="col-md-6 mb-3">
                  <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #006B38', transition: 'transform 0.3s' }}>
                    <h6 style={{ fontWeight: '700', color: '#2a2a2a', marginBottom: '5px' }}>Desarrollo Escalable</h6>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: '#666', lineHeight: '1.4' }}>Código limpio y optimizado para crecer junto a tu empresa.</p>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="p-3 h-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', borderLeft: '4px solid #006B38', transition: 'transform 0.3s' }}>
                    <h6 style={{ fontWeight: '700', color: '#2a2a2a', marginBottom: '5px' }}>Diseño Integral</h6>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: '#666', lineHeight: '1.4' }}>UX/UI y branding pensados para retener y convertir usuarios.</p>
                  </div>
                </div>
              </div> 

            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}