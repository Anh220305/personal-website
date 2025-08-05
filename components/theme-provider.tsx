"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  attribute?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
  enableSystem = true,
  disableTransitionOnChange = false,
  attribute = "data-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<Theme>("light")

  useEffect(() => {
    const root = window.document.documentElement
    const storedTheme = localStorage.getItem(storageKey)

    if (storedTheme) {
      setTheme(storedTheme as Theme)
    } else if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme("system")
      setResolvedTheme(systemTheme)
    }
  }, [enableSystem, storageKey])

  useEffect(() => {
    const root = window.document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const applyTheme = (newTheme: Theme) => {
      let resolvedTheme = newTheme

      if (newTheme === "system") {
        resolvedTheme = mediaQuery.matches ? "dark" : "light"
      }

      setResolvedTheme(resolvedTheme)

      if (disableTransitionOnChange) {
        root.classList.add("no-transitions")
      }

      if (resolvedTheme === "dark") {
        root.classList.add("dark")
        root.setAttribute(attribute, "dark")
      } else {
        root.classList.remove("dark")
        root.setAttribute(attribute, "light")
      }

      if (disableTransitionOnChange) {
        window.getComputedStyle(root).getPropertyValue("opacity")
        root.classList.remove("no-transitions")
      }
    }

    applyTheme(theme)

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme, disableTransitionOnChange, attribute])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme)
      setTheme(newTheme)
    },
    resolvedTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
