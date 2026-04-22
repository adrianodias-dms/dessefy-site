import HeroCanvas from './HeroCanvas'

export default function Hero() {
  return (
    <section id="inicio" aria-label="Página inicial">
      <HeroCanvas />
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-body">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            LegalTech &nbsp;·&nbsp; Inteligência Artificial &nbsp;·&nbsp; Advocacia
          </div>

          <h1 className="hero-title">
            Inteligência operacional
            <br />
            <span className="gradient-text">sob medida</span>
          </h1>

          <p className="hero-sub">Dessefy entrega automação por IA e inteligência de dados para escritórios de advocacia que querem crescer com eficiência, controle e visão estratégica.</p>

          <div className="hero-actions">
            <a href="#contato" className="btn btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Agendar diagnóstico gratuito
            </a>
            <a href="#solucao" className="btn btn-ghost">
              Conheça a solução
            </a>
          </div>

          <div className="hero-footer">
            <span className="hero-footer-label">Ecossistema</span>
            <span className="eco-pill">DMS Estratégia e Gestão</span>
            <span className="eco-pill">Salum Duque Advogados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
