"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AudioTestPage() {
  const [activeTab, setActiveTab] = useState<"embedded" | "direct">("embedded")

  return (
    <div className="container mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-6">Audio Test Page</h1>

      <div className="mb-6 flex space-x-2">
        <Button variant={activeTab === "embedded" ? "default" : "outline"} onClick={() => setActiveTab("embedded")}>
          Embedded Player (Recommended)
        </Button>
        <Button variant={activeTab === "direct" ? "default" : "outline"} onClick={() => setActiveTab("direct")}>
          Direct Audio (May Not Work)
        </Button>
      </div>

      {activeTab === "embedded" && (
        <div className="space-y-8">
          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Internet Archive Embedded Player</h2>
            <p className="mb-4">This player is provided by the Internet Archive and should work in most browsers:</p>
            <iframe
              src="https:
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              title="Radiohead - Weird Fishes/Arpeggi"
            ></iframe>
          </div>

          <div className="p-4 border rounded-lg bg-muted">
            <h2 className="text-xl font-semibold mb-4">About This Approach</h2>
            <p className="mb-2">
              The embedded player approach uses an iframe that loads the Internet Archive's own player. This is more
              reliable than direct audio playback because:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>It avoids CORS (Cross-Origin Resource Sharing) issues</li>
              <li>The Internet Archive handles format compatibility</li>
              <li>It works across different browsers and devices</li>
              <li>It provides playback controls and track information</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "direct" && (
        <div className="space-y-8">
          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Direct Audio Playback</h2>
            <p className="mb-4 text-amber-600">
              Note: Direct audio playback from the Internet Archive may not work due to CORS restrictions or format
              compatibility issues.
            </p>
            <div className="space-y-6">
              <div className="p-4 border rounded bg-muted">
                <p className="mb-2 font-medium">OGG Format:</p>
                <audio
                  controls
                  src="https:
                  className="w-full"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div className="p-4 border rounded bg-muted">
                <p className="mb-2 font-medium">MP3 Format:</p>
                <audio
                  controls
                  src="https:
                  className="w-full"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>

              <div className="p-4 border rounded bg-muted">
                <p className="mb-2 font-medium">Alternative URL Format:</p>
                <audio
                  controls
                  src="https:
                  className="w-full"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>

          <div className="p-4 border rounded-lg bg-muted">
            <h2 className="text-xl font-semibold mb-4">Why Direct Playback May Fail</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>CORS restrictions prevent browsers from accessing files across domains</li>
              <li>The audio format may not be supported by your browser</li>
              <li>The Internet Archive may limit direct access to media files</li>
              <li>Network issues or temporary service disruptions</li>
            </ul>
            <p className="mt-4 font-medium">
              Recommendation: Use the embedded player tab instead for reliable playback.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Audio Source Information</h2>
        <p className="mb-2">Audio sourced from the Internet Archive:</p>
        <a
          href="https:
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline break-all"
        >
          https:
        </a>
      </div>
    </div>
  )
}
