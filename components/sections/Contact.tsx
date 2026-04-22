export default function Contact() {
  return (
    <section id="contato" className="section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-box reveal">
          <h2 id="cta-heading">
            Vamos conversar sobre
            <br />
            <span className="gradient-text">o seu escritório</span>
          </h2>
          <p className="cta-sub">Um diagnóstico gratuito para mapear onde a IA pode gerar mais impacto no seu escritório hoje.</p>
          <a href="mailto:contato@dessefy.com.br" className="cta-email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            contato@dessefy.com.br
          </a>
          <div className="cta-actions">
            <a
              href="mailto:contato@dessefy.com.br?subject=Diagnóstico%20Gratuito%20—%20Dessefy&body=Olá%2C%20gostaria%20de%20agendar%20um%20diagnóstico%20gratuito%20com%20a%20Dessefy."
              className="btn btn-primary"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Agendar diagnóstico gratuito
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
