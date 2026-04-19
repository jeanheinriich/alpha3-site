import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

const SERVICES = [
  "Reformas comerciais (lojas, clínicas, escritórios)",
  "Reformas residenciais de médio e alto padrão",
  "Troca de pisos e revestimentos",
  "Pintura interna e externa",
  "Reformas completas de ambientes",
  "Instalações elétricas e hidráulicas",
  "Adequações e modernizações de espaços",
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="flex-shrink-0 text-brass"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Renovations() {
  return (
    <section
      id="reformas"
      className="relative bg-ink overflow-hidden py-section"
      aria-labelledby="renovations-heading"
    >
      {/* Decorative grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="reform-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#EDA811"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reform-grid)" />
        </svg>
        {/* Diagonal accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, transparent 60%, rgba(237,168,17,0.06) 60%)",
          }}
        />
      </div>

      <div className="max-w-site mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Lado esquerdo — Headline */}
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-brass/70 mb-4">
              Serviço 02
            </p>
            <h2
              id="renovations-heading"
              className="font-display font-900 text-display-lg text-stone leading-none mb-6"
            >
              REFORMAS QUE<br />
              <span className="text-brass">TRANSFORMAM</span><br />
              ESPAÇOS
            </h2>
            <p className="font-feature italic text-feature-lg text-stone/50 mb-8 leading-snug">
              Serviço fechado. Prazo definido. Escopo claro.
            </p>
            <p className="font-body text-stone/60 text-base leading-relaxed mb-10 max-w-md">
              Desde reformas completas de escritórios até ambientes residenciais
              de alto padrão. Nossa equipe própria garante qualidade de execução
              e pontualidade em cada etapa.
            </p>
            <CTAButton
              variant="solid"
              waText="Olá%2C+quero+um+orçamento+para+reforma"
              size="lg"
            >
              Pedir orçamento de reforma
            </CTAButton>
          </AnimatedSection>

          {/* Lado direito — Lista de serviços */}
          <AnimatedSection delay={150}>
            <div className="border border-stone/10 p-8">
              <p className="font-body text-xs tracking-widest uppercase text-stone/30 mb-6">
                O que entregamos
              </p>
              <ul className="space-y-4" role="list">
                {SERVICES.map((service, i) => (
                  <li
                    key={service}
                    className={`flex items-start gap-4 font-body text-sm text-stone/70 stagger-${Math.min(i + 1, 5)}`}
                  >
                    <ArrowIcon />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-stone/10">
                <div className="flex gap-8">
                  <div>
                    <p className="font-display font-900 text-4xl text-brass leading-none">
                      100%
                    </p>
                    <p className="font-body text-xs text-stone/40 uppercase tracking-wide mt-1">
                      Equipe própria
                    </p>
                  </div>
                  <div>
                    <p className="font-display font-900 text-4xl text-brass leading-none">
                      0
                    </p>
                    <p className="font-body text-xs text-stone/40 uppercase tracking-wide mt-1">
                      Surpresas no prazo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
