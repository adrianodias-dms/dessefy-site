export default function WhyDessefy() {
  return (
    <section id="diferenciais" className="section" aria-labelledby="why-heading">
      <div className="hr-gradient" aria-hidden="true" />
      <div className="container">

        <div className="reveal" style={{ marginBottom: '52px' }}>
          <span className="section-eyebrow">Por Que a Dessefy</span>
          <h2 className="section-title" id="why-heading">
            Boutique de IA.<br />
            <span className="gradient-text">Não somos um software. Somos uma solução.</span>
          </h2>
        </div>

        <div className="why-layout">
          <div className="why-card reveal d1">
            <p className="why-card-quote">
              &ldquo;Cada solução é construída por quem entende o{' '}
              <span className="gradient-text">processo</span> e o{' '}
              <span className="gradient-text">negócio do cliente</span> ao mesmo tempo.&rdquo;
            </p>
            <p className="why-card-body">
              A Dessefy nasce do ecossistema DMS — integrando a expertise técnica do Salum Duque
              Advogados com a visão estratégica da DMS. Profundidade jurídica e visão de negócio
              na mesma solução. Nada genérico, nada de prateleira.
            </p>
          </div>

          <div className="why-list reveal d2">
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">✂️</div>
              <div className="why-item-text">
                <h4>Tailormade, não genérico</h4>
                <p>Cada solução é construída para o perfil do escritório — não um produto adaptado às pressas.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">🎯</div>
              <div className="why-item-text">
                <h4>Foco em resultado, não em feature</h4>
                <p>Definimos métricas de impacto antes de começar. Entregamos o que muda o negócio.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">🔒</div>
              <div className="why-item-text">
                <h4>Camada sobre o que já existe</h4>
                <p>Sem migração, sem ruptura. Inteligência sobre os sistemas que o escritório já usa.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon" aria-hidden="true">🔭</div>
              <div className="why-item-text">
                <h4>Visão integrada de negócio</h4>
                <p>Operação, estratégia e performance na mesma solução — diferencial exclusivo do ecossistema DMS.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
