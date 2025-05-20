import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ProjectShowcase } from "@/components/project-showcase"
import { MobileNav } from "@/components/mobile-nav"

export const metadata: Metadata = {
  title: "John Doe | Portfolio",
  description: "Frontend Developer & UI/UX Designer",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block">JOHN DOE</span>
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
                Hi, I'm John Doe
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
                Frontend Developer & UI/UX Designer
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
                I'm a passionate frontend developer and UI/UX designer with 5 years of experience creating beautiful,
                functional, and user-centered digital experiences.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Currently, I'm focused on building accessible, human-centered products at Acme Inc. My expertise
                includes React, Next.js, TypeScript, and modern UI frameworks.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                When I'm not coding, you'll find me hiking, reading sci-fi novels, or experimenting with new cooking
                recipes.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="John Doe"
                width={400}
                height={400}
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32 bg-muted/50 px-4 md:px-6">
          <ProjectShowcase projects={projects} />
        </section>

        <section id="skills" className="container py-24 sm:py-32 px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">Technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {skills.map((skill) => (
                <Card key={skill} className="flex items-center justify-center p-6 h-24">
                  <span className="font-medium">{skill}</span>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container py-24 sm:py-32 bg-muted/50 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project
                in mind or just want to connect!
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:hello@johndoe.com" className="text-lg hover:text-primary">
                    hello@johndoe.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary"
                  >
                    linkedin.com/in/johndoe
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  <a
                    href="https://github.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary"
                  >
                    github.com/johndoe
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Twitter className="h-5 w-5" />
                  <a
                    href="https://twitter.com/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary"
                  >
                    twitter.com/johndoe
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 John Doe. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe for secure payments. Features include product catalog, cart functionality, and user authentication.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates. Users can create, assign, and track tasks across teams with notifications.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["React", "Firebase", "TypeScript"],
  },
  {
    title: "Finance Dashboard",
    description:
      "An interactive dashboard for tracking personal finances with visualization charts, expense categorization, and budget planning tools.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Next.js", "Chart.js", "Supabase"],
  },
  {
    title: "Recipe Finder App",
    description:
      "A mobile-responsive application that helps users find recipes based on ingredients they have at home, with filtering by dietary restrictions.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["React", "API Integration", "CSS Grid"],
  },
  {
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers and designers with dark mode support and animation effects.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather application that provides real-time forecasts and historical weather data with interactive maps and location-based services.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["React", "OpenWeather API", "Leaflet"],
  },
]

const skills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Figma",
  "UI/UX Design",
  "Responsive Design",
  "Accessibility",
]
