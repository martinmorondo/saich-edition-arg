import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Saich Edition Argentina - Soluciones Digitales", 
  description = "Impulsamos tu Marca en el Mundo Digital. Desarrollo web, diseño gráfico y marketing para empresas.",
  name = "Saich Edition Argentina",
  type = "website",
  // Idealmente, esta imagen debe tener una proporción de 1200x630 píxeles para redes sociales
  image = "https://saich-edition-arg.vercel.app/assets/images/logo-saich.png", 
  url = "https://saich-edition-arg.vercel.app/"
}) {
  return (
    <Helmet>
      {/* Etiquetas Estándar */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Etiquetas Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />

      {/* Etiquetas Twitter (X) */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}