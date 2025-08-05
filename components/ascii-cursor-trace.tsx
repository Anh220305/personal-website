"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AsciiParticle {
  id: number
  x: number
  y: number
  char: string
  opacity: number
}

export default function AsciiCursorTrace() {
  const [particles, setParticles] = useState<AsciiParticle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particleIdRef = useRef(0)
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef(0)
  const isActiveRef = useRef(false)

  const asciiChars = "01#!*@$%&+=-_><|/\\[]{}();:,.~^`"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const dx = Math.abs(e.clientX - lastPositionRef.current.x)
      const dy = Math.abs(e.clientY - lastPositionRef.current.y)

      if (dx > 5 || dy > 5) {
        createParticle(e.clientX, e.clientY)
        lastPositionRef.current = { x: e.clientX, y: e.clientY }
      }
    }

    const handleMouseEnter = () => {
      isActiveRef.current = true
    }

    const handleMouseLeave = () => {
      isActiveRef.current = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    const animateParticles = () => {
      setParticles((prevParticles) => {
        return prevParticles
          .map((particle) => ({
            ...particle,
            opacity: particle.opacity - 0.02, 
          }))
          .filter((particle) => particle.opacity > 0) 
      })

      frameRef.current = requestAnimationFrame(animateParticles)
    }

    frameRef.current = requestAnimationFrame(animateParticles)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const createParticle = (x: number, y: number) => {
    if (!isActiveRef.current) return

    const char = asciiChars[Math.floor(Math.random() * asciiChars.length)]

    const offsetX = (Math.random() - 0.5) * 20
    const offsetY = (Math.random() - 0.5) * 20

    const newParticle: AsciiParticle = {
      id: particleIdRef.current++,
      x: x + offsetX,
      y: y + offsetY,
      char,
      opacity: 1,
    }

    setParticles((prevParticles) => [...prevParticles, newParticle])
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute font-mono text-lg"
            style={{
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              color: `rgba(var(--foreground), ${particle.opacity})`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: particle.opacity }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {particle.char}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
