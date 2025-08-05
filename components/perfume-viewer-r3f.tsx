"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Text } from "@react-three/drei"
import type * as THREE from "three"

function TomFordBottle(props: any) {
  const groupRef = useRef<THREE.Group>(null)
  const [isRotating, setIsRotating] = useState(false)
  const [rotationY, setRotationY] = useState(0)

  useFrame(() => {
    if (groupRef.current && isRotating) {
      const rotationIncrement = (Math.PI * 2) / 120

      setRotationY((prev) => {
        const newRotation = prev + rotationIncrement
        if (newRotation >= Math.PI * 2) {
          setIsRotating(false)
          return 0
        }
        return newRotation
      })
    }
  })

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY
    }
  }, [rotationY])

  return (
    <group ref={groupRef} {...props} onClick={() => setIsRotating(true)}>
      
      
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1, 1.8, 0.5]} />
        <meshPhysicalMaterial
          color="#2a0808"
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.1}
          transmission={0.4}
        />
      </mesh>

      
      <mesh position={[0, 1.1, 0]} castShadow>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshPhysicalMaterial color="#000000" roughness={0.2} metalness={0.8} />
      </mesh>

      
      <mesh position={[0, 0.2, 0.26]}>
        <planeGeometry args={[0.8, 0.6]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>

      
      <Text position={[0, 0.4, 0.27]} fontSize={0.08} color="#000000" anchorX="center" anchorY="middle">
        TOM FORD
      </Text>

      <Text position={[0, 0.25, 0.27]} fontSize={0.08} color="#000000" anchorX="center" anchorY="middle">
        CHERRY
      </Text>

      <Text position={[0, 0.1, 0.27]} fontSize={0.08} color="#000000" anchorX="center" anchorY="middle">
        SMOKE
      </Text>

      <Text position={[0, -0.05, 0.27]} fontSize={0.06} color="#000000" anchorX="center" anchorY="middle">
        EAU DE PARFUM
      </Text>
    </group>
  )
}

function MakerDreamBottle(props: any) {
  const groupRef = useRef<THREE.Group>(null)
  const [isRotating, setIsRotating] = useState(false)
  const [rotationY, setRotationY] = useState(0)

  useFrame(() => {
    if (groupRef.current && isRotating) {
      const rotationIncrement = (Math.PI * 2) / 120

      setRotationY((prev) => {
        const newRotation = prev + rotationIncrement
        if (newRotation >= Math.PI * 2) {
          setIsRotating(false)
          return 0
        }
        return newRotation
      })
    }
  })

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY
    }
  }, [rotationY])

  return (
    <group ref={groupRef} {...props} onClick={() => setIsRotating(true)}>
      
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 1.6, 32, 8]} />
        <meshPhysicalMaterial
          color="#f4f4e8"
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.2}
          transmission={0.6}
        />
      </mesh>

      
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
        <meshPhysicalMaterial color="#1a1a1a" roughness={0.4} metalness={0.6} />
      </mesh>

      
      <mesh position={[0, 0.1, 0.41]}>
        <planeGeometry args={[0.6, 0.4]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>

      
      <Text position={[0, 0.2, 0.42]} fontSize={0.07} color="#000000" anchorX="center" anchorY="middle">
        THE MAKER
      </Text>

      <Text position={[0, 0.05, 0.42]} fontSize={0.07} color="#000000" anchorX="center" anchorY="middle">
        dream
      </Text>

      <Text position={[0, -0.1, 0.42]} fontSize={0.05} color="#000000" anchorX="center" anchorY="middle">
        eau de parfum
      </Text>
    </group>
  )
}

function JoMaloneBottle(props: any) {
  const groupRef = useRef<THREE.Group>(null)
  const [isRotating, setIsRotating] = useState(false)
  const [rotationY, setRotationY] = useState(0)

  useFrame(() => {
    if (groupRef.current && isRotating) {
      const rotationIncrement = (Math.PI * 2) / 120

      setRotationY((prev) => {
        const newRotation = prev + rotationIncrement
        if (newRotation >= Math.PI * 2) {
          setIsRotating(false)
          return 0
        }
        return newRotation
      })
    }
  })

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotationY
    }
  }, [rotationY])

  return (
    <group ref={groupRef} {...props} onClick={() => setIsRotating(true)}>
      
      <mesh position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1, 2, 0.5]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.2}
          transmission={0.8}
        />
      </mesh>

      
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.25, 32, 32]} />
        <meshPhysicalMaterial color="#c0c0c0" roughness={0.1} metalness={0.9} />
      </mesh>

      
      <mesh position={[0, 0, 0.26]}>
        <planeGeometry args={[0.8, 1]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>

      
      <Text position={[0, 0.4, 0.27]} fontSize={0.07} color="#000000" anchorX="center" anchorY="middle">
        JO MALONE
      </Text>

      <Text position={[0, 0.3, 0.27]} fontSize={0.07} color="#000000" anchorX="center" anchorY="middle">
        LONDON
      </Text>

      
      <mesh position={[0, 0.1, 0.27]}>
        <boxGeometry args={[0.2, 0.2, 0.01]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      <Text position={[0, -0.2, 0.27]} fontSize={0.06} color="#000000" anchorX="center" anchorY="middle">
        English Pear
      </Text>

      <Text position={[0, -0.3, 0.27]} fontSize={0.06} color="#000000" anchorX="center" anchorY="middle">
        & Freesia
      </Text>
    </group>
  )
}

export default function PerfumeViewerR3F({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="w-full h-[500px] rounded-lg">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 2, 8]} />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />

          <TomFordBottle position={[-2.5, 0, 0]} />
          <MakerDreamBottle position={[0, 0, 0]} />
          <JoMaloneBottle position={[2.5, 0, 0]} />

          <Environment preset="studio" />

          <ambientLight intensity={0.7} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <spotLight
            position={[-5, 5, 0]}
            intensity={1}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
        </Canvas>
      </div>

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
