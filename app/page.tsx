import AsciiArt from "@/components/ascii-art"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Minh Anh Dong Nguyen | Home",
  description: "Personal website of Minh Anh Dong Nguyen",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="w-full max-w-5xl">
        <AsciiArt name="Minh Anh Dong Nguyen" />
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">Welcome to my personal space on the internet.</p>
          <p className="mt-2 text-muted-foreground">Explore the tabs above to learn more about me.</p>
          <p className="mt-4 text-sm text-muted-foreground italic">Experienced best on desktop</p>
        </div>
      </div>
    </main>
  )
}
