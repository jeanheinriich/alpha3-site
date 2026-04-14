interface TechnicalPanelProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  accentColor?: "brass" | "steel";
}

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="flex-shrink-0 mt-0.5 text-brass"
  >
    <path
      d="M2 7l3.5 3.5L12 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TechnicalPanel({
  icon,
  title,
  items,
}: TechnicalPanelProps) {
  return (
    <article className="group p-8 lg:p-10 border border-concrete bg-stone hover:border-brass transition-colors duration-300">
      {/* Ícone */}
      <div className="w-14 h-14 flex items-center justify-center border border-steel/30 text-steel mb-6 group-hover:border-brass group-hover:text-brass transition-colors duration-300">
        {icon}
      </div>

      {/* Título */}
      <h3 className="font-display font-800 text-display-md text-ink leading-none mb-6">
        {title}
      </h3>

      {/* Linha decorativa */}
      <span className="block h-px bg-concrete line-grow w-full mb-6" aria-hidden="true" />

      {/* Lista */}
      <ul className="space-y-3" role="list">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 font-body text-sm text-steel"
          >
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
