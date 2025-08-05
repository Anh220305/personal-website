import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import AsciiCursorTrace from "@/components/ascii-cursor-trace"
import { Average } from "next/font/google"
import type { Metadata } from "next"
import { Suspense } from "react"

const average = Average({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Minh Anh Dong Nguyen",
  description: "Personal website of Minh Anh Dong Nguyen",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={average.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Suspense fallback={null}>
            <AsciiCursorTrace />
            <Navigation />
            <div className="pt-16">{children}</div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
