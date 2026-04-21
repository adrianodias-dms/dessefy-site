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
              <div className="why-icon">
                {/* Scissors */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                  <line x1="20" y1="4" x2="8.12" y2="15.88"/>
                  <line x1="14.47" y1="14.48" x2="20" y2="20"/>
                  <line x1="8.12" y1="8.12" x2="12" y2="12"/>
                </svg>
              </div>
              <div className="why-item-text">
                <h4>Tailormade, não genérico</h4>
                <p>Cada solução é construída para o perfil do escritório — não um produto adaptado às pressas.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                {/* Target */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <div className="why-item-text">
                <h4>Foco em resultado, não em feature</h4>
                <p>Definimos métricas de impacto antes de começar. Entregamos o que muda o negócio.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                {/* Shield */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="why-item-text">
                <h4>Camada sobre o que já existe</h4>
                <p>Sem migração, sem ruptura. Inteligência sobre os sistemas que o escritório já usa.</p>
              </div>
            </div>
            <div className="why-item">
              <div className="why-icon">
                {/* Layers */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                  <polyline points="2 17 12 22 22 17"/>
                  <polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
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
