import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import CTAButton from "@/components/ui/CTAButton";

const STATS = [
  { value: 200, suffix: "+", label: "Clientes ativos" },
  { value: 3, suffix: "", label: "Especialidades" },
  { value: 4, suffix: "h", label: "Resposta de emergência" },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-ink text-stone py-section overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-20 items-center">
          {/* Lado esquerdo — número grande */}
          <AnimatedSection className="relative">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-stone/40 mb-4">
              Nossa história
            </p>
            <div className="flex items-end gap-4 mb-6">
              <span
                className="font-display font-900 text-[7rem] lg:text-[10rem] leading-none text-stone"
                aria-hidden="true"
              >
                15
              </span>
              <span className="font-feature italic text-2xl text-brass/80 pb-6">
                + anos
              </span>
            </div>
            <span
              className="block h-px bg-brass line-grow w-full max-w-[120px]"
              aria-hidden="true"
            />
            <p className="font-body text-sm text-stone/40 mt-4 tracking-wide">
              de experiência em engenharia predial
            </p>

            {/* Decorative element */}
            <span
              className="absolute -right-4 top-0 font-display font-900 text-[8rem] leading-none text-stone/5 select-none pointer-events-none"
              aria-hidden="true"
            >
              α
            </span>
          </AnimatedSection>

          {/* Lado direito — Texto + stats */}
          <div className="space-y-8">
            <AnimatedSection>
              <h2
                id="about-heading"
                className="font-display font-800 text-display-md text-stone mb-4 leading-tight"
              >
                ENGENHARIA QUE<br />
                <span className="text-brass">VOCÊ PODE CONFIAR</span>
              </h2>
              <p className="font-body text-stone/60 text-base leading-relaxed max-w-lg">
                A Alpha 3 nasceu da convicção de que manutenção predial de
                qualidade não é luxo — é inteligência. Atendemos empresas,
                clínicas, restaurantes e condomínios de médio e alto padrão em
                São Paulo com equipe própria, processos definidos e compromisso
                com o prazo.
              </p>
              <p className="font-body text-stone/60 text-base leading-relaxed max-w-lg mt-4">
                Prevenimos problemas antes que aconteçam. Quando surgem,
                resolvemos rápido. Nossos planos de manutenção garantem que seu
                espaço funcione como deveria — sempre.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection className="grid grid-cols-3 gap-6 pt-4 border-t border-stone/10" delay={150}>
              {STATS.map(({ value, suffix, label }, i) => (
                <div key={label} className={`stagger-${i + 1}`}>
                  <p className="font-display font-900 text-4xl lg:text-5xl text-brass leading-none mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </p>
                  <p className="font-body text-xs text-stone/40 tracking-wide uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <CTAButton
                variant="solid"
                waText="Olá%2C+quero+conhecer+os+planos+de+manutenção"
                size="md"
              >
                Conhecer os planos
              </CTAButton>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
