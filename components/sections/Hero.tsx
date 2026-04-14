"use client";

import { useEffect, useRef } from "react";
import SplitTextReveal from "@/components/ui/SplitTextReveal";
import CTAButton from "@/components/ui/CTAButton";

export default function Hero() {
  const lineRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const preHeadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Staggered entrance for non-title elements
    const elements = [
      { el: preHeadRef.current, delay: 100 },
      { el: lineRef.current, delay: 900 },
      { el: subRef.current, delay: 1100 },
      { el: ctaRef.current, delay: 1300 },
    ];

    elements.forEach(({ el, delay }) => {
      if (!el) return;
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, delay);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-stretch overflow-hidden"
      aria-label="Alpha 3 Engenharia — Apresentação"
    >
      {/* Grid assimétrico: 55% texto | 45% imagem */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
        {/* Lado esquerdo — Texto */}
        <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-16 lg:pt-24 bg-stone z-10">
          {/* Linha decorativa superior */}
          <div className="flex items-center gap-4 mb-8">
            <span
              ref={lineRef}
              className="block h-px bg-brass line-grow w-12"
              style={{
                opacity: 0,
                transform: "translateY(8px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
              aria-hidden="true"
            />
            <p
              ref={preHeadRef}
              className="font-body text-xs tracking-[0.25em] uppercase text-steel"
              style={{
                opacity: 0,
                transform: "translateY(8px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              Engenharia de Alto Padrão — São Paulo
            </p>
          </div>

          {/* Headline principal — split-text wipe */}
          <SplitTextReveal
            text="CONSTRUÍMOS. MANTEMOS. TRANSFORMAMOS."
            as="h1"
            className="font-display font-900 text-display-xl text-ink leading-none mb-8 tracking-tight"
            baseDelay={200}
            wordDelay={140}
          />

          {/* Subtítulo */}
          <p
            ref={subRef}
            className="font-feature italic text-feature-lg text-steel max-w-md mb-10"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            Manutenção predial, reformas e fachadas para quem não aceita menos.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap gap-4"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <CTAButton
              variant="whatsapp"
              waText="Olá%2C+vim+pelo+site+e+quero+um+orçamento"
              size="lg"
            >
              Solicitar orçamento
            </CTAButton>
            <CTAButton variant="ghost" href="#planos" size="lg">
              Conheça os planos
            </CTAButton>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-16 xl:left-24 lg:translate-x-0 flex flex-col items-center gap-2 opacity-40">
            <span className="font-body text-xs tracking-widest uppercase text-steel">
              Scroll
            </span>
            <span
              className="block w-px h-10 bg-steel"
              aria-hidden="true"
              style={{ animation: "scrollLine 2s ease-in-out infinite" }}
            />
          </div>

          {/* Decorative number */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-900 text-[14rem] leading-none text-concrete/60 select-none pointer-events-none hidden xl:block"
            aria-hidden="true"
          >
            α3
          </span>
        </div>

        {/* Lado direito — Imagem */}
        <div className="relative hidden lg:block bg-ink-light overflow-hidden">
          {/* Placeholder visual para a imagem de fachada/obra */}
          <div
            className="absolute inset-0 bg-ink-light"
            style={{
              backgroundImage: `
                linear-gradient(135deg, #1a1814 0%, #2a2520 40%, #1a1814 100%)
              `,
            }}
          >
            {/* Grid pattern decorativo representando estrutura arquitetônica */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="grid"
                  width="60"
                  height="60"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 60 0 L 0 0 0 60"
                    fill="none"
                    stroke="#C2882B"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Diagonal accent line */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, transparent 55%, rgba(194, 136, 43, 0.12) 55%)",
              }}
              aria-hidden="true"
            />

            {/* Texto decorativo */}
            <div className="absolute bottom-12 left-8 right-8">
              <p className="font-display font-900 text-5xl text-stone/8 uppercase tracking-tight leading-none">
                Construção
                <br />
                de Alto
                <br />
                Padrão
              </p>
            </div>

            {/* Badge */}
            <div className="absolute top-16 right-8 border border-brass/40 px-4 py-3">
              <p className="font-body text-xs tracking-widest uppercase text-brass">
                Est. 2010
              </p>
            </div>
          </div>

          {/* Overlay gradient para fundir com o lado esquerdo */}
          <div
            className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone to-transparent pointer-events-none z-10"
            aria-hidden="true"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0%, 100% { opacity: 0.4; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }
      `}</style>
    </section>
  );
}
