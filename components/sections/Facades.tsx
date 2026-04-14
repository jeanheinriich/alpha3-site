import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

const SERVICES = [
  "Reforma de fachadas comerciais e prediais",
  "Aplicação de tinta emborrachada",
  "Tratamento de fissuras sem quebra",
  "Pintura externa especializada",
  "Impermeabilização",
  "Revitalização estética completa",
];

const DIFFERENTIALS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Sem quebra",
    text: "Tratamento de fissuras sem necessidade de quebrar paredes ou estruturas",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Mais durável",
    text: "Tinta emborrachada com durabilidade superior à pintura convencional",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Custo menor",
    text: "Redução de custo de mão de obra e material comparado a métodos tradicionais",
  },
];

export default function Facades() {
  return (
    <section
      id="fachadas"
      className="bg-stone py-section"
      aria-labelledby="facades-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
            Serviço 03 — Diferencial competitivo
          </p>
          <h2
            id="facades-heading"
            className="font-display font-900 text-display-lg text-ink leading-none"
          >
            FACHADAS QUE<br />
            <span className="text-brass">IMPRESSIONAM</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado esquerdo — diferenciais */}
          <div className="space-y-6">
            {DIFFERENTIALS.map((diff, i) => (
              <AnimatedSection
                key={diff.title}
                delay={i * 120}
                className="flex gap-5 p-6 border border-concrete hover:border-brass transition-colors duration-300 group"
              >
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 border border-steel/30 text-steel group-hover:border-brass group-hover:text-brass transition-colors duration-300">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="font-display font-800 text-xl text-ink mb-1">
                    {diff.title.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-steel leading-relaxed">
                    {diff.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Lado direito — serviços + CTA */}
          <AnimatedSection delay={200} className="bg-ink p-8 lg:p-10">
            <p className="font-body text-xs tracking-widest uppercase text-brass mb-6">
              O que entregamos
            </p>
            <ul className="space-y-3 mb-8" role="list">
              {SERVICES.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 font-body text-sm text-stone/70"
                >
                  <span className="text-brass mt-0.5 flex-shrink-0" aria-hidden="true">
                    ›
                  </span>
                  {service}
                </li>
              ))}
            </ul>

            {/* Linha decorativa */}
            <span className="block h-px bg-stone/10 mb-8" aria-hidden="true" />

            <div className="mb-8">
              <p className="font-display font-900 text-5xl text-brass leading-none">
                Alto ticket.
              </p>
              <p className="font-feature italic text-stone/40 text-lg mt-1">
                resultado que se vê.
              </p>
            </div>

            <CTAButton
              variant="solid"
              waText="Olá%2C+quero+um+orçamento+para+fachada"
              size="md"
            >
              Agendar visita técnica
            </CTAButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
