import Link from "next/link";

const WA_URL =
  "https://wa.me/5511XXXXXXXXXXX?text=Olá%2C+vim+pelo+site+e+quero+um+orçamento";

const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Planos de Manutenção", href: "#planos" },
  { label: "Reformas", href: "#reformas" },
  { label: "Fachadas", href: "#fachadas" },
  { label: "Por que Alpha 3", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-stone/70" role="contentinfo">
      <div className="max-w-site mx-auto px-6 lg:px-10 pt-16 pb-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-stone/10">
          {/* Col 1 — Marca */}
          <div>
            <p className="font-display font-900 text-3xl text-stone uppercase tracking-tight mb-3">
              Alpha<span className="text-brass">3</span>
            </p>
            <p className="font-feature italic text-stone/50 text-base mb-4">
              Engenharia e Serviços
            </p>
            <p className="font-body text-sm text-stone/50 leading-relaxed mb-6">
              Manutenção predial, reformas e fachadas para o mercado de médio e
              alto padrão em São Paulo.
            </p>
            <p className="font-body text-xs text-stone/30 tracking-widest uppercase">
              CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>

          {/* Col 2 — Navegação */}
          <div>
            <h3 className="font-body text-xs font-medium tracking-widest uppercase text-stone/40 mb-5">
              Navegação
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-stone/60 hover:text-brass transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3 className="font-body text-xs font-medium tracking-widest uppercase text-stone/40 mb-5">
              Fale Conosco
            </h3>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-body text-sm font-medium mb-6 hover:bg-[#20b859] transition-colors duration-200"
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <div className="space-y-2">
              <p className="font-body text-sm text-stone/50">
                contato@alpha3engenharia.com.br
              </p>
              <p className="font-body text-sm text-stone/40">
                Seg–Sex: 8h às 18h
              </p>
              <p className="font-body text-sm text-stone/40">
                São Paulo – SP
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-stone/30">
            © {year} Alpha 3 Engenharia e Serviços. Todos os direitos
            reservados.
          </p>
          <p className="font-feature italic text-xs text-stone/20">
            Construído com atenção ao detalhe.
          </p>
        </div>
      </div>
    </footer>
  );
}
