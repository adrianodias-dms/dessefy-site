'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number; y: number
  vx: number; vy: number
  r: number; a: number
  ph: number; ps: number
}

const NODE_COUNT = 55
const MAX_DIST = 160

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current as HTMLCanvasElement
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0
    let nodes: Node[] = []
    let animId: number

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function mkNode(): Node {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2.5 + 1,
        a: Math.random() * 0.5 + 0.2,
        ph: Math.random() * Math.PI * 2,
        ps: 0.018 + Math.random() * 0.018,
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            const a = (1 - dist / MAX_DIST) * 0.14
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = (i + j) % 3 === 0
              ? `rgba(25,118,210,${a})`
              : `rgba(0,188,212,${a})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        n.ph += n.ps
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1

        const pa = n.a + Math.sin(n.ph) * 0.14

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,188,212,${pa})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 2.4, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,188,212,${pa * 0.18})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resize()
      nodes.forEach((n) => {
        n.x = Math.min(n.x, W)
        n.y = Math.min(n.y, H)
      })
    }

    resize()
    nodes = Array.from({ length: NODE_COUNT }, mkNode)
    draw()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" aria-hidden="true" />
}
