import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t, i18n } = useTranslation("global");

  // 1. Envolvemos el esquema en useMemo para que re-traduzca los errores al cambiar de idioma
  const contactSchema = useMemo(() => z.object({
    name: z.string().min(2, { message: t("contact.errors.name") }),
    email: z.string().email({ message: t("contact.errors.email") }),
    subject: z.string().optional(),
    message: z.string().min(10, { message: t("contact.errors.message") })
  }), [t, i18n.language]);

  // 2. Inicializamos React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  // 3. Función para enviar a Formspree
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
        reset(); 
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <section id="contact" className="contact-us section" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <FadeIn direction="down" delay={0.5} duration={1} className="section-heading">
              <h6>{t("contact.subtitle")}</h6>
              <h4>{t("contact.title_part1")} <em>{t("contact.title_highlight")}</em></h4>
              <div className="line-dec"></div>
            </FadeIn>
          </div>
          <div className="col-lg-12">
            <FadeIn direction="up" delay={0.25} duration={0.8}>
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
                              <a href="tel:+5492494589310">2494-589310</a>
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
                              <a href="#">{t("contact.info.location")}</a>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-lg-6">
                          <fieldset style={{ marginBottom: '15px' }}>
                            <input type="text" placeholder={t("contact.form.name")} autoComplete="name" {...register('name')} />
                            {errors.name && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.name.message}</small>}
                          </fieldset>
                          <fieldset style={{ marginBottom: '15px' }}>
                            <input type="email" placeholder={t("contact.form.email")} {...register('email')} />
                            {errors.email && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.email.message}</small>}
                          </fieldset>
                          <fieldset style={{ marginBottom: '15px' }}>
                            <input type="text" placeholder={t("contact.form.subject")} autoComplete="off" {...register('subject')} />
                          </fieldset>
                        </div>
                        
                        <div className="col-lg-6">
                          <fieldset style={{ marginBottom: '15px' }}>
                            <textarea className="form-control" placeholder={t("contact.form.message")} {...register('message')}></textarea>
                            {errors.message && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.message.message}</small>}
                          </fieldset>
                        </div>
                        
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="main-button" disabled={isSubmitting}>
                              {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
                            </button>
                          </fieldset>
                          
                          {isSubmitSuccessful && (
                            <div className="alert alert-success mt-4 text-center" role="alert">
                              {t("contact.form.success")}
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}