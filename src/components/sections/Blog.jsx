import FadeIn from '../animations/FadeIn';
import { useTranslation } from 'react-i18next';

// Configuración estática para el post principal
const featuredPostConfig = {
  link: 'blog-1.html',
  image: '/assets/images/domina-frontend-backend.jpg.jpg',
  authorImage: '/assets/images/1591219266046-modified - copia.jpg.png'
};

// Configuración estática para los posts secundarios
const secondaryPostsConfig = [
  {
    id: 'seo',
    link: 'blog-2.html',
    image: '/assets/images/seo.jpg'
  }
];

export default function Blog() {
  const { t } = useTranslation("global");

  return (
    <section id="blog" className="blog" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-4 offset-lg-4">
            <FadeIn direction="down" delay={0.3} duration={1} className="section-heading text-center">
              <h6>{t("blog.subtitle")}</h6>
              <h4>{t("blog.title_part1")} <em>{t("blog.title_highlight")}</em></h4>
              <div className="line-dec" style={{ margin: '0 auto' }}></div>
            </FadeIn>
          </div>

          {/* Post Principal Destacado */}
          <div className="col-lg-6 show-up">
            <FadeIn direction="up" delay={0.3} duration={1}>
              <div className="blog-post">
                <div className="thumb">
                  <a href={featuredPostConfig.link}>
                    <img src={featuredPostConfig.image} alt={t("blog.featured.category")} loading="lazy" />
                  </a>
                </div>
                <div className="down-content">
                  <span className="category">{t("blog.featured.category")}</span>
                  <span className="date">{t("blog.featured.date")}</span>
                  <a href={featuredPostConfig.link}>
                    <h4>{t("blog.featured.title")}</h4>
                  </a>
                  <p>{t("blog.featured.excerpt")}</p>
                  <span className="author">
                    <img src={featuredPostConfig.authorImage} alt="Autor" loading="lazy" />
                    {t("blog.featured.author")}
                  </span>
                  <div className="border-first-button">
                    <a href={featuredPostConfig.link} target="_blank" rel="noopener noreferrer">
                      {t("blog.featured.button")}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Lista de Posts Secundarios */}
          <div className="col-lg-6">
            <FadeIn direction="up" delay={0.3} duration={1}>
              <div className="blog-posts">
                <div className="row">
                  {secondaryPostsConfig.map((post) => (
                    <div className="col-lg-12" key={post.id}>
                      <div className="post-item">
                        <div className="thumb">
                          <img 
                            src={post.image} 
                            alt={t(`blog.posts.${post.id}.category`)} 
                            loading="lazy" 
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '23px' }} 
                          />
                        </div>
                        <div className="right-content">
                          <span className="category">{t(`blog.posts.${post.id}.category`)}</span>
                          <span className="date">{t(`blog.posts.${post.id}.date`)}</span>
                          <a href={post.link}>
                            <h4>{t(`blog.posts.${post.id}.title`)}</h4>
                          </a>
                          <p>{t(`blog.posts.${post.id}.excerpt`)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}