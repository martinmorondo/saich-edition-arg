import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import FadeIn from '../animations/FadeIn';
import { useTranslation } from 'react-i18next';

export default function FreeQuote() {
  const { t, i18n } = useTranslation("global");

  // 1. Envolvemos el esquema en useMemo para traducir los errores dinámicamente
  const quoteSchema = useMemo(() => z.object({
    name: z.string().min(2, { message: t("freeQuote.errors.name") }),
    email: z.string().email({ message: t("freeQuote.errors.email") })
  }), [t, i18n.language]);

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
    <section id="free-quote" className="free-quote" style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-lg-4">
            <FadeIn direction="down" delay={0.3} duration={1} className="section-heading text-center">
              <h6>{t("freeQuote.subtitle")}</h6>
              <h4>{t("freeQuote.title")}</h4>
              <div className="line-dec" style={{ margin: '0 auto' }}></div>
            </FadeIn>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <FadeIn direction="up" delay={0.5} duration={1}>
              <form id="search" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <input 
                        type="text" 
                        className="website" 
                        placeholder={t("freeQuote.form.name")} 
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
                        placeholder={t("freeQuote.form.email")} 
                        autoComplete="email" 
                        {...register('email')} 
                      />
                      {errors.email && <small className="text-danger" style={{ display: 'block', marginTop: '5px' }}>{errors.email.message}</small>}
                    </fieldset>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    <fieldset>
                      <button type="submit" className="main-button" disabled={isSubmitting}>
                        {isSubmitting ? t("freeQuote.form.submitting") : t("freeQuote.form.submit")}
                      </button>
                    </fieldset>
                  </div>
                  
                  {isSubmitSuccessful && (
                    <div className="col-lg-12">
                      <div className="alert alert-success mt-4 text-center" role="alert">
                        {t("freeQuote.form.success")}
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}