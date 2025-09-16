import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Award } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "C", "C++", "HTML", "CSS"],
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: ["VS Code", "Git", "Jira", "Google Colab", "Jupyter", "AWS", "Postman", "PyCharm"],
    },
    {
      title: "Technologies & Frameworks",
      icon: Database,
      skills: ["FastAPI", "REST API", "React.js", "WordPress", "Poetry", "NumPy", "Pandas", "Scikit-learn", "Tableau"],
    },
  ]

  const certifications = [
    "HTML, CSS, and Javascript for Web Developers - Coursera/Udemy",
    "Python for Beginners - Great Learning",
    "Machine Learning with Python - IBM",
    "Data Science - ExcelR",
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            Technical <span className="text-primary">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-card-foreground">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-card-foreground">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground text-pretty leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
