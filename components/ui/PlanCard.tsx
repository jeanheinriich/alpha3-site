import CTAButton from "@/components/ui/CTAButton";

interface PlanCardProps {
  name: string;
  subtitle: string;
  idealFor: string;
  price: string;
  priceNote?: string;
  features: string[];
  emergency: string;
  hours: string;
  waText: string;
  featured?: boolean;
}

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="flex-shrink-0 mt-0.5"
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

export default function PlanCard({
  name,
  subtitle,
  idealFor,
  price,
  priceNote,
  features,
  emergency,
  hours,
  waText,
  featured = false,
}: PlanCardProps) {
  return (
    <article
      className={`relative flex flex-col border transition-all duration-300 group ${
        featured
          ? "border-brass bg-ink text-stone scale-[1.03] shadow-2xl shadow-brass/10 z-10"
          : "border-concrete bg-stone hover:border-brass hover:shadow-lg hover:scale-[1.01]"
      }`}
    >
      {/* Badge recomendado */}
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brass px-4 py-1">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-stone">
            Mais escolhido
          </p>
        </div>
      )}

      {/* Top accent */}
      <div className={`h-1 w-full ${featured ? "bg-brass" : "bg-concrete group-hover:bg-brass transition-colors duration-300"}`} aria-hidden="true" />

      <div className="p-8 flex flex-col flex-1">
        {/* Nome e subtitle */}
        <div className="mb-6">
          <p className={`font-body text-xs tracking-widest uppercase mb-2 ${featured ? "text-brass" : "text-steel"}`}>
            {subtitle}
          </p>
          <h3 className={`font-display font-900 text-3xl leading-none mb-3 ${featured ? "text-stone" : "text-ink"}`}>
            {name}
          </h3>
          <p className={`font-body text-sm ${featured ? "text-stone/50" : "text-steel"}`}>
            Ideal para: {idealFor}
          </p>
        </div>

        {/* Preço */}
        <div className={`border-t border-b py-5 mb-6 ${featured ? "border-stone/10" : "border-concrete"}`}>
          <p className={`font-display font-900 text-4xl leading-none ${featured ? "text-brass" : "text-ink"}`}>
            {price}
          </p>
          {priceNote && (
            <p className={`font-body text-xs mt-1 ${featured ? "text-stone/40" : "text-steel"}`}>
              {priceNote}
            </p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6 flex-1" role="list">
          {features.map((feat) => (
            <li
              key={feat}
              className={`flex items-start gap-3 font-body text-sm ${
                featured ? "text-stone/70" : "text-steel"
              }`}
            >
              <span className={featured ? "text-brass" : "text-brass"}>
                <CheckIcon />
              </span>
              {feat}
            </li>
          ))}
        </ul>

        {/* Atendimento */}
        <div className={`border-t pt-5 mb-6 space-y-2 ${featured ? "border-stone/10" : "border-concrete"}`}>
          <p className={`font-body text-xs flex gap-2 ${featured ? "text-stone/50" : "text-steel"}`}>
            <span className="text-brass font-medium">Emergência:</span> {emergency}
          </p>
          <p className={`font-body text-xs flex gap-2 ${featured ? "text-stone/50" : "text-steel"}`}>
            <span className="text-brass font-medium">Mão de obra:</span> {hours}
          </p>
        </div>

        {/* CTA */}
        <CTAButton
          variant={featured ? "solid" : "ghost"}
          waText={waText}
          size="sm"
          className="w-full justify-center"
        >
          Quero este plano
        </CTAButton>
      </div>
    </article>
  );
}
