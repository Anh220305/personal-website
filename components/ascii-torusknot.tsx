"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"
import * as THREE from "three"

export default function AsciiTorusKnot() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    const chars = " .:-+*=%@#"
    const isDark = resolvedTheme === "dark"

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(isDark ? 0x000000 : 0xffffff)

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 3

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(300, 300)

    const rendererContainer = document.createElement("div")
    rendererContainer.style.position = "absolute"
    rendererContainer.style.top = "-9999px"
    rendererContainer.style.left = "-9999px"
    rendererContainer.appendChild(renderer.domElement)
    document.body.appendChild(rendererContainer)

    const asciiOutput = document.createElement("pre")
    asciiOutput.style.margin = "0"
    asciiOutput.style.lineHeight = "0.5em"
    asciiOutput.style.fontSize = "0.35em"
    asciiOutput.style.letterSpacing = "0.05em"
    asciiOutput.style.fontFamily = "monospace"
    asciiOutput.style.whiteSpace = "pre"
    asciiOutput.style.overflow = "visible"
    asciiOutput.style.textAlign = "center"
    asciiOutput.style.width = "100%"
    asciiOutput.style.display = "flex"
    asciiOutput.style.justifyContent = "center"
    asciiOutput.style.alignItems = "center"
    asciiOutput.style.color = isDark ? "#ffffff" : "#000000"
    containerRef.current.appendChild(asciiOutput)

    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    canvas.width = 80
    canvas.height = 80

    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 128, 32)
    const material = new THREE.MeshStandardMaterial({
      color: isDark ? 0xffffff : 0x000000,
    })
    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1.2)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    const spotLight = new THREE.SpotLight(0xffffff, 0.8)
    spotLight.position.set(-5, 5, 0)
    scene.add(spotLight)

    const animate = () => {
      requestAnimationFrame(animate)

      torusKnot.rotation.x += 0.008
      torusKnot.rotation.y += 0.012

      renderer.render(scene, camera)

      if (context) {
        context.drawImage(renderer.domElement, 0, 0, canvas.width, canvas.height)
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

        let asciiText = ""
        for (let y = 0; y < canvas.height; y++) {
          let line = ""
          for (let x = 0; x < canvas.width; x++) {
            const pixelIndex = (y * canvas.width + x) * 4
            const r = imageData.data[pixelIndex]
            const g = imageData.data[pixelIndex + 1]
            const b = imageData.data[pixelIndex + 2]

            const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255

            let charIndex
            if (isDark) {
              charIndex = Math.floor(brightness * (chars.length - 1))
            } else {
              charIndex = Math.floor((1 - brightness) * (chars.length - 1))
            }
            line += chars[charIndex]
          }
          asciiText += line + "\n"
        }

        asciiOutput.textContent = asciiText
      }
    }

    animate()

    return () => {
      if (containerRef.current && asciiOutput) {
        containerRef.current.removeChild(asciiOutput)
      }
      document.body.removeChild(rendererContainer)
    }
  }, [resolvedTheme]) 

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div
        ref={containerRef}
        className="relative w-full max-w-[300px] h-[300px] overflow-hidden flex items-center justify-center mx-auto bg-background border border-border rounded-lg"
      />
      <p className="mt-4 text-center text-xs text-muted-foreground">
        <a
          href="https:
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:underline"
        >
          torusknot
        </a>{" "}
        inspired by{" "}
        <a
          href="https:
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary hover:underline"
        >
          three-ascii.framer.website
        </a>
      </p>
    </div>
  )
}
