export default function WhatsAppButton() {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=5492494672951&text=%20Hola,%20sean%20bienvenidos!" 
      className="float" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Contactar por WhatsApp"
    >
      <i className="fa fa-whatsapp my-float" aria-hidden="true"></i>
    </a>
  );
}