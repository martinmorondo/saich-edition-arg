export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4 wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="section-heading">
              <h6>Nuestro blog</h6>
              <h4>Visita nuestros <em>posts</em></h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-6 show-up wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="blog-post">
              <div className="thumb">
                <a href="blog-1.html"><img src="/assets/images/domina-frontend-backend.jpg.jpg" alt="Blog frontend" /></a>
              </div>
              <div className="down-content">
                <span className="category">Desarrollo web</span>
                <span className="date">08 Noviembre 2026</span>
                <a href="blog-1.html"><h4>La Importancia del Diseño y Desarrollo Web</h4></a>
                <p>En la era digital, contar con una página web optimizada y atractiva es crucial...</p>
                <span className="author"><img src="/assets/images/1591219266046-modified - copia.jpg.png" alt="Martín Morondo" />By: Martín Morondo</span>
                <div className="border-first-button"><a href="blog-1.html" target="_blank" rel="noopener noreferrer">Descubra más</a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
            <div className="blog-posts">
              <div className="row">
                <div className="col-lg-12">
                  <div className="post-item">
                    <div className="thumb">
                      <img src="/assets/images/seo.jpg" alt="SEO" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '23px' }} />
                    </div>
                    <div className="right-content">
                      <span className="category">SEO</span>
                      <span className="date">08 Noviembre 2026</span>
                      <a href="blog-2.html"><h4>Análisis SEO: Clave para el Crecimiento</h4></a>
                      <p>En un entorno digital que se encuentra en constante evolución...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}