import CTAButton from "@/components/ui/CTAButton";

interface ServiceCardProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  waText: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export default function ServiceCard({
  number,
  title,
  subtitle,
  description,
  waText,
  icon,
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`group relative flex flex-col p-8 border transition-all duration-300 cursor-default ${
        featured
          ? "border-brass bg-ink text-stone"
          : "border-concrete bg-stone-dark hover:border-brass hover:bg-stone"
      }`}
    >
      {/* Número decorativo */}
      <span
        className={`absolute top-6 right-6 font-display font-900 text-6xl leading-none select-none pointer-events-none transition-colors duration-300 ${
          featured ? "text-stone/10" : "text-concrete group-hover:text-brass/20"
        }`}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Ícone */}
      <div
        className={`w-12 h-12 flex items-center justify-center mb-6 border transition-colors duration-300 ${
          featured
            ? "border-brass text-brass"
            : "border-steel/30 text-steel group-hover:border-brass group-hover:text-brass"
        }`}
      >
        {icon}
      </div>

      {/* Conteúdo */}
      <div className="flex-1">
        {subtitle && (
          <p
            className={`font-body text-xs tracking-widest uppercase mb-2 ${
              featured ? "text-brass" : "text-steel"
            }`}
          >
            {subtitle}
          </p>
        )}
        <h3
          className={`font-display font-800 text-display-md mb-4 leading-none ${
            featured ? "text-stone" : "text-ink"
          }`}
        >
          {title}
        </h3>
        <p
          className={`font-body text-sm leading-relaxed mb-8 ${
            featured ? "text-stone/60" : "text-steel"
          }`}
        >
          {description}
        </p>
      </div>

      {/* CTA */}
      <CTAButton
        variant={featured ? "solid" : "ghost"}
        waText={waText}
        size="sm"
        className={featured ? "" : "self-start"}
      >
        Pedir orçamento
      </CTAButton>

      {/* Bottom accent line */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
          featured
            ? "w-full bg-brass"
            : "w-0 bg-brass group-hover:w-full"
        }`}
        aria-hidden="true"
      />
    </article>
  );
}
