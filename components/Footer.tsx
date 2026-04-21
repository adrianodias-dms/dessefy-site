import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <a href="#inicio" aria-label="Dessefy — voltar ao início">
            <Image src="/images/logotipo-no-bg.png" alt="Dessefy" width={120} height={30} className="footer-logo" />
          </a>
          <p className="footer-copy">
            © 2026 Dessefy · Inteligência operacional sob medida
            <br />
            Uma iniciativa do ecossistema DMS | Salum Duque Advogados
          </p>
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="mailto:contato@dessefy.com.br">contato@dessefy.com.br</a>
            <a href="https://dessefy.com.br" target="_blank" rel="noopener noreferrer">
              dessefy.com.br
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
