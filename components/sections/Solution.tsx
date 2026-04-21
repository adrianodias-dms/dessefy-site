export default function Solution() {
  return (
    <section id="solucao" className="section" aria-labelledby="sol-heading">
      <div className="container">

        <div className="solution-layout">
          <div className="reveal">
            <span className="section-eyebrow">A Solução</span>
            <h2 className="section-title" id="sol-heading">
              Não substituímos o que você usa.<br />
              <span className="gradient-text">Adicionamos inteligência sobre ele.</span>
            </h2>
          </div>
          <div className="reveal d2">
            <p className="section-sub">
              Dessefy elimina trabalho manual e transforma dados dispersos em decisões estratégicas
              — sem migração, sem ruptura operacional.
            </p>
          </div>
        </div>

        <div className="solution-grid">
          <div className="sol-card reveal d1">
            <div className="sol-num" aria-hidden="true">01</div>
            <h3>Automação do trabalho manual</h3>
            <p>Identificamos as tarefas repetitivas que mais consomem tempo e as automatizamos com agentes de IA customizados, liberando o escritório para o que gera valor.</p>
          </div>
          <div className="sol-card reveal d2">
            <div className="sol-num" aria-hidden="true">02</div>
            <h3>Visibilidade e controle</h3>
            <p>Consolidamos dados dispersos em dashboards e relatórios que dão ao gestor uma visão clara de performance, carteira e resultados — em tempo real.</p>
          </div>
          <div className="sol-card reveal d3">
            <div className="sol-num" aria-hidden="true">03</div>
            <h3>Atuação estratégica</h3>
            <p>Com processos automáticos e dados estruturados, o escritório passa a antecipar movimentos, identificar oportunidades e decidir com base em inteligência.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
