"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WA_URL =
  "https://wa.me/5511955833244?text=Olá%2C+vim+pelo+site+da+Alpha+3+e+gostaria+de+um+orçamento.";

const NAV_LINKS = [
  { label: "Manutenção", href: "#manutencao" },
  { label: "Fachadas", href: "#fachadas" },
  { label: "Engenharia", href: "#engenharia" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-sm border-b border-ink-light shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-site mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          href="#"
          className="font-display font-800 text-xl lg:text-2xl tracking-tight text-stone uppercase"
          aria-label="Alpha 3 — Início"
        >
          Alpha<span className="text-brass">3</span>
          <span className="hidden sm:inline font-body font-300 text-stone/50 text-xs ml-2 tracking-widest uppercase normal-case">
            Engenharia
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-body text-sm text-stone/70 hover:text-brass tracking-wide uppercase transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — âmbar com texto navy */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brass text-ink font-body text-xs font-medium tracking-widest uppercase btn-fill hover:text-stone transition-colors duration-200"
        >
          <svg
            aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 text-stone"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true" className="block w-6 space-y-1.5">
            <span
              className={`block h-0.5 bg-current transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu — fundo navy */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-ink border-t border-stone/10 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 space-y-4" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm text-stone/70 hover:text-brass tracking-wide uppercase transition-colors duration-200 block py-1"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-5 py-3 bg-brass text-ink font-body text-xs font-medium tracking-widest uppercase"
            >
              Falar no WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
