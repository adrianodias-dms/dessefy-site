'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#problema', label: 'O Problema' },
  { href: '#solucao', label: 'A Solução' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#ecossistema', label: 'Ecossistema' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id)
        })
      },
      { threshold: 0.45 },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <nav id="navbar" ref={navRef} className={scrolled ? 'scrolled' : ''} aria-label="Navegação principal">
        <div className="container nav-inner">
          <a href="#inicio" aria-label="Dessefy — Início">
            <Image src="/images/logotipo-no-bg.png" alt="Dessefy" width={160} height={38} className="nav-logo" priority />
          </a>

          <ul className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={activeSection === link.href.slice(1) ? 'is-active' : ''}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#contato" className="btn btn-primary">
              Falar com a Dessefy
            </a>
          </div>

          <button className={`nav-burger${drawerOpen ? ' open' : ''}`} id="burger" aria-label="Abrir menu" aria-expanded={drawerOpen} onClick={() => setDrawerOpen((o) => !o)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-drawer" className={drawerOpen ? 'open' : ''} role="dialog" aria-label="Menu de navegação">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={closeDrawer}>
            {link.label}
          </a>
        ))}
        <a href="#contato" className="btn btn-primary" onClick={closeDrawer}>
          Falar com a Dessefy
        </a>
      </div>
    </>
  )
}
