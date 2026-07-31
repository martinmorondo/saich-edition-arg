import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// 1. Esquema de validación más sencillo
const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Mínimo 2 caracteres' }),
  email: z.string().email({ message: 'Email inválido' })
});

export default function FreeQuote() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data) => {
    try {
      // Endpoint específico para este formulario
      const response = await fetch("https://formspree.io/f/mpzvnvpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        reset();
      }
    } catch (error) {
      console.error("Error al enviar la cotización", error);
    }
  };

  return (
    <section id="free-quote" className="free-quote">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <div className="section-heading wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
              <h6>Obtén tu cotización gratuita</h6>
              <h4>Crezcamos juntos ahora</h4>
              <div className="line-dec"></div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
            <form id="search" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <fieldset>
                    <input 
                      type="text" 
                      className="website" 
                      placeholder="Nombre completo" 
                      autoComplete="name" 
                      {...register('name')} 
                    />
                    {errors.name && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.name.message}</small>}
                  </fieldset>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <fieldset>
                    <input 
                      type="email" 
                      className="email" 
                      placeholder="Email" 
                      autoComplete="email" 
                      {...register('email')} 
                    />
                    {errors.email && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.email.message}</small>}
                  </fieldset>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <fieldset>
                    <button type="submit" className="main-button" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Obtenga su cotización'}
                    </button>
                  </fieldset>
                </div>
                
                {/* Mensaje de éxito centrado debajo de toda la fila */}
                {isSubmitSuccessful && (
                  <div className="col-lg-12">
                    <div className="alert alert-success mt-4 text-center" role="alert">
                      ¡Cotización solicitada con éxito! Te responderemos pronto.
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}