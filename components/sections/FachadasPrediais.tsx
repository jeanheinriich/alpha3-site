import { Waves, HardHat, PaintBucket, Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

const WA_FACHADAS =
  "Olá%2C+vim+pelo+site+e+gostaria+de+uma+vistoria+de+fachada.";

const BLOCOS = [
  {
    icon: Waves,
    title: "Lavagem de Fachada",
    items: [
      "Pele de vidro",
      "Pastilhas",
      "Litocerâmica",
      "Fulget, granito, mármore e quartzo",
      "Alvenaria",
      "Concreto aparente",
      "Tijolo aparente",
      "Hidrojateamento",
    ],
  },
  {
    icon: HardHat,
    title: "Restauração de Superfície",
    items: [
      "Teste de percussão",
      "Reparo de alvenaria / argamassa de emboço",
      "Tratamento de ferragem exposta / corrosão em armaduras",
      "Recolocação de tijolos aparentes",
      "Recolocação de pastilhas / cerâmica",
      "Reparo de textura",
      "Tratamento em concreto aparente",
    ],
  },
  {
    icon: PaintBucket,
    title: "Pinturas Prediais",
    items: [
      "Aplicação de fundo reparador",
      "Aplicação de primer de aderência",
      "Aplicação de selador acrílico",
      "Aplicação de impermeabilizante",
      "Aplicação de tinta acrílica",
      "Aplicação de silicone hidro-repelente",
      "Aplicação de resina acrílica",
      "Aplicação de verniz acrílico",
    ],
  },
];

export default function FachadasPrediais() {
  return (
    <section
      id="fachadas"
      className="relative bg-ink overflow-hidden py-section"
      aria-labelledby="fachadas-heading"
    >
      {/* Grid arquitetônico âmbar sutil — consistência com Hero */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="fachadas-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#EDA811"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fachadas-grid)" />
        </svg>
      </div>

      <div className="max-w-site mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-stone/50 mb-3">
            Serviço 02
          </p>
          <h2
            id="fachadas-heading"
            className="font-display font-900 text-display-lg text-stone leading-none mb-3"
          >
            FACHADAS<br />
            <span className="text-brass">PREDIAIS</span>
          </h2>
          <p className="font-feature italic text-feature-lg text-stone/60">
            Lavagem, restauração e pintura especializada em altura.
          </p>
        </AnimatedSection>

        {/* Três blocos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {BLOCOS.map(({ icon: Icon, title, items }, i) => (
            <AnimatedSection key={title} delay={i * 120}>
              <article className="group flex flex-col h-full border border-stone/20 hover:border-brass transition-colors duration-300 p-8">
                {/* Ícone + Título */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center border border-stone/30 text-stone/60 group-hover:border-brass group-hover:text-brass transition-colors duration-300 flex-shrink-0">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-800 text-xl text-stone leading-none">
                    {title.toUpperCase()}
                  </h3>
                </div>

                {/* Linha decorativa */}
                <span
                  className="block h-px bg-brass/30 group-hover:bg-brass line-grow mb-5 w-full"
                  aria-hidden="true"
                />

                {/* Lista */}
                <ul className="space-y-2.5 flex-1 mb-8" role="list">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-stone/70"
                    >
                      <Check
                        size={14}
                        strokeWidth={2.5}
                        className="text-brass flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA do bloco */}
                <CTAButton
                  variant="ghost-light"
                  waText={WA_FACHADAS}
                  size="sm"
                  className="self-start"
                >
                  Solicitar orçamento
                </CTAButton>
              </article>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA principal da seção */}
        <AnimatedSection className="text-center" delay={350}>
          <CTAButton
            variant="solid"
            waText={WA_FACHADAS}
            size="lg"
          >
            Solicite uma vistoria gratuita
          </CTAButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
