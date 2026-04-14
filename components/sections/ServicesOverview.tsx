import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/ui/ServiceCard";

const WrenchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const HammerIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
    <path d="M17.64 15 22 10.64" />
    <path d="m2 2 4.5 4.5" />
    <path d="M13.5 6.5 9 2" />
    <path d="M15 3l6 6-3.5 3.5-6-6z" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const SERVICES = [
  {
    number: "01",
    title: "MANUTENÇÃO",
    subtitle: "Carro-chefe",
    description:
      "Planos mensais de manutenção preventiva e corretiva. Elétrica, hidráulica, pequenos reparos e atendimento de emergência. Do Essencial ao Full Engineering.",
    waText: "Olá%2C+quero+conhecer+os+planos+de+manutenção",
    icon: <WrenchIcon />,
    featured: true,
  },
  {
    number: "02",
    title: "REFORMAS",
    subtitle: "Gerador de caixa",
    description:
      "Reformas comerciais e residenciais de médio e alto padrão. Escopo fechado, prazo definido. Pisos, revestimentos, pintura, elétrica e hidráulica.",
    waText: "Olá%2C+quero+um+orçamento+para+reforma",
    icon: <HammerIcon />,
    featured: false,
  },
  {
    number: "03",
    title: "FACHADAS",
    subtitle: "Diferencial competitivo",
    description:
      "Revitalização e reforma de fachadas com tinta emborrachada. Menos quebra de paredes, mais durabilidade, custo reduzido. Impermeabilização incluída.",
    waText: "Olá%2C+quero+um+orçamento+para+fachada",
    icon: <BuildingIcon />,
    featured: false,
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="servicos"
      className="bg-stone py-section"
      aria-labelledby="services-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
              O que fazemos
            </p>
            <h2
              id="services-heading"
              className="font-display font-900 text-display-lg text-ink leading-none"
            >
              TRÊS SERVIÇOS.<br />
              <span className="text-brass">UMA EQUIPE.</span>
            </h2>
          </div>
          <span
            className="hidden sm:block h-px bg-concrete line-grow flex-1 max-w-xs mb-3"
            aria-hidden="true"
          />
        </AnimatedSection>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.number} delay={i * 100}>
              <ServiceCard {...service} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
