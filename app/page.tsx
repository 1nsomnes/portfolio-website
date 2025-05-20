import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectShowcase } from "@/components/project-showcase"
import { MobileNav } from "@/components/mobile-nav"

import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { portfolioData } from "@/lib/data"

export const metadata: Metadata = {
  title: "Cedric Claessens | Portfolio",
  description: "Software Engineer and Mathematician",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">CEDRIC</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container flex items-center justify-center min-h-screen py-12 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm Cedric Claessens
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
                Software Engineering and Mathematics 
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="container py-24 sm:py-32 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I'm a student studying Computer Science and Mathematics. I first started programming 
                in middle school when I created games in Unity and C#. 
                Since then, I have made lots of games and participated in many game jams.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Currently, I'm more focused on the intersection of mathematics and coding. 
                In particular I am interested in simulation using math to model naturally ocurring phenomena. 
                Additionally, I enjoy concepts from machine learning and information theory.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Outside of coding and school, I like to maintain a well-balanced lifestyle including reading, sports such as pickleball, 
                tennis, bouldering, skiing, etc... and volunteering.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/headshot.jpg"
                alt="Cedric Claessens"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32 bg-muted/50 px-4 md:px-6">
          <ProjectShowcase projects={portfolioData.projects.projects} />
        </section>

        <Skills data={portfolioData.skills} id="skills" />
        <Contact data={portfolioData.contact} id="contact" />

      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Cedric Claessens. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/1nsomnes" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/cedric-claessens-412414250/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
