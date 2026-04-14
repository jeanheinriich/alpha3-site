import AnimatedSection from "@/components/ui/AnimatedSection";
import DifferentialCard from "@/components/ui/DifferentialCard";
import CTAButton from "@/components/ui/CTAButton";

const DIFFERENTIALS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Resposta em até 4h",
    description: "No plano Full Engineering, nossa equipe está disponível para emergências com atendimento VIP de até 4 horas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="12" y2="17" />
        <polyline points="9 9 10 9 12 9" />
      </svg>
    ),
    title: "Relatório com fotos",
    description: "Nos planos Business e Full, você recebe relatório mensal detalhado com fotos de cada visita e serviço realizado.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Equipe própria",
    description: "Não trabalhamos com subempreiteiros desconhecidos. Nossa equipe é treinada, identificada e de confiança.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Prevenção garantida",
    description: "Atuamos antes do problema acontecer. Nossas checklists e inspeções regulares evitam custos altos no futuro.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Cobertura em São Paulo",
    description: "Atendemos São Paulo e Grande SP com equipe local disponível para visitas programadas e emergências.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Investimento previsível",
    description: "Mensalidade fixa, sem surpresas. Você sabe exatamente o que está pagando e o que está recebendo.",
  },
];

export default function WhyAlpha3() {
  return (
    <section
      id="diferenciais"
      className="bg-stone-dark py-section"
      aria-labelledby="why-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
              Por que escolher
            </p>
            <h2
              id="why-heading"
              className="font-display font-900 text-display-lg text-ink leading-none"
            >
              POR QUE<br />
              <span className="text-brass">ALPHA 3</span>
            </h2>
          </div>
          <p className="font-feature italic text-feature-lg text-steel max-w-xs sm:text-right pb-2">
            Seis razões para escolher quem cuida de verdade.
          </p>
        </AnimatedSection>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIFFERENTIALS.map((diff, i) => (
            <AnimatedSection key={diff.title} delay={i * 80}>
              <DifferentialCard {...diff} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center" delay={300}>
          <CTAButton
            variant="solid"
            waText="Olá%2C+quero+falar+com+um+especialista+da+Alpha+3"
            size="lg"
          >
            Falar com um especialista
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
