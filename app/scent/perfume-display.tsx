"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const PerfumeViewerR3F = dynamic(() => import("@/components/perfume-viewer-r3f"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-muted/20 rounded-lg">
      <p className="text-muted-foreground">Loading 3D perfume display...</p>
    </div>
  ),
})

export default function PerfumeDisplay({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={`w-full h-[500px] flex items-center justify-center bg-muted/20 rounded-lg ${className}`}>
        <p className="text-muted-foreground">Loading 3D perfume display...</p>
      </div>
    )
  }

  return <PerfumeViewerR3F className={className} />
}
