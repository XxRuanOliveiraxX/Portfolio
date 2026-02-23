import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-[88vh] flex-col justify-center md:min-h-[92vh]"
      >
        <Reveal>
          <div className="relative pb-24 md:pb-28">
            <div className="max-w-3xl space-y-5">
              <p className="text-sm font-medium text-sky-400 md:text-base">
                &gt; Olá, eu sou
              </p>
              <h1 className="text-6xl font-semibold tracking-tight text-slate-50 md:text-7xl">
                Ruan dos Santos{" "}
                <span className="text-sky-400">Oliveira</span>
              </h1>
              <p className="text-2xl font-medium text-slate-300 md:text-3xl">
                Cientista de Dados
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
                Transformando dados em soluções inteligentes com{" "}
                <span className="font-semibold text-sky-300">
                  Machine Learning
                </span>{" "}
                e{" "}
                <span className="font-semibold text-sky-300">
                  Inteligência Artificial
                </span>
                .
              </p>
              <p className="flex items-center gap-2 text-sm text-slate-400 md:text-base">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                São José dos Campos – SP
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400 md:text-base"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-slate-950/10">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5v14m0 0 6-6m-6 6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Ver Projetos
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/20 px-7 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-500/80 hover:text-sky-300 md:text-base"
              >
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm bg-slate-50/10">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3v12m0 0 4-4m-4 4-4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 21h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Baixar Currículo
              </a>
              <div className="ml-2 flex items-center gap-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/20 text-slate-200 transition hover:border-sky-500/80 hover:text-sky-300"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8.5H4.5V23.5H.5V8.5ZM8.5 8.5H12.3V10.6H12.36C12.89 9.6 14.18 8.5 16.13 8.5 20.13 8.5 20.87 11.13 20.87 14.55V23.5H16.87V15.6C16.87 13.72 16.84 11.3 14.27 11.3 11.66 11.3 11.26 13.34 11.26 15.46V23.5H7.26V8.5H8.5Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/20 text-slate-200 transition hover:border-sky-500/80 hover:text-sky-300"
                  aria-label="GitHub"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.12 3.29 9.46 7.86 10.99.58.11.8-.25.8-.57v-2.1c-3.2.71-3.88-1.57-3.88-1.57-.52-1.36-1.28-1.72-1.28-1.72-1.05-.74.08-.73.08-.73 1.16.08 1.77 1.23 1.77 1.23 1.03 1.8 2.7 1.28 3.36.98.1-.76.4-1.28.72-1.57-2.56-.3-5.26-1.31-5.26-5.85 0-1.29.45-2.35 1.18-3.18-.12-.3-.51-1.5.11-3.14 0 0 .97-.32 3.18 1.22.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.54 3.18-1.22 3.18-1.22.62 1.64.23 2.84.11 3.14.73.83 1.18 1.89 1.18 3.18 0 4.55-2.7 5.55-5.27 5.85.41.36.78 1.08.78 2.18v3.23c0 .32.21.69.81.57 4.56-1.53 7.85-5.87 7.85-10.99C23.25 5.62 18.27.5 12 .5Z" />
                  </svg>
                </a>
              </div>
            </div>

            <a
              href="#sobre"
              className="animate-float-down-slow absolute bottom-1 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-sky-300 md:bottom-2"
              aria-label="Descer para ver mais"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5v14m0 0 6-6m-6 6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="space-y-6">
        <Reveal>
        <h2 className="text-xl font-semibold text-slate-50">
          <span className="mr-2 text-sky-400">👤</span>Sobre{" "}
          <span className="text-sky-400">Mim</span>
        </h2>
        <div className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 text-sm leading-relaxed text-slate-300 md:p-8 md:text-base">
          <p className="mb-3">
            Sou formado em Tecnologia em Análise e Desenvolvimento de
            Sistemas pela Universidade Paulista (UNIP). Possuo
            pós-graduação em Ciência de Dados e Inteligência Artificial
            e atualmente curso pós-graduação em Engenharia de Software
            com ênfase em Qualidade e Teste de Software.
          </p>
          <p className="mb-3">
            Tenho atuação voltada para{" "}
            <span className="font-semibold text-sky-300">
              Machine Learning e Inteligência Artificial
            </span>
            , aplicando Python e bibliotecas como Scikit-Learn e Pandas
            para análise e modelagem de dados.
          </p>
          <p className="mb-3">
            Atuei como estagiário no INPE (Instituto Nacional de
            Pesquisas Espaciais), desenvolvendo soluções com Spring Boot
            e APIs RESTful, e posteriormente como Analista de QA na
            Vello Performance, onde trabalhei com validação de sistemas,
            testes e garantia de qualidade de software.
          </p>
          <p>
            Meu objetivo é consolidar minha carreira na área de Ciência
            de Dados, aplicando técnicas de análise, modelagem preditiva
            e aprendizado de máquina para gerar soluções estratégicas
            orientadas a resultados.
          </p>
        </div>
        </Reveal>
      </section>

      {/* Skills Técnicas */}
      <section id="skills" className="space-y-6">
        <Reveal>
        <h2 className="text-xl font-semibold text-slate-50">
          <span className="mr-2 text-sky-400">&lt;/&gt;</span>Skills{" "}
          <span className="text-sky-400">Técnicas</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard
            title="Linguagens"
            items={["Python", "SQL", "Java"]}
          />
          <SkillCard
            title="Bibliotecas & Frameworks"
            items={[
              "Pandas",
              "NumPy",
              "Scikit-Learn",
              "TensorFlow",
              "PyTorch",
              "Matplotlib",
              "Seaborn",
            ]}
          />
          <SkillCard
            title="Machine Learning"
            items={[
              "Classificação",
              "Regressão",
              "Clustering",
              "NLP",
              "Deep Learning",
              "Feature Engineering",
              "Model Tuning",
              "Deploy de Modelos",
            ]}
          />
          <SkillCard
            title="Ferramentas"
            items={[
              "Git",
              "Docker",
              "AWS",
              "Azure",
              "GCP",
              "Power BI",
              "Tableau",
              "Jupyter Notebook",
            ]}
          />
          <SkillCard
            title="Banco de Dados"
            items={["MySQL", "PostgreSQL", "MongoDB", "Supabase"]}
          />
        </div>
        </Reveal>
      </section>

      {/* Projetos */}
      <section id="projetos" className="space-y-6">
        <Reveal>
        <h2 className="text-xl font-semibold text-slate-50">
          <span className="mr-2 text-sky-400">📂</span>Projetos
        </h2>
        <div className="space-y-4">
          <ProjectItem
            tag="NLP"
            title="Detector de Fake News com Machine Learning"
            description="Modelo de classificação para identificar notícias falsas a partir de textos, utilizando técnicas de NLP e algoritmos supervisionados."
          />
          <ProjectItem
            tag="Predição"
            title="WBK: Análise de Empréstimos e Inadimplência"
            description="Estudo de risco de crédito com modelos de previsão de inadimplência e análise exploratória de dados financeiros."
          />
          <ProjectItem
            tag="Backend"
            title="QR Code Generator (Spring Boot + AWS)"
            description="API para geração e armazenamento de QR Codes, com deploy em infraestrutura AWS."
          />
          <ProjectItem
            tag="ML Engineering"
            title="Track&Care: Localização Indoor com ML"
            description="Solução de localização indoor utilizando sinais de rede e modelos de Machine Learning para estimar a posição em ambientes internos."
          />
        </div>
        </Reveal>
      </section>

      {/* Experiência Profissional */}
      <section id="experiencia" className="space-y-6">
        <Reveal>
        <h2 className="text-xl font-semibold text-slate-50">
          <span className="mr-2 text-sky-400">💼</span>Experiência{" "}
          <span className="text-sky-400">Profissional</span>
        </h2>
        <div className="space-y-4 border-l border-slate-800 pl-6">
          <ExperienceItem
            company="Vello Performance LTDA"
            role="Analista de QA Júnior"
            period="Jul 2025 – Nov 2025"
            items={[
              "Planejamento e execução de testes funcionais e exploratórios.",
              "Validação de integrações via API e Webhooks.",
              "Criação de planos de teste.",
              "Reporte estruturado de bugs.",
              "Colaboração com times de produto e marketing.",
            ]}
          />
          <ExperienceItem
            company="INPE – Instituto Nacional de Pesquisas Espaciais"
            role="Estagiário em Operações de TI"
            period="Fev 2024 – Dez 2024"
            items={[
              "Desenvolvimento de Web Services RESTful com Spring Boot.",
              "Gestão de conteúdo na intranet.",
              "Criação de soluções e manutenção de documentos.",
              "Desenvolvimento de páginas no GOV.BR (Plone).",
            ]}
          />
        </div>
        </Reveal>
      </section>

      {/* Formação Acadêmica */}
      <section id="formacao" className="space-y-6">
        <Reveal>
        <h2 className="text-xl font-semibold text-slate-50">
          <span className="mr-2 text-sky-400">🎓</span>Formação{" "}
          <span className="text-sky-400">Acadêmica</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <EducationCard
            period="2025 – 2026"
            title="Pós-graduação em Engenharia de Software"
            institution="Anhanguera"
            detail="Ênfase em Qualidade e Teste de Software"
          />
          <EducationCard
            period="2025"
            title="Pós-graduação em Ciência de Dados e IA"
            institution="Anhanguera"
          />
          <EducationCard
            period="2022 – 2024"
            title="Tecnólogo em Análise e Desenvolvimento de Sistemas"
            institution="UNIP"
          />
          <EducationCard
            period="2018 – 2019"
            title="Técnico em Administração"
            institution="ETEC"
          />
        </div>
        </Reveal>
      </section>

      {/* Certificações */}
      <section id="certificacoes" className="space-y-6">
        <Reveal>
        <h2 className="text-xl font-semibold text-slate-50">
          <span className="mr-2 text-sky-400">🏅</span>Certificações
        </h2>
        <div className="space-y-4">
          <CertificationItem
            title="Python para Data Science"
            provider="Alura"
          />
          <CertificationItem
            title="Machine Learning"
            provider="Coursera"
          />
          <CertificationItem
            title="SQL Avançado"
            provider="Udemy"
          />
        </div>
        <p className="text-xs text-slate-500">
          Adicione aqui os certificados reais conforme forem sendo concluídos.
        </p>
        </Reveal>
      </section>

      {/* Contato + Rodapé */}
      <section
        id="contato"
        className="mt-10 border-t border-slate-800 pt-8 text-sm text-slate-400"
      >
        <Reveal>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            Aberto a oportunidades em Ciência de Dados, Machine Learning
            e QA.
          </p>
          <a
            href="mailto:seu-email@exemplo.com"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
          >
            Entrar em contato
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
          <span>© 2025 Ruan dos Santos Oliveira</span>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="transition hover:text-sky-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="transition hover:text-sky-300"
            >
              GitHub
            </a>
            <a
              href="mailto:seu-email@exemplo.com"
              className="transition hover:text-sky-300"
            >
              Email
            </a>
          </div>
        </div>
        </Reveal>
      </section>
    </>
  );
}

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-5">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type ProjectItemProps = {
  tag: string;
  title: string;
  description: string;
};

function ProjectItem({ tag, title, description }: ProjectItemProps) {
  return (
    <article className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
          {tag}
        </span>
      </div>
      <h3 className="mb-2 text-sm font-semibold text-slate-100 md:text-base">
        {title}
      </h3>
      <p className="text-xs leading-relaxed text-slate-400 md:text-sm">
        {description}
      </p>
    </article>
  );
}

type ExperienceItemProps = {
  company: string;
  role: string;
  period: string;
  items: string[];
};

function ExperienceItem({
  company,
  role,
  period,
  items,
}: ExperienceItemProps) {
  return (
    <article className="relative rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6">
      <span className="absolute -left-3 top-6 h-5 w-5 rounded-full border-2 border-sky-500 bg-slate-950" />
      <header className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-100 md:text-base">
            {company}
          </h3>
          <p className="text-xs text-sky-300 md:text-sm">{role}</p>
        </div>
        <span className="text-xs text-slate-400">{period}</span>
      </header>
      <ul className="space-y-2 text-xs leading-relaxed text-slate-400 md:text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[6px] h-1 w-1 rounded-full bg-sky-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

type EducationCardProps = {
  period: string;
  title: string;
  institution: string;
  detail?: string;
};

function EducationCard({
  period,
  title,
  institution,
  detail,
}: EducationCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-5">
      <p className="text-xs text-sky-300">{period}</p>
      <h3 className="mt-1 text-sm font-semibold text-slate-100 md:text-base">
        {title}
      </h3>
      <p className="text-xs text-slate-400 md:text-sm">{institution}</p>
      {detail ? (
        <p className="mt-2 text-xs text-slate-400 md:text-sm">{detail}</p>
      ) : null}
    </article>
  );
}

type CertificationItemProps = {
  title: string;
  provider: string;
};

function CertificationItem({ title, provider }: CertificationItemProps) {
  return (
    <article className="flex flex-col items-start justify-between gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-5 md:flex-row md:items-center">
      <div>
        <h3 className="text-sm font-semibold text-slate-100 md:text-base">
          {title}
        </h3>
        <p className="text-xs text-slate-400 md:text-sm">{provider}</p>
      </div>
      <div className="flex gap-2">
        <button className="rounded-full border border-slate-600 px-4 py-1.5 text-xs font-medium text-slate-100 transition hover:border-sky-500 hover:text-sky-300">
          Visualizar
        </button>
        <button className="rounded-full bg-sky-500 px-4 py-1.5 text-xs font-medium text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400">
          Download
        </button>
      </div>
    </article>
  );
}
