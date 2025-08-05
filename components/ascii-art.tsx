"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface AsciiArtProps {
  name: string
}

export default function AsciiArt({ name }: AsciiArtProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [asciiFrames, setAsciiFrames] = useState<string[]>([])
  const [currentFrame, setCurrentFrame] = useState(0)

  useEffect(() => {
    const frames = generateAsciiFrames(name)
    setAsciiFrames(frames)

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length)
    }, 150)

    return () => clearInterval(interval)
  }, [name])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const getDistortedAscii = () => {
    if (!asciiFrames.length) return ""

    const ascii = asciiFrames[currentFrame]
    const lines = ascii.split("\n")

    if (dimensions.width === 0) return ascii

    const distortedLines = lines.map((line, lineIndex) => {
      const lineY = (lineIndex / lines.length) * dimensions.height
      const distanceFactor = 1 - Math.min(1, Math.sqrt(Math.pow((lineY - mousePosition.y) / dimensions.height, 2)) * 2)

      if (distanceFactor > 0.8 && line.trim().length > 0) {
        const chars = line.split("")
        const modIndex = Math.floor((mousePosition.x / dimensions.width) * chars.length)

        if (modIndex >= 0 && modIndex < chars.length) {
          const randomChar = "!@#$%^&*()_+-=[]{}|;:,.<>?/"[Math.floor(Math.random() * 30)]
          chars[modIndex] = randomChar
        }

        return chars.join("")
      }

      return line
    })

    return distortedLines.join("\n")
  }

  return (
    <motion.div
      ref={containerRef}
      className="w-full cursor-pointer select-none rounded-lg bg-background p-4 font-mono text-primary"
      onMouseMove={handleMouseMove}
      onClick={() => {
        setAsciiFrames(generateAsciiFrames(name))
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <pre className="overflow-x-auto whitespace-pre text-center text-xs sm:text-sm md:text-base">
        {getDistortedAscii()}
      </pre>
    </motion.div>
  )
}

function generateAsciiFrames(text: string): string[] {
  const characters = " .:-=+*#%@"
  const frames: string[] = []
  const frameCount = 5

  for (let frame = 0; frame < frameCount; frame++) {
    let asciiArt = ""
    const lines = text.split(" ")

    lines.forEach((word) => {
      let wordArt = ""

      wordArt += "+" + "-".repeat(word.length + 2) + "+\n"

      wordArt += "| "
      for (let i = 0; i < word.length; i++) {
        const char = word[i]
        const noiseLevel = (i + frame) % 3 === 0 ? 1 : 0
        wordArt += noiseLevel ? characters[Math.floor(Math.random() * characters.length)] : char
      }
      wordArt += " |\n"

      wordArt += "+" + "-".repeat(word.length + 2) + "+\n"

      asciiArt += wordArt + "\n"
    })

    frames.push(asciiArt)
  }

  return frames
}
