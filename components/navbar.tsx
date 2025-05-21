import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

interface LinkInfo {
  name: string,
  href: string
}

interface LinkProps {
  links: LinkInfo[]
}

export function Navbar({ links }: LinkProps) {

  return (
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">CEDRIC</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav links={ links }/>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

  )
}
