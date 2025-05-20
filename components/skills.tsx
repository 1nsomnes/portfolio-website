import { Card, CardContent } from "@/components/ui/card"

interface SkillCategory {
  category: string
  skills: string[]
}

interface SkillsProps {
  id?: string
  data: {
    title: string
    skillCategories: SkillCategory[]
  }
}

export function Skills({ id, data }: SkillsProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">{data.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

