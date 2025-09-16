"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Hotel Review NLP",
      description:
        "Implemented an NLP-based sentiment analysis model to classify hotel reviews and extract customer insights using advanced natural language processing techniques.",
      technologies: ["Python", "Jupyter", "NLP", "Sentiment Analysis", "Machine Learning"],
      date: "July 2023",
      type: "Data Science",
      image: "/nlp-sentiment-analysis-dashboard.jpg",
      url: ""
    },
    {
      title: "Employee Promotion Prediction",
      description:
        "Built a comprehensive data science model to predict employee promotions using machine learning techniques on HR data, achieving high accuracy in predictions.",
      technologies: ["Python", "Jupyter", "Machine Learning", "HR Analytics", "Predictive Modeling"],
      date: "June 2023",
      type: "Data Science",
      image: "/employee-analytics-dashboard.jpg",
      url: "https://github.com/hardy32/Employee-Promotion-Prediction"
    },
    {
      title: "Payment Integration System",
      description:
        "Developed a secure payment integration module for a fundraising website to process online donations with robust error handling and user experience.",
      technologies: ["JavaScript", "HTML", "CSS", "Payment APIs", "Web Development"],
      date: "Feb 2022",
      type: "Web Development",
      image: "/payment-integration-interface.jpg",
      url: "https://github.com/hardy32/Payment-integration"
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" onClick={() => window.open(project.url, "_blank")}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
