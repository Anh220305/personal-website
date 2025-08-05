"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

interface PerfumeViewerProps {
  className?: string
}

export default function PerfumeViewer({ className }: PerfumeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    scene.background = null 

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    )
    camera.position.z = 8
    camera.position.y = 2

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true, 
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    containerRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.minPolarAngle = Math.PI / 4
    controls.maxPolarAngle = Math.PI / 2

    const textureLoader = new THREE.TextureLoader()

    const createTomFordBottle = () => {
      const group = new THREE.Group()

      const bodyGeometry = new THREE.BoxGeometry(1, 1.8, 0.5)
      const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x2a0808,
        transparent: true,
        opacity: 0.9,
        roughness: 0.2,
        metalness: 0.1,
        transmission: 0.4,
      })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)

      const capGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.4)
      const capMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x000000,
        roughness: 0.2,
        metalness: 0.8,
      })
      const cap = new THREE.Mesh(capGeometry, capMaterial)
      cap.position.y = 1.1

      const labelGeometry = new THREE.PlaneGeometry(0.8, 0.6)
      const labelMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
      })
      const label = new THREE.Mesh(labelGeometry, labelMaterial)
      label.position.z = 0.26
      label.position.y = 0.2

      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 256
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "white"
        context.fillRect(0, 0, 256, 256)
        context.font = "bold 24px Arial"
        context.fillStyle = "black"
        context.textAlign = "center"
        context.fillText("TOM FORD", 128, 80)
        context.fillText("CHERRY", 128, 120)
        context.fillText("SMOKE", 128, 160)
        context.font = "16px Arial"
        context.fillText("EAU DE PARFUM", 128, 200)
      }

      const texture = new THREE.CanvasTexture(canvas)
      labelMaterial.map = texture

      group.add(body, cap, label)
      return group
    }

    const createMakerDreamBottle = () => {
      const group = new THREE.Group()

      const bodyGeometry = new THREE.CylinderGeometry(0.4, 0.4, 1.6, 32, 8)
      const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xf4f4e8,
        transparent: true,
        opacity: 0.8,
        roughness: 0.1,
        metalness: 0.2,
        transmission: 0.6,
      })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)

      const capGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16)
      const capMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x1a1a1a,
        roughness: 0.4,
        metalness: 0.6,
      })
      const cap = new THREE.Mesh(capGeometry, capMaterial)
      cap.position.y = 1

      const labelGeometry = new THREE.PlaneGeometry(0.6, 0.4)
      const labelMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
      })
      const label = new THREE.Mesh(labelGeometry, labelMaterial)
      label.position.z = 0.41
      label.position.y = 0.1

      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 256
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "white"
        context.fillRect(0, 0, 256, 256)
        context.font = "bold 20px Arial"
        context.fillStyle = "black"
        context.textAlign = "center"
        context.fillText("THE MAKER", 128, 100)
        context.fillText("dream", 128, 140)
        context.font = "14px Arial"
        context.fillText("eau de parfum", 128, 180)
      }

      const texture = new THREE.CanvasTexture(canvas)
      labelMaterial.map = texture

      group.add(body, cap, label)
      return group
    }

    const createJoMaloneBottle = () => {
      const group = new THREE.Group()

      const bodyGeometry = new THREE.BoxGeometry(1, 2, 0.5)
      const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.7,
        roughness: 0.1,
        metalness: 0.2,
        transmission: 0.8,
      })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)

      const capGeometry = new THREE.SphereGeometry(0.25, 32, 32)
      const capMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xc0c0c0,
        roughness: 0.1,
        metalness: 0.9,
      })
      const cap = new THREE.Mesh(capGeometry, capMaterial)
      cap.position.y = 1.2

      const labelGeometry = new THREE.PlaneGeometry(0.8, 1)
      const labelMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
      })
      const label = new THREE.Mesh(labelGeometry, labelMaterial)
      label.position.z = 0.26
      label.position.y = 0

      const canvas = document.createElement("canvas")
      canvas.width = 256
      canvas.height = 512
      const context = canvas.getContext("2d")
      if (context) {
        context.fillStyle = "white"
        context.fillRect(0, 0, 256, 512)
        context.font = "bold 20px Arial"
        context.fillStyle = "black"
        context.textAlign = "center"
        context.fillText("JO MALONE", 128, 150)
        context.fillText("LONDON", 128, 180)

        context.strokeRect(108, 220, 40, 40)

        context.font = "16px Arial"
        context.fillText("English Pear", 128, 300)
        context.fillText("&", 128, 325)
        context.fillText("Freesia", 128, 350)
      }

      const texture = new THREE.CanvasTexture(canvas)
      labelMaterial.map = texture

      group.add(body, cap, label)
      return group
    }

    const tomFordBottle = createTomFordBottle()
    const makerDreamBottle = createMakerDreamBottle()
    const joMaloneBottle = createJoMaloneBottle()

    tomFordBottle.position.x = -2.5
    makerDreamBottle.position.x = 0
    joMaloneBottle.position.x = 2.5

    scene.add(tomFordBottle, makerDreamBottle, joMaloneBottle)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const spotLight = new THREE.SpotLight(0xffffff, 1)
    spotLight.position.set(-5, 5, 0)
    spotLight.castShadow = true
    scene.add(spotLight)



    function animate() {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div className={className}>
      <div ref={containerRef} className="w-full h-[500px] rounded-lg" />
      <div className="flex justify-between px-8 mt-6 text-center">
        <div className="flex-1">
          <p className="font-medium">Tom Ford Cherry Smoke</p>
          <p className="text-sm text-muted-foreground">10/10</p>
          <p className="text-xs text-muted-foreground mt-1">ABSOLUTE CINEMA. SHOWSTOPPER. WONDROUS</p>
        </div>
        <div className="flex-1">
          <p className="font-medium">The Maker Dream</p>
          <p className="text-sm text-muted-foreground">11/10</p>
          <p className="text-xs text-muted-foreground mt-1">
            Literally broke my scale. Sophisticated vanilla with musky notes.
          </p>
        </div>
        <div className="flex-1">
          <p className="font-medium">Jo Malone English Pear</p>
          <p className="text-sm text-muted-foreground">9.5/10</p>
          <p className="text-xs text-muted-foreground mt-1">Class in a bottle. Unique skin-like scent.</p>
        </div>
      </div>
    </div>
  )
}
