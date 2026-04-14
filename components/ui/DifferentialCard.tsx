interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function DifferentialCard({
  icon,
  title,
  description,
}: DifferentialCardProps) {
  return (
    <article className="group flex flex-col items-start p-6 border border-concrete bg-stone hover:border-brass hover:bg-stone transition-all duration-300">
      {/* Ícone */}
      <div className="w-11 h-11 flex items-center justify-center border border-steel/30 text-steel mb-4 group-hover:border-brass group-hover:text-brass transition-colors duration-300 flex-shrink-0">
        {icon}
      </div>

      {/* Linha crescente */}
      <span
        className="block h-px bg-brass mb-4 w-0 group-hover:w-8 transition-all duration-500"
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <h3 className="font-display font-800 text-xl text-ink leading-none mb-2">
        {title.toUpperCase()}
      </h3>
      <p className="font-body text-sm text-steel leading-relaxed">
        {description}
      </p>
    </article>
  );
}
