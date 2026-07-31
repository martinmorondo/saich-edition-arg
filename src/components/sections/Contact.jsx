import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Definimos las reglas de validación con Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'Ingresa un email válido' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
});

export default function Contact() {
  // 2. Inicializamos React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  // 3. Función para enviar a Formspree sin recargar la página
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/mbljovor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        reset(); // Limpia los campos si fue exitoso
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <section id="contact" className="contact-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
              <h6>Contacto</h6>
              <h4>Siga en contacto con <em>nosotros</em></h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
            {/* 4. Conectamos el handleSubmit de RHF */}
            <form id="contact" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-dec">
                    <img src="/assets/images/contact-dec.png" alt="Contacto" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="fill-form">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="/assets/images/phone-icon.png" alt="Teléfono" />
                            <a href="tel:+5492494672951">2494-672951</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="/assets/images/email-icon.png" alt="Email" />
                            <a href="mailto:martinmorondo@gmail.com">martinmorondo@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="info-post">
                          <div className="icon">
                            <img src="/assets/images/location-icon.png" alt="Ubicación" />
                            <a href="#">México - Argentina</a>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-lg-6">
                        {/* 5. Registramos los inputs y mostramos errores */}
                        <fieldset style={{ marginBottom: '15px' }}>
                          <input type="text" placeholder="Nombre" autoComplete="name" {...register('name')} />
                          {errors.name && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.name.message}</small>}
                        </fieldset>
                        <fieldset style={{ marginBottom: '15px' }}>
                          <input type="email" placeholder="Email" {...register('email')} />
                          {errors.email && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.email.message}</small>}
                        </fieldset>
                        <fieldset style={{ marginBottom: '15px' }}>
                          <input type="text" placeholder="Asunto" autoComplete="off" {...register('subject')} />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset style={{ marginBottom: '15px' }}>
                          <textarea className="form-control" placeholder="Mensaje" {...register('message')}></textarea>
                          {errors.message && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.message.message}</small>}
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          {/* 6. Deshabilitamos el botón mientras se envía y damos feedback */}
                          <button type="submit" id="form-submit" className="main-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                          </button>
                        </fieldset>
                        
                        {/* 7. Mensaje de éxito post-envío */}
                        {isSubmitSuccessful && (
                          <div className="alert alert-success mt-4 text-center" role="alert">
                            ¡Mensaje enviado con éxito! Nos pondremos en contacto a la brevedad.
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}