import { type LucideIcon } from "lucide-react";

const WA_BASE = "https://wa.me/5511XXXXXXXXXXX?text=";

interface ServiceItemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  waText: string;
  /** Usar variante clara (navy border/text) ou escura (branco) */
  dark?: boolean;
}

export default function ServiceItemCard({
  icon: Icon,
  title,
  description,
  waText,
  dark = false,
}: ServiceItemCardProps) {
  const href = `${WA_BASE}${waText}`;

  if (dark) {
    return (
      <article className="group flex flex-col p-6 border border-stone/20 hover:border-brass transition-all duration-300 bg-transparent hover:bg-stone/5">
        <div className="w-10 h-10 flex items-center justify-center border border-stone/30 text-stone/60 mb-4 group-hover:border-brass group-hover:text-brass transition-colors duration-300 flex-shrink-0">
          <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h3 className="font-display font-800 text-lg text-stone leading-none mb-2">
          {title.toUpperCase()}
        </h3>
        <p className="font-body text-sm text-stone/60 leading-relaxed flex-1 mb-4">
          {description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs uppercase tracking-widest text-brass hover:text-brass-light transition-colors duration-200 inline-flex items-center gap-1 group/link"
          aria-label={`Solicitar orçamento para ${title}`}
        >
          Solicitar orçamento
          <svg
            aria-hidden="true"
            className="transition-transform duration-300 group-hover/link:translate-x-1"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        {/* Bottom accent line */}
        <span
          className="absolute bottom-0 left-0 h-px w-0 bg-brass group-hover:w-full transition-all duration-500"
          aria-hidden="true"
        />
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col p-6 border border-concrete bg-stone hover:border-brass hover:bg-white transition-all duration-300">
      {/* Ícone */}
      <div className="w-10 h-10 flex items-center justify-center border border-steel/30 text-steel mb-4 group-hover:border-brass group-hover:text-brass transition-colors duration-300 flex-shrink-0">
        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
      </div>

      {/* Título */}
      <h3 className="font-display font-800 text-lg text-ink leading-none mb-2">
        {title.toUpperCase()}
      </h3>

      {/* Descrição */}
      <p className="font-body text-sm text-steel leading-relaxed flex-1 mb-4">
        {description}
      </p>

      {/* Link WhatsApp */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs uppercase tracking-widest text-brass hover:text-brass-dark transition-colors duration-200 inline-flex items-center gap-1 group/link"
        aria-label={`Solicitar orçamento para ${title}`}
      >
        Solicitar orçamento
        <svg
          aria-hidden="true"
          className="transition-transform duration-300 group-hover/link:translate-x-1"
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Bottom accent line */}
      <span
        className="absolute bottom-0 left-0 h-px w-0 bg-brass group-hover:w-full transition-all duration-500"
        aria-hidden="true"
      />
    </article>
  );
}
