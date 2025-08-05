"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

const AsciiTorusKnot = dynamic(() => import("@/components/ascii-torusknot"), {
  ssr: false,
  loading: () => <div className="aspect-square w-full max-w-[300px] animate-pulse bg-muted rounded-md mx-auto"></div>,
})

export default function AsciiTorusKnotContainer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="aspect-square w-full max-w-[300px] animate-pulse bg-muted rounded-md mx-auto"></div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="aspect-square w-full max-w-[400px] mx-auto text-center">
        <AsciiTorusKnot />
      </div>
    </div>
  )
}
