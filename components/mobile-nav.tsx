"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface LinkInfo {
  name: string,
  href: string
}

interface LinkProps {
  links: LinkInfo[]
}

export function MobileNav({ links }: LinkProps ) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // When opening the menu, prevent scrolling
    if (!isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  // Close the menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false)
    document.body.style.overflow = ""
  }

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay */}
      {isOpen && <div className="h-screen fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={toggleMenu} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-3/4 max-w-sm bg-background p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-bold">Menu</span>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-8 flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={ handleLinkClick }
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
 
          <div className="flex items-center">
            <span className="mr-2 text-sm">Theme:</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </div>
  )
}
