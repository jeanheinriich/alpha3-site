import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ui/ContactForm";

const WA_URL =
  "https://wa.me/5511XXXXXXXXXXX?text=Olá%2C+vim+pelo+site+e+quero+um+orçamento";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-stone py-section"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
            Entre em contato
          </p>
          <h2
            id="contact-heading"
            className="font-display font-900 text-display-lg text-ink leading-none"
          >
            VAMOS<br />
            <span className="text-brass">CONVERSAR</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado esquerdo — Formulário */}
          <AnimatedSection>
            <ContactForm />
          </AnimatedSection>

          {/* Lado direito — Informações */}
          <AnimatedSection delay={200} className="space-y-8">
            {/* WhatsApp CTA principal */}
            <div className="bg-ink p-8">
              <p className="font-display font-800 text-2xl text-stone mb-2 leading-none">
                RESPOSTA MAIS RÁPIDA?
              </p>
              <p className="font-feature italic text-stone/50 text-lg mb-6">
                Fale diretamente pelo WhatsApp.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white font-body text-sm font-medium tracking-wide uppercase hover:bg-[#20b859] transition-colors duration-200 w-full justify-center"
              >
                <svg
                  aria-hidden="true"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ou fale direto pelo WhatsApp →
              </a>
            </div>

            {/* Informações de contato */}
            <div className="space-y-5">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-steel mb-1">
                  Email
                </p>
                <p className="font-body text-sm text-ink">
                  contato@alpha3engenharia.com.br
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-steel mb-1">
                  Horário de atendimento
                </p>
                <p className="font-body text-sm text-ink">
                  Segunda a Sexta: 8h às 18h
                </p>
                <p className="font-body text-sm text-steel">
                  Emergências 24h (planos Business e Full Engineering)
                </p>
              </div>
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-steel mb-1">
                  Localização
                </p>
                <p className="font-body text-sm text-ink">
                  São Paulo – SP e Grande São Paulo
                </p>
              </div>
            </div>

            {/* Promessa */}
            <div className="border-l-2 border-brass pl-5">
              <p className="font-feature italic text-xl text-ink/80">
                "Respondemos toda solicitação em até 2 horas úteis."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
