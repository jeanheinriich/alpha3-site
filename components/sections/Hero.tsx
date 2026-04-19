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
      <div className="w-full grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
        {/* Lado esquerdo — navy com texto branco */}
        <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-16 lg:pt-24 bg-ink z-10">
          {/* Pré-headline em âmbar */}
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
              className="font-body text-xs tracking-[0.25em] uppercase text-brass"
              style={{
                opacity: 0,
                transform: "translateY(8px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              Engenharia de Alto Padrão — São Paulo
            </p>
          </div>

          {/* Headline split-text — branco sobre navy */}
          <SplitTextReveal
            text="CONSTRUÍMOS. MANTEMOS. TRANSFORMAMOS."
            as="h1"
            className="font-display font-900 text-display-xl text-stone leading-none mb-8 tracking-tight"
            baseDelay={200}
            wordDelay={140}
          />

          {/* Subtítulo em off-white suave */}
          <p
            ref={subRef}
            className="font-feature italic text-feature-lg text-stone/60 max-w-md mb-10"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            Manutenção predial, reformas e fachadas para quem não aceita menos.
          </p>

          {/* CTAs: WhatsApp verde + outline branco */}
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
            <CTAButton variant="ghost-light" href="#planos" size="lg">
              Conheça os planos
            </CTAButton>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-16 xl:left-24 lg:translate-x-0 flex flex-col items-center gap-2 opacity-40">
            <span className="font-body text-xs tracking-widest uppercase text-stone/60">
              Scroll
            </span>
            <span
              className="block w-px h-10 bg-stone/40"
              aria-hidden="true"
              style={{ animation: "scrollLine 2s ease-in-out infinite" }}
            />
          </div>

          {/* Decorativo α3 — quase invisível, apenas textura */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-900 text-[14rem] leading-none select-none pointer-events-none hidden xl:block"
            style={{ color: "rgba(255,255,255,0.04)" }}
            aria-hidden="true"
          >
            α3
          </span>
        </div>

        {/* Lado direito — navy escuro com padrão arquitetônico */}
        <div className="relative hidden lg:block overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #0D2238 0%, #1A3759 40%, #0D2238 100%)",
            }}
          >
            {/* Grid arquitetônico em âmbar sutil */}
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
                    stroke="#EDA811"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Diagonal âmbar */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, transparent 55%, rgba(237, 168, 17, 0.07) 55%)",
              }}
              aria-hidden="true"
            />

            {/* Texto decorativo em branco fantasma */}
            <div className="absolute bottom-12 left-8 right-8">
              <p
                className="font-display font-900 text-5xl uppercase tracking-tight leading-none"
                style={{ color: "rgba(244,247,251,0.05)" }}
              >
                Construção
                <br />
                de Alto
                <br />
                Padrão
              </p>
            </div>

            {/* Badge Est. 2010 em âmbar */}
            <div className="absolute top-16 right-8 border border-brass/40 px-4 py-3">
              <p className="font-body text-xs tracking-widest uppercase text-brass">
                Est. 2010
              </p>
            </div>
          </div>

          {/* Gradiente de fusão com lado esquerdo */}
          <div
            className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to right, #1A3759, transparent)",
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
