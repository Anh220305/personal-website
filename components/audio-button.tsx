"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX } from "lucide-react"

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(
      "https:
    )
    audioRef.current = audio

    const handleCanPlay = () => {
      setIsReady(true)
    }

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handleError = (e: Event) => {
      setIsReady(false)
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("ended", handleEnded)
    audio.addEventListener("error", handleError)

    audio.load()

    return () => {
      audio.pause()
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("ended", handleEnded)
      audio.removeEventListener("error", handleError)
      audio.src = ""
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current || !isReady) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((err) => {
        })
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleAudio}
      disabled={!isReady}
      className="h-9 w-9 rounded-full"
      aria-label={isPlaying ? "Mute" : "Play"}
      title={isPlaying ? "Mute" : "Play Lo-Fi Music"}
    >
      {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  )
}
