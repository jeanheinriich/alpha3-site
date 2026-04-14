import AnimatedSection from "@/components/ui/AnimatedSection";
import PlanCard from "@/components/ui/PlanCard";
import CTAButton from "@/components/ui/CTAButton";

const PLANS = [
  {
    name: "ESSENCIAL",
    subtitle: "Prevenção",
    idealFor: "escritórios, consultórios, pequenas lojas",
    price: "R$ 1.200 – 1.600",
    priceNote: "por mês",
    features: [
      "2 visitas mensais",
      "Checklist elétrico básico",
      "Verificação hidráulica (vazamentos e vedação)",
      "Ajustes de portas e janelas",
      "Até 4h de mão de obra inclusa",
    ],
    emergency: "Horário comercial (até 24h)",
    hours: "Até 4h/mês incluso",
    waText: "Olá%2C+tenho+interesse+no+Plano+Essencial+de+manutenção",
    featured: false,
  },
  {
    name: "BUSINESS",
    subtitle: "Performance",
    idealFor: "restaurantes, academias, empresas com fluxo intenso",
    price: "R$ 2.500 – 3.500",
    priceNote: "por mês",
    features: [
      "4 visitas mensais (1 por semana)",
      "Tudo do Plano Essencial +",
      "Limpeza de calhas",
      "Inspeção de cobertura e telhado",
      "Verificação de iluminação de emergência",
      "Relatório mensal com fotos",
    ],
    emergency: "Prioritário (até 12h)",
    hours: "Até 10h/mês incluso",
    waText: "Olá%2C+tenho+interesse+no+Plano+Business+de+manutenção",
    featured: true,
  },
  {
    name: "FULL ENGINEERING",
    subtitle: "Gestão total",
    idealFor: "galpões, empresas maiores, condomínios",
    price: "A partir de R$ 5.000",
    priceNote: "por mês",
    features: [
      "8 visitas mensais",
      "Tudo do Plano Business +",
      "Gestão de terceiros (ar-condicionado, etc.)",
      "Análise elétrica detalhada",
      "Pequenos reparos contínuos inclusos",
      "Planejamento anual de manutenção",
    ],
    emergency: "VIP (até 4h)",
    hours: "Mão de obra livre para pequenos e médios serviços",
    waText: "Olá%2C+tenho+interesse+no+Plano+Full+Engineering",
    featured: false,
  },
];

export default function MaintenancePlans() {
  return (
    <section
      id="planos"
      className="bg-stone-dark py-section overflow-hidden"
      aria-labelledby="plans-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
            Manutenção predial
          </p>
          <h2
            id="plans-heading"
            className="font-display font-900 text-display-lg text-ink leading-none mb-4"
          >
            PLANOS PARA<br />
            <span className="text-brass">CADA NECESSIDADE</span>
          </h2>
          <p className="font-feature italic text-feature-lg text-steel">
            Escolha o nível de cobertura ideal para o seu espaço.
          </p>
        </AnimatedSection>

        {/* Cards — espaço extra para o card featured que cresce */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-6">
          {PLANS.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 100}>
              <PlanCard {...plan} />
            </AnimatedSection>
          ))}
        </div>

        {/* Rodapé da seção */}
        <AnimatedSection className="mt-12 text-center" delay={300}>
          <p className="font-body text-sm text-steel mb-6">
            Todos os planos incluem materiais de baixo custo. Materiais
            especiais com orçamento separado.
          </p>
          <CTAButton
            variant="solid"
            waText="Olá%2C+quero+um+plano+personalizado+de+manutenção"
            size="md"
          >
            Não encontrou o ideal? Fale conosco
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
