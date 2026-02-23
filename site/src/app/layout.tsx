import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruan dos Santos Oliveira | Cientista de Dados",
  description:
    "Portfólio de Ruan dos Santos Oliveira, cientista de dados focado em Machine Learning e Inteligência Artificial.",
};

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#contato", label: "Contato" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        <div className="page-shell relative text-slate-100">
          <div className="page-grid" />

          <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#020617]/85 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <a
                href="#hero"
                className="text-lg font-semibold tracking-tight text-sky-400"
              >
                {"<Ruan/>"}
              </a>

              <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                {navLinks.slice(0, -1).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-sky-400"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contato"
                  className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
                >
                  Contato
                </a>
              </nav>

              <a
                href="#contato"
                className="inline-flex rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 md:hidden"
              >
                Contato
              </a>
            </div>
          </header>

          <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-20 pt-10 md:pt-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
