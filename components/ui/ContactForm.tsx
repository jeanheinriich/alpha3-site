"use client";

import { useState, type FormEvent } from "react";

const WA_NUMBER = "5511955833244";

const SERVICES = [
  { value: "", label: "Selecione um serviço" },
  { value: "Manutenção Predial", label: "Manutenção Predial" },
  { value: "Reformas", label: "Reformas" },
  { value: "Fachadas", label: "Fachadas" },
  { value: "Outro", label: "Outro" },
];

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const nome = (data.get("nome") as string).trim();
    const telefone = (data.get("telefone") as string).trim();

    if (!nome) errs.nome = "Nome é obrigatório.";
    if (!telefone) errs.telefone = "Telefone é obrigatório.";
    else if (!/^[\d\s()\-+]{8,}$/.test(telefone))
      errs.telefone = "Informe um telefone válido.";

    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});

    const nome     = (data.get("nome")     as string).trim();
    const empresa  = (data.get("empresa")  as string).trim();
    const telefone = (data.get("telefone") as string).trim();
    const servico  = (data.get("servico")  as string).trim();
    const mensagem = (data.get("mensagem") as string).trim();

    const linhas = [
      "📋 *Novo contato pelo site Alpha 3*",
      "",
      `*Nome:* ${nome}`,
      empresa  ? `*Empresa:* ${empresa}`           : null,
      `*Telefone:* ${telefone}`,
      servico  ? `*Serviço:* ${servico}`            : null,
      mensagem ? `*Mensagem:* ${mensagem}`          : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(linhas)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  }

  const fieldBase =
    "w-full px-4 py-3 bg-stone border font-body text-sm text-ink placeholder-steel/60 focus:outline-none focus:border-brass transition-colors duration-200";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-label="Formulário de contato"
    >
      {/* Nome */}
      <div>
        <label
          htmlFor="nome"
          className="block font-body text-xs uppercase tracking-widest text-steel mb-2"
        >
          Nome <span aria-hidden="true" className="text-brass">*</span>
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          required
          autoComplete="name"
          placeholder="Seu nome completo"
          className={`${fieldBase} ${errors.nome ? "border-red-500" : "border-concrete"}`}
          aria-describedby={errors.nome ? "nome-error" : undefined}
          aria-invalid={!!errors.nome}
        />
        {errors.nome && (
          <p id="nome-error" role="alert" className="font-body text-xs text-red-500 mt-1">
            {errors.nome}
          </p>
        )}
      </div>

      {/* Empresa */}
      <div>
        <label
          htmlFor="empresa"
          className="block font-body text-xs uppercase tracking-widest text-steel mb-2"
        >
          Empresa <span className="text-steel/40">(opcional)</span>
        </label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          autoComplete="organization"
          placeholder="Nome da empresa"
          className={`${fieldBase} border-concrete`}
        />
      </div>

      {/* Telefone */}
      <div>
        <label
          htmlFor="telefone"
          className="block font-body text-xs uppercase tracking-widest text-steel mb-2"
        >
          Telefone <span aria-hidden="true" className="text-brass">*</span>
        </label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          required
          autoComplete="tel"
          placeholder="(11) 9 0000-0000"
          className={`${fieldBase} ${errors.telefone ? "border-red-500" : "border-concrete"}`}
          aria-describedby={errors.telefone ? "telefone-error" : undefined}
          aria-invalid={!!errors.telefone}
        />
        {errors.telefone && (
          <p id="telefone-error" role="alert" className="font-body text-xs text-red-500 mt-1">
            {errors.telefone}
          </p>
        )}
      </div>

      {/* Serviço */}
      <div>
        <label
          htmlFor="servico"
          className="block font-body text-xs uppercase tracking-widest text-steel mb-2"
        >
          Serviço de interesse
        </label>
        <select
          id="servico"
          name="servico"
          className={`${fieldBase} border-concrete bg-stone cursor-pointer`}
        >
          {SERVICES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Mensagem */}
      <div>
        <label
          htmlFor="mensagem"
          className="block font-body text-xs uppercase tracking-widest text-steel mb-2"
        >
          Mensagem <span className="text-steel/40">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Descreva brevemente o que você precisa..."
          className={`${fieldBase} border-concrete resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full px-6 py-4 bg-brass text-ink font-body text-sm font-medium tracking-widest uppercase btn-fill hover:text-stone transition-colors duration-200"
      >
        Enviar pelo WhatsApp
      </button>

      <p className="font-body text-xs text-steel/60 text-center">
        Ao enviar, o WhatsApp será aberto com sua mensagem já preenchida.
      </p>
    </form>
  );
}
