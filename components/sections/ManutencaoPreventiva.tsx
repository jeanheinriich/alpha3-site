import {
  Zap,
  Droplets,
  Wind,
  Leaf,
  Paintbrush,
  Wrench,
  CloudRain,
  Layers,
  Grid3x3,
  LayoutGrid,
  Minus,
  Home,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceItemCard from "@/components/ui/ServiceItemCard";
import CTAButton from "@/components/ui/CTAButton";

const WA_MANUTENCAO =
  "Olá%2C+vim+pelo+site+e+quero+saber+sobre+os+planos+de+manutenção.";

const PREVENTIVA = [
  {
    icon: Zap,
    title: "Elétrica",
    description: "Quadros, circuitos e iluminação",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Droplets,
    title: "Hidráulica",
    description: "Tubulações, vedações e vazamentos",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Wind,
    title: "Ar-condicionado",
    description: "Limpeza, filtros e recarga",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Leaf,
    title: "Jardinagem",
    description: "Poda, irrigação e conservação",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description: "Acabamento e repintura preventiva",
    waText: WA_MANUTENCAO,
  },
];

const CORRETIVA = [
  {
    icon: Wrench,
    title: "Reparos em geral",
    description: "Pequenos e médios reparos civis",
    waText: WA_MANUTENCAO,
  },
  {
    icon: CloudRain,
    title: "Infiltrações",
    description: "Identificação e tratamento",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Layers,
    title: "Drywall",
    description: "Instalação, reparo e acabamento",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Grid3x3,
    title: "Pisos",
    description: "Substituição e nivelamento",
    waText: WA_MANUTENCAO,
  },
  {
    icon: LayoutGrid,
    title: "Azulejos",
    description: "Recolocação e rejunte",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Minus,
    title: "Forros",
    description: "PVC, gesso e madeira",
    waText: WA_MANUTENCAO,
  },
  {
    icon: Home,
    title: "Telhado",
    description: "Inspeção, reparo e impermeabilização",
    waText: WA_MANUTENCAO,
  },
];

export default function ManutencaoPreventiva() {
  return (
    <section
      id="manutencao"
      className="bg-stone py-section"
      aria-labelledby="manutencao-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-10">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
            Serviço 01
          </p>
          <h2
            id="manutencao-heading"
            className="font-display font-900 text-display-lg text-ink leading-none mb-3"
          >
            MANUTENÇÃO<br />
            <span className="text-brass">PREVENTIVA</span>
          </h2>
          <p className="font-feature italic text-feature-lg text-steel">
            Gestão completa da saúde predial da sua empresa.
          </p>
        </AnimatedSection>

        {/* Banner de destaque */}
        <AnimatedSection delay={100}>
          <div className="bg-ink flex flex-col sm:flex-row sm:items-center justify-between gap-6 px-8 py-8 mb-12">
            <div>
              <p className="font-display font-900 text-3xl text-brass leading-none mb-2">
                A PARTIR DE R$ 1.200/MÊS
              </p>
              <p className="font-body text-sm text-stone/60 max-w-sm">
                Evite custos maiores com manutenção programada e previsível
                para a sua empresa.
              </p>
            </div>
            <div className="flex-shrink-0">
              <CTAButton
                variant="solid"
                waText={WA_MANUTENCAO}
                size="md"
              >
                Conheça os planos
              </CTAButton>
            </div>
          </div>
        </AnimatedSection>

        {/* Grupo 1 — Manutenção Preventiva */}
        <AnimatedSection delay={150} className="mb-10">
          <p className="font-body text-xs tracking-widest uppercase text-steel border-b border-concrete pb-2 mb-6">
            Manutenção Preventiva
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PREVENTIVA.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 70}>
                <ServiceItemCard {...item} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Grupo 2 — Manutenção Civil Corretiva */}
        <AnimatedSection delay={200} className="mb-12">
          <p className="font-body text-xs tracking-widest uppercase text-steel border-b border-concrete pb-2 mb-6">
            Manutenção Civil Corretiva
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CORRETIVA.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 70}>
                <ServiceItemCard {...item} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA principal */}
        <AnimatedSection className="text-center" delay={300}>
          <CTAButton
            variant="solid"
            waText={WA_MANUTENCAO}
            size="lg"
          >
            Conheça os planos
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
