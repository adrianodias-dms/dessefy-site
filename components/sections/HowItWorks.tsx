export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section" aria-labelledby="process-heading">
      <div className="container">

        <div className="process-intro reveal">
          <span className="section-eyebrow">Como Funciona</span>
          <h2 className="section-title" id="process-heading">
            Do diagnóstico<br />
            <span className="gradient-text">à evolução contínua.</span>
          </h2>
          <p className="section-sub">
            Um processo estruturado e transparente — do mapeamento dos gargalos à entrega de resultados mensuráveis.
          </p>
        </div>

        <div className="timeline" role="list">
          <div className="t-step reveal d1" role="listitem">
            <div className="t-num" aria-label="Etapa 1">1</div>
            <div className="t-body">
              <h3>Diagnóstico</h3>
              <p>Mapeamos os processos e gargalos do escritório, identificando onde a IA gera mais impacto no menor tempo.</p>
            </div>
          </div>
          <div className="t-step reveal d2" role="listitem">
            <div className="t-num" aria-label="Etapa 2">2</div>
            <div className="t-body">
              <h3>Desenho da solução</h3>
              <p>Estruturamos o agente ou camada de automação customizada para o seu perfil e prioridades específicas.</p>
            </div>
          </div>
          <div className="t-step reveal d3" role="listitem">
            <div className="t-num" aria-label="Etapa 3">3</div>
            <div className="t-body">
              <h3>Integração</h3>
              <p>Conectamos às fontes de dados e ferramentas já em uso pelo escritório — sem migração, sem ruptura.</p>
            </div>
          </div>
          <div className="t-step reveal d4" role="listitem">
            <div className="t-num" aria-label="Etapa 4">4</div>
            <div className="t-body">
              <h3>Implantação</h3>
              <p>Ativamos a solução, calibramos os resultados e capacitamos a equipe para máxima adoção e impacto.</p>
            </div>
          </div>
          <div className="t-step reveal d5" role="listitem">
            <div className="t-num" aria-label="Etapa 5">5</div>
            <div className="t-body">
              <h3>Evolução contínua</h3>
              <p>Acompanhamos os indicadores e evoluímos a solução conforme o escritório cresce e suas necessidades mudam.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
