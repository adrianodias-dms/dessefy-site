export default function Services() {
  return (
    <section id="servicos" className="section" aria-labelledby="svc-heading">
      <div className="hr-gradient" aria-hidden="true" />
      <div className="container">

        <div className="services-intro reveal">
          <span className="section-eyebrow">O Que Entregamos</span>
          <h2 className="section-title" id="svc-heading">
            Uma camada de IA construída<br />
            <span className="gradient-text">para o seu escritório.</span>
          </h2>
          <p className="section-sub">
            Soluções customizadas, sem prateleira — desenvolvidas para o perfil específico do seu escritório.
          </p>
        </div>

        <div className="services-grid">
          <div className="svc-card reveal d1">
            <div className="svc-icon">
              {/* Cpu */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="9" y="9" width="6" height="6"/>
                <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
                <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
                <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
                <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
              </svg>
            </div>
            <h3>Agentes de IA customizados</h3>
            <p>Soluções sob medida para automatizar processos específicos — monitoramento, triagem, consolidação de dados, relatórios e muito mais.</p>
          </div>
          <div className="svc-card reveal d2">
            <div className="svc-icon">
              {/* Link */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </div>
            <h3>Integração com o que já existe</h3>
            <p>Conectamos aos sistemas, fontes de dados e ferramentas que o escritório já usa. Nenhuma migração, nenhuma ruptura operacional.</p>
          </div>
          <div className="svc-card reveal d3">
            <div className="svc-icon">
              {/* TrendingUp */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                <polyline points="17 6 23 6 23 12"/>
              </svg>
            </div>
            <h3>Dashboards e relatórios</h3>
            <p>Visibilidade em tempo real da performance: carteira, produtividade, resultados e indicadores estratégicos consolidados automaticamente.</p>
          </div>
          <div className="svc-card reveal d4">
            <div className="svc-icon">
              {/* RotateCcw */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 .49-4.95"/>
              </svg>
            </div>
            <h3>Melhoria contínua de performance</h3>
            <p>Não entregamos um produto e saímos. Acompanhamos os resultados, calibramos as soluções e evoluímos junto com o escritório.</p>
          </div>
          <div className="svc-card reveal d5">
            <div className="svc-icon">
              {/* Target */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3>Atuação estratégica</h3>
            <p>Com operação automatizada e dados estruturados, o gestor passa a ter clareza para decisões de crescimento, precificação e posicionamento.</p>
          </div>
          <div className="svc-card reveal d6">
            <div className="svc-icon">
              {/* Activity */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Soluções focadas em resultado</h3>
            <p>Cada projeto começa com um diagnóstico e termina com métricas claras de impacto. Medimos o que mudou — em dados.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
