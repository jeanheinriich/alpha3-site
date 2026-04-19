import AnimatedSection from "@/components/ui/AnimatedSection";
import TechnicalPanel from "@/components/ui/TechnicalPanel";
import CTAButton from "@/components/ui/CTAButton";

const BoltIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const DropIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
  </svg>
);

const ELECTRICAL = [
  "Revisão e inspeção de quadros elétricos",
  "Limpeza de quadros de distribuição",
  "Troca de lâmpadas e reatores",
  "Verificação de disjuntores e dispositivos DR",
  "Inspeção e troca de tomadas e interruptores",
  "Verificação de iluminação de emergência",
];

const HYDRAULIC = [
  "Troca e reparo de torneiras e registros",
  "Desentupimentos preventivos",
  "Verificação de encaixes e vedações",
  "Inspeção de tubulações e conexões",
  "Verificação de caixas d'água",
  "Reparo de vazamentos e infiltrações",
];

export default function MaintenanceDetails() {
  return (
    <section
      id="manutencao-tecnica"
      className="bg-stone-dark noise-texture py-section"
      aria-labelledby="tech-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
            O que está incluso nos planos
          </p>
          <h2
            id="tech-heading"
            className="font-display font-900 text-display-lg text-ink leading-none"
          >
            COBERTURA<br />
            <span className="text-brass">TÉCNICA COMPLETA</span>
          </h2>
        </AnimatedSection>

        {/* Painéis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={100}>
            <TechnicalPanel
              icon={<BoltIcon />}
              title="ELÉTRICA"
              items={ELECTRICAL}
            />
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <TechnicalPanel
              icon={<DropIcon />}
              title="HIDRÁULICA"
              items={HYDRAULIC}
            />
          </AnimatedSection>
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={300}>
          <CTAButton
            variant="solid"
            waText="Olá%2C+tenho+dúvidas+sobre+os+serviços+técnicos"
            size="md"
          >
            Tirar dúvidas técnicas
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
