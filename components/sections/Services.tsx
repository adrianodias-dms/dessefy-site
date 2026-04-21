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
            <div className="svc-icon" aria-hidden="true">🤖</div>
            <h3>Agentes de IA customizados</h3>
            <p>Soluções sob medida para automatizar processos específicos — monitoramento, triagem, consolidação de dados, relatórios e muito mais.</p>
          </div>
          <div className="svc-card reveal d2">
            <div className="svc-icon" aria-hidden="true">🔗</div>
            <h3>Integração com o que já existe</h3>
            <p>Conectamos aos sistemas, fontes de dados e ferramentas que o escritório já usa. Nenhuma migração, nenhuma ruptura operacional.</p>
          </div>
          <div className="svc-card reveal d3">
            <div className="svc-icon" aria-hidden="true">📈</div>
            <h3>Dashboards e relatórios</h3>
            <p>Visibilidade em tempo real da performance: carteira, produtividade, resultados e indicadores estratégicos consolidados automaticamente.</p>
          </div>
          <div className="svc-card reveal d4">
            <div className="svc-icon" aria-hidden="true">🔁</div>
            <h3>Melhoria contínua de performance</h3>
            <p>Não entregamos um produto e saímos. Acompanhamos os resultados, calibramos as soluções e evoluímos junto com o escritório.</p>
          </div>
          <div className="svc-card reveal d5">
            <div className="svc-icon" aria-hidden="true">🎯</div>
            <h3>Atuação estratégica</h3>
            <p>Com operação automatizada e dados estruturados, o gestor passa a ter clareza para decisões de crescimento, precificação e posicionamento.</p>
          </div>
          <div className="svc-card reveal d6">
            <div className="svc-icon" aria-hidden="true">📊</div>
            <h3>Soluções focadas em resultado</h3>
            <p>Cada projeto começa com um diagnóstico e termina com métricas claras de impacto. Medimos o que mudou — em dados.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
