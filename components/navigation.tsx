"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import AudioButton from "@/components/audio-button"
import Terminal from "@/components/terminal"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Principles", path: "/core-values" },
  { name: "Library", path: "/library" },
  { name: "Scent", path: "/scent" },
  { name: "Terminal", path: "#terminal" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleNavClick = (path: string) => {
    if (path === "#terminal") {
      setTerminalOpen(true)
      setMobileMenuOpen(false)
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 z-10 w-full bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
          <Link href="/" className="text-xl font-bold">
            MADN
          </Link>

          
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path} className="relative">
                  {item.path === "#terminal" ? (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={cn(
                        "block py-2 text-muted-foreground hover:text-primary transition-colors",
                        pathname === item.path && "text-primary",
                      )}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                          layoutId="navbar-indicator"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          
          <div className="flex items-center space-x-4">
            <AudioButton />
            <ThemeToggle />

            
            <button
              className="md:hidden flex items-center rounded border border-muted-foreground/40 px-3 py-2 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http:
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-4 pb-4 bg-background/95 backdrop-blur-sm border-t border-border">
            <ul className="space-y-2 pt-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  {item.path === "#terminal" ? (
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className="block w-full text-left py-3 px-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.path}
                      className={cn(
                        "block py-3 px-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors",
                        pathname === item.path && "text-primary bg-muted/30",
                      )}
                      onClick={() => handleNavClick(item.path)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  )
}
