export default function Problem() {
  return (
    <section id="problema" className="section" aria-labelledby="prob-heading">
      <div className="hr-gradient" aria-hidden="true" />
      <div className="container">

        <div className="problem-intro reveal">
          <span className="section-eyebrow">O Problema</span>
          <h2 className="section-title" id="prob-heading">
            Crescer sem estrutura operacional<br />
            <span className="gradient-text">custa caro.</span>
          </h2>
          <p className="section-sub">
            Escritórios em expansão acumulam gargalos invisíveis. Sem processos estruturados,
            o crescimento gera caos — não resultado.
          </p>
        </div>

        <div className="problem-grid">
          <div className="problem-card reveal d1">
            <div className="prob-icon">
              {/* Clock */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Trabalho manual excessivo</h3>
            <p>Tarefas repetitivas consomem o tempo que deveria estar na entrega de valor ao cliente — dia após dia.</p>
          </div>
          <div className="problem-card reveal d2">
            <div className="prob-icon">
              {/* BarChart */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3>Gestão sem visibilidade</h3>
            <p>Sem dados consolidados, é impossível tomar decisões de negócio com segurança e rapidez.</p>
          </div>
          <div className="problem-card reveal d3">
            <div className="prob-icon">
              {/* RefreshCw */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="23 4 23 10 17 10"/>
                <polyline points="1 20 1 14 7 14"/>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
              </svg>
            </div>
            <h3>Atuação reativa</h3>
            <p>O escritório responde a demandas em vez de antecipar oportunidades e riscos antes que se tornem problemas.</p>
          </div>
          <div className="problem-card reveal d4">
            <div className="prob-icon">
              {/* TrendingDown */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
                <polyline points="17 18 23 18 23 12"/>
              </svg>
            </div>
            <h3>Performance não mensurada</h3>
            <p>Sem métricas claras, não é possível identificar onde melhorar — nem onde há potencial real de crescimento.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
