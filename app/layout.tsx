import type { Metadata } from "next";
import { Big_Shoulders_Display, Cormorant_Garamond, Epilogue } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-epilogue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha 3 Engenharia e Serviços | Manutenção Predial, Reformas e Fachadas em SP",
  description:
    "A Alpha 3 oferece manutenção predial com planos mensais, reformas comerciais e residenciais, e tratamento de fachadas de alto padrão em São Paulo. Solicite seu orçamento.",
  keywords: [
    "manutenção predial São Paulo",
    "reformas comerciais SP",
    "tratamento de fachadas",
    "manutenção elétrica e hidráulica",
    "engenharia predial",
    "Alpha 3 Engenharia",
  ],
  authors: [{ name: "Alpha 3 Engenharia e Serviços" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Alpha 3 Engenharia e Serviços",
    description:
      "Manutenção predial, reformas e fachadas para o mercado de médio e alto padrão em São Paulo.",
    siteName: "Alpha 3 Engenharia",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bigShoulders.variable} ${cormorant.variable} ${epilogue.variable}`}
    >
      <body className="antialiased font-body bg-stone text-ink overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brass focus:text-stone focus:font-body focus:text-sm focus:uppercase focus:tracking-wide"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
