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
            <div className="prob-icon" aria-hidden="true">⏱️</div>
            <h3>Trabalho manual excessivo</h3>
            <p>Tarefas repetitivas consomem o tempo que deveria estar na entrega de valor ao cliente — dia após dia.</p>
          </div>
          <div className="problem-card reveal d2">
            <div className="prob-icon" aria-hidden="true">📊</div>
            <h3>Gestão sem visibilidade</h3>
            <p>Sem dados consolidados, é impossível tomar decisões de negócio com segurança e rapidez.</p>
          </div>
          <div className="problem-card reveal d3">
            <div className="prob-icon" aria-hidden="true">🔄</div>
            <h3>Atuação reativa</h3>
            <p>O escritório responde a demandas em vez de antecipar oportunidades e riscos antes que se tornem problemas.</p>
          </div>
          <div className="problem-card reveal d4">
            <div className="prob-icon" aria-hidden="true">📉</div>
            <h3>Performance não mensurada</h3>
            <p>Sem métricas claras, não é possível identificar onde melhorar — nem onde há potencial real de crescimento.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
