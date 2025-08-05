"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

const PerfumeViewerR3F = dynamic(() => import("@/components/perfume-viewer-r3f"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-muted/20 rounded-lg">
      <p className="text-muted-foreground">Loading 3D perfume display...</p>
    </div>
  ),
})

export function PerfumeViewerClient({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Suspense
        fallback={
          <div className="w-full h-[500px] flex items-center justify-center bg-muted/20 rounded-lg">
            <p className="text-muted-foreground">Loading 3D perfume display...</p>
          </div>
        }
      >
        <PerfumeViewerR3F className="w-full" />
      </Suspense>
    </div>
  )
}
