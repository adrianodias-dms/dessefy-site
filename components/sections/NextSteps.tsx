export default function NextSteps() {
  return (
    <section id="proximos-passos" className="section" aria-labelledby="steps-heading">
      <div className="hr-gradient" aria-hidden="true" />
      <div className="container">
        <div className="steps-intro reveal">
          <span className="section-eyebrow">Próximos Passos</span>
          <h2 className="section-title" id="steps-heading">
            Do primeiro contato
            <br />
            <span className="gradient-text">à transformação operacional</span>
          </h2>
          <p className="section-sub">Um caminho claro e estruturado — com resultados mensuráveis desde o início.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card reveal d1">
            <div className="step-ball" aria-label="Etapa 1">
              1
            </div>
            <h3>Reunião de diagnóstico</h3>
            <p>Entendemos os processos, gargalos e prioridades do escritório.</p>
          </div>
          <div className="step-card reveal d2">
            <div className="step-ball" aria-label="Etapa 2">
              2
            </div>
            <h3>Proposta customizada</h3>
            <p>Apresentamos a solução desenhada para o seu perfil, com escopo, métricas e investimento.</p>
          </div>
          <div className="step-card reveal d3">
            <div className="step-ball" aria-label="Etapa 3">
              3
            </div>
            <h3>Projeto piloto</h3>
            <p>Implantamos um agente ou módulo prioritário e medimos os resultados em 30 dias.</p>
          </div>
          <div className="step-card reveal d4">
            <div className="step-ball" aria-label="Etapa 4">
              4
            </div>
            <h3>Expansão da solução</h3>
            <p>Com o piloto validado, expandimos para os demais processos e áreas do escritório.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
