import {
  Store,
  Home,
  HardHat,
  Zap,
  Layers,
  Paintbrush,
  FileText,
  RefreshCw,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceItemCard from "@/components/ui/ServiceItemCard";
import CTAButton from "@/components/ui/CTAButton";

const WA_ENGENHARIA =
  "Olá%2C+vim+pelo+site+e+preciso+falar+com+um+engenheiro.";

const SERVICOS = [
  {
    icon: Store,
    title: "Reformas Comerciais",
    description:
      "Lojas, clínicas, escritórios e espaços corporativos com prazo definido e escopo claro.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: Home,
    title: "Reformas Residenciais",
    description: "Médio e alto padrão. Do projeto à entrega.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: HardHat,
    title: "Construção e Gerenciamento",
    description: "Gestão completa do canteiro, equipes e fornecedores.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: Zap,
    title: "Instalações Elétricas e Hidráulicas",
    description: "Projetos novos, adequações e modernizações.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: Layers,
    title: "Troca de Pisos e Revestimentos",
    description: "Demolição, nivelamento e aplicação de novos pisos.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: Paintbrush,
    title: "Pintura Interna e Externa",
    description: "Preparação de superfície e acabamento profissional.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: FileText,
    title: "Projetos e Consultoria",
    description: "Elaboração de projetos executivos e laudos técnicos.",
    waText: WA_ENGENHARIA,
  },
  {
    icon: RefreshCw,
    title: "Adequações e Modernizações",
    description: "Transformação de espaços existentes com engenharia.",
    waText: WA_ENGENHARIA,
  },
];

export default function EngenhariaServicos() {
  return (
    <section
      id="engenharia"
      className="bg-white py-section"
      aria-labelledby="engenharia-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-steel mb-3">
            Serviço 03
          </p>
          <h2
            id="engenharia-heading"
            className="font-display font-900 text-display-lg text-ink leading-none mb-4"
          >
            ENGENHARIA
          </h2>
          <div className="flex items-start gap-4">
            <span
              className="block w-8 h-px bg-brass mt-3 flex-shrink-0 line-grow"
              aria-hidden="true"
            />
            <p className="font-feature italic text-feature-lg text-steel">
              Reformas, construções e projetos do planejamento à entrega.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid de 8 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {SERVICOS.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 80}>
              <ServiceItemCard {...item} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA principal */}
        <AnimatedSection className="text-center" delay={350}>
          <CTAButton
            variant="solid"
            waText={WA_ENGENHARIA}
            size="lg"
          >
            Fale com um engenheiro
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
