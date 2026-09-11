"use client";

import { FormEvent, useState } from "react";

const textArrow = "\u2197\uFE0E";

const services = [
  {
    number: "01",
    title: "Sites institucionais",
    text: "Uma presença digital forte, clara e alinhada ao posicionamento da sua empresa.",
  },
  {
    number: "02",
    title: "Landing pages",
    text: "Páginas estratégicas, rápidas e focadas em transformar visitantes em oportunidades.",
  },
  {
    number: "03",
    title: "Lojas virtuais",
    text: "Experiências de compra elegantes, intuitivas e preparadas para vender em qualquer tela.",
  },
];

const projects = [
  {
    tag: "Automotivo",
    title: "Aureon Motors",
    text: "Experiência premium para uma seleção exclusiva de veículos.",
    className: "aureon",
    symbol: "A",
    href: "https://aureon-motors.vercel.app/",
  },
  {
    tag: "Moda & E-commerce",
    title: "Atticus Atelier",
    text: "Loja virtual minimalista com foco no produto e na conversão.",
    className: "atticus",
    symbol: "AT",
    href: "https://atticus-atelier-xi.vercel.app/",
  },
  {
    tag: "Serviços premium",
    title: "Maison Navalha",
    text: "Agendamento simples em uma identidade sofisticada e marcante.",
    className: "maison",
    symbol: "M",
    href: "https://maison-navalha.vercel.app/",
  },
  {
    tag: "Pet shop & Serviços",
    title: "Mundo Pet",
    text: "Experiência digital acolhedora para cuidados, produtos e serviços pet.",
    className: "atticus",
    symbol: "MP",
    href: "https://mundo-pet-two.vercel.app/",
  },
  {
    tag: "Gastronomia",
    title: "Brasa & Oliva",
    text: "Presença digital sofisticada para um restaurante de identidade marcante.",
    className: "maison",
    symbol: "B&O",
    href: "https://brasa-oliva-restaurante.vercel.app/",
  },
  {
    tag: "Saúde & Odontologia",
    title: "Clínica Odontológica Lumina",
    text: "Experiência digital completa para uma odontologia humana, moderna e acolhedora.",
    className: "aureon",
    symbol: "L",
    href: "https://luminina-odonto.vercel.app/",
  },
  {
  tag: "Gastronomia & Hamburgueria",
  title: "Braza Burguer",
  text: "Experiência digital moderna e marcante para uma hamburgueria com identidade forte e apelo visual.",
  className: "aureon",
  symbol: "B",
  href: "https://braza-burguer.vercel.app/",
},
{
  tag: "Comércio Exterior & Maquinário",
  title: "Jher International",
  text: "Presença digital moderna para uma empresa de importação, exportação e comércio de maquinário pesado.",
  className: "aureon",
  symbol: "J",
  href: "https://jher-international.vercel.app/",
}
];


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const nome = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const projeto = String(data.get("message") || "");

    const mensagem = `Olá! Vim pelo site da RLA TECH.

Nome: ${nome}
E-mail: ${email}
Projeto: ${projeto}`;

    const whatsapp = `https://wa.me/5511933154173?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(whatsapp, "_blank", "noopener,noreferrer");

    form.reset();
    setSent(true);
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="RLA TECH — início">
          <span>RLA</span> TECH<i>.</i>
        </a>

        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Navegação principal"
        >
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>

          <a href="#produtos" onClick={() => setMenuOpen(false)}>
            Produtos
          </a>

          <a href="#projetos" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>

          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            Sobre
          </a>

          <a
            className="navCta"
            href="#contato"
            onClick={() => setMenuOpen(false)}
          >
            Vamos conversar <b>{textArrow}</b>
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="heroGlow" />

        <div className="eyebrow">
          <span /> Tecnologia, estratégia e design
        </div>

        <h1>
          Ideias que viram
          <br />
          <em>experiências digitais.</em>
        </h1>

        <p>
          Criamos sites, sistemas e produtos digitais que reduzem trabalho,
          organizam processos e ajudam empresas a crescer.
        </p>

        <div className="heroActions">
          <a className="primaryButton" href="#contato">
            Começar um projeto <span>{textArrow}</span>
          </a>

          <a className="textLink" href="#produtos">
            Conheça nossas soluções <span>↓</span>
          </a>
        </div>

        <div className="codeCard" aria-hidden="true">
          <div className="codeTop">
            <span />
            <span />
            <span />
            <small>rla.tech</small>
          </div>

          <div className="codeBody">
            <b>01</b> &lt;<i>experience</i>&gt;
            <br />
            <b>02</b>&nbsp;&nbsp; design = <strong>“intencional”</strong>
            <br />
            <b>03</b>&nbsp;&nbsp; performance = <strong>“rápida”</strong>
            <br />
            <b>04</b>&nbsp;&nbsp; resultado = <strong>“real”</strong>
            <br />
            <b>05</b> &lt;/<i>experience</i>&gt;
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Nossos pilares">
        <div>
          DESIGN QUE CONECTA <i>✦</i> TECNOLOGIA QUE IMPULSIONA <i>✦</i>{" "}
          RESULTADOS QUE IMPORTAM <i>✦</i> DESIGN QUE CONECTA
        </div>
      </section>

      <section className="section services" id="servicos">
        <div className="sectionIntro">
          <div>
            <span className="sectionNumber">01 / SERVIÇOS</span>

            <h2>
              Soluções digitais feitas
              <br />
              para <em>fazer diferença.</em>
            </h2>
          </div>

          <p>
            Do conceito ao lançamento, cuidamos de cada detalhe para entregar
            uma presença digital que representa o melhor da sua marca.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.number}>
              <span>{service.number}</span>

              <div className="serviceIcon">
                {service.number === "01"
                  ? "⌁"
                  : service.number === "02"
                    ? textArrow
                    : "◇"}
              </div>

              <h3>{service.title}</h3>
              <p>{service.text}</p>

              <a
                href="#contato"
                aria-label={`Solicitar ${service.title}`}
              >
                Saiba mais <b>{textArrow}</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section productSection" id="produtos">
        <div className="sectionIntro productIntro">
          <div>
            <span className="sectionNumber">02 / PRODUTO RLA TECH</span>

            <h2>
              Planilhas financeiras viram
              <br />
              <em>decisões mais claras.</em>
            </h2>
          </div>

          <p>
            O RLA Insight organiza os dados financeiros da empresa, identifica
            situações que merecem atenção e apresenta cada descoberta de forma
            clara e rastreável.
          </p>
        </div>

        <div className="productShowcase">
          <div className="productCopy">
            <span className="productBadge">PLATAFORMA DE ANÁLISE FINANCEIRA</span>

            <h3>RLA Insight</h3>

            <p className="productLead">
              Uma plataforma criada para reduzir o trabalho manual de análise
              e ajudar empresas a entenderem melhor seus lançamentos, sem
              inventar valores e sem esconder a origem dos resultados.
            </p>

            <div className="insightFlow" aria-label="Etapas do RLA Insight">
              {["Importação", "Normalização", "Análise", "Relatório", "Gestão"].map(
                (step, index) => (
                  <div key={step}>
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <span>{step}</span>
                  </div>
                ),
              )}
            </div>

            <div className="productActions">
              <a
                className="primaryButton"
                href="https://rla-insight.rlatech.workers.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer o RLA Insight <span>{textArrow}</span>
              </a>

              <a className="textLink" href="#contato">
                Solicitar acesso <span>{textArrow}</span>
              </a>
            </div>
          </div>

          <div className="insightPreview" aria-label="Recursos do RLA Insight">
            <div className="previewTop">
              <div>
                <span />
                <span />
                <span />
              </div>
              <small>rla.insight / visão geral</small>
            </div>

            <div className="previewSummary">
              <div>
                <small>DADOS PROCESSADOS</small>
                <strong>Claros e organizados</strong>
              </div>
              <span>ANÁLISE RASTREÁVEL</span>
            </div>

            <div className="previewGrid">
              <article>
                <span>01</span>
                <h4>Importação inteligente</h4>
                <p>
                  Recebe planilhas, reconhece diferentes cabeçalhos, datas e
                  formatos de valores e prepara os lançamentos para análise.
                </p>
              </article>

              <article>
                <span>02</span>
                <h4>Descobertas financeiras</h4>
                <p>
                  Sinaliza possíveis duplicidades, aumentos, multas, juros,
                  recorrências e valores fora do padrão.
                </p>
              </article>

              <article>
                <span>03</span>
                <h4>Fluxo de caixa</h4>
                <p>
                  Organiza entradas, saídas, vencimentos e situação dos
                  lançamentos para acompanhar cada mês.
                </p>
              </article>

              <article>
                <span>04</span>
                <h4>Relatórios explicados</h4>
                <p>
                  Mostra o motivo de cada alerta e os lançamentos utilizados,
                  permitindo conferir a origem dos números.
                </p>
              </article>

              <article>
                <span>05</span>
                <h4>Histórico das análises</h4>
                <p>
                  Mantém as análises organizadas para consultar resultados e
                  acompanhar informações anteriores.
                </p>
              </article>

              <article>
                <span>06</span>
                <h4>Cálculos confiáveis</h4>
                <p>
                  Totais e comparações seguem regras objetivas, com
                  reconciliação dos valores e sem estimativas inventadas.
                </p>
              </article>
            </div>

            <div className="previewNote">
              <span>✓</span>
              <p>
                As descobertas são apresentadas como pontos de atenção e
                oportunidades potenciais até a validação da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects" id="projetos">
        <div className="projectHeading">
          <div>
            <span className="sectionNumber">03 / PROJETOS</span>

            <h2>
              Projetos que falam
              <br />
              <em>por si.</em>
            </h2>
          </div>

          <p>
            Cada projeto nasce de um desafio único. O resultado é uma solução
            digital feita sob medida para gerar valor.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <a
              className="projectCard"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              aria-label={`Abrir projeto ${project.title}`}
            >
              <div className={`projectVisual ${project.className}`}>
                <span>{project.symbol}</span>

                <div className="mockNav">
                  <i />
                  <i />
                  <i />
                </div>

                <div className="mockLine" />
                <div className="mockButton" />

                <b className="viewProject">
                  Ver projeto {textArrow}
                </b>
              </div>

              <div className="projectCopy">
                <small>{project.tag}</small>

                <h3>
                  {project.title} <b>{textArrow}</b>
                </h3>

                <p>{project.text}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="aboutStatement">
          <span className="sectionNumber">04 / SOBRE A RLA TECH</span>

          <h2>
            Não fazemos apenas sites.
            <br />
            Criamos a <em>próxima versão</em>
            <br />
            da sua marca.
          </h2>
        </div>

        <div className="aboutCopy">
          <p>
            A RLA TECH nasceu com um objetivo simples: tornar o digital mais
            humano, bonito e eficiente.
          </p>

          <p>
            Acreditamos que um bom site não é apenas uma vitrine. É uma
            ferramenta que comunica, conecta e transforma.
          </p>

          <div className="stats">
            <div>
              <strong>100%</strong>
              <span>Responsivo</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Atenção aos detalhes</span>
            </div>

            <div>
              <strong>1:1</strong>
              <span>Atendimento próximo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="process section">
        <span className="sectionNumber">05 / COMO TRABALHAMOS</span>

        <h2>
          Do primeiro “olá”
          <br />
          ao site <em>no ar.</em>
        </h2>

        <div className="processGrid">
          {[
            ["01", "Imersão", "Entendemos seu negócio, público e objetivos."],
            [
              "02",
              "Estratégia",
              "Definimos estrutura, conteúdo e direção visual.",
            ],
            [
              "03",
              "Criação",
              "Transformamos a estratégia em uma experiência única.",
            ],
            [
              "04",
              "Lançamento",
              "Revisamos, publicamos e acompanhamos cada detalhe.",
            ],
          ].map((item) => (
            <article key={item[0]}>
              <b>{item[0]}</b>
              <span />
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <div>
          <span className="sectionNumber">VAMOS CRIAR JUNTOS</span>

          <h2>
            Sua ideia merece
            <br />
            sair do papel.
          </h2>

          <p>
            Conte um pouco sobre o que você precisa. A gente cuida do resto.
          </p>

          <div className="contactTag">
            Disponível para novos projetos <span />
          </div>
        </div>

        <form onSubmit={submit}>
          <label>
            Seu nome
            <input
              required
              name="name"
              placeholder="Como podemos te chamar?"
            />
          </label>

          <label>
            Seu melhor e-mail
            <input
              required
              type="email"
              name="email"
              placeholder="voce@empresa.com"
            />
          </label>

          <label>
            Sobre o projeto
            <textarea
              required
              name="message"
              rows={3}
              placeholder="Conte brevemente o que você tem em mente..."
            />
          </label>

          <button type="submit">
            Enviar pelo WhatsApp <span>{textArrow}</span>
          </button>

          {sent && (
            <p className="success" role="status">
              WhatsApp aberto! Confirme o envio da mensagem.
            </p>
          )}
        </form>
      </section>

      <a
        className="whatsappFloat"
        href="https://wa.me/5511933154173?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20RLA%20TECH%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a RLA TECH pelo WhatsApp"
      >
        <svg
          className="whatsappIcon"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.7l6.4-1.7A12.7 12.7 0 1 0 16 3.2Zm0 22.8c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8 1 1-3.7-.3-.4a10.1 10.1 0 1 1 9 4.9Zm5.5-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.7-4.2-3.8-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6l-1-2.4c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.2-.2-.4-.3-.7-.4Z" />
        </svg>

        <span>Fale conosco</span>
      </a>

      <footer>
        <a className="brand" href="#inicio">
          <span>RLA</span> TECH<i>.</i>
        </a>

        <p>Sites que conectam marcas e pessoas.</p>

        <div>
          <a href="#servicos">Serviços</a>
          <a href="#produtos">Produtos</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
        </div>

        <small>© 2026 RLA TECH. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
