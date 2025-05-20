"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Project = {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort()

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length === 0
      ? projects
      : projects.filter((project) => selectedTags.some((tag) => project.tags.includes(tag)))

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Scroll functions
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = 340 // Approximate card width + gap

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">Check out some of my recent work</p>
      </div>

      {/* Filter tags */}
      <div className="flex flex-wrap justify-center gap-2 py-4">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className="cursor-pointer text-sm px-3 py-1"
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </Badge>
        ))}
        {selectedTags.length > 0 && (
          <Badge variant="secondary" className="cursor-pointer text-sm px-3 py-1" onClick={() => setSelectedTags([])}>
            Clear filters
          </Badge>
        )}
      </div>

      {/* Projects carousel */}
      <div className="relative">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Scroll left</span>
        </Button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-4 pt-2 snap-x scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.title} className="min-w-[300px] max-w-[300px] flex-shrink-0 snap-start px-2">
                <Card className="h-full overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={`${project.title}-${tag}`} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.link}>View Project</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-12">
              <p className="text-muted-foreground">No projects match the selected filters.</p>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}
