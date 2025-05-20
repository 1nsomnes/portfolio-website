import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import Link from "next/link"

interface ContactProps {
  id?: string
  data: {
    title: string
    description: string
    email: string
    socialLinks: {
      platform: string
      url: string
      icon: string
    }[]
  }
}

export function Contact({ id, data }: ContactProps) {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "github":
        return <Github className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <section id={id} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">{data.title}</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">{data.description}</p>
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Get in Touch</CardTitle>
              <CardDescription>Feel free to reach out for collaborations or just a friendly hello</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`mailto:${data.email}`} className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    {data.email}
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center gap-4">
                {data.socialLinks.map((link, index) => (
                  <Button key={index} asChild variant="outline" size="icon">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
                      {getIcon(link.icon)}
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

