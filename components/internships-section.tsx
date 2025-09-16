import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

export function InternshipsSection() {
  const internships = [
    {
      company: "LocalMail",
      position: "Python Intern",
      location: "Bangalore, India",
      duration: "Nov 2023 – Feb 2024",
      type: "Software Development",
      achievements: [
        "Developed APIs for the product named 'LocalMail' including service layer utilizing repository/adapter patterns",
        "Enhanced productivity, error handling, and code reusability using Python FastAPI",
        "Performed load testing using Postman, ensuring API reliability and performance",
        "Designed and implemented interactive UI components using React.js",
        "Debugged and optimized front-end code to enhance user experience and performance",
      ],
      technologies: ["Python", "FastAPI", "React.js", "Postman", "API Development", "UI/UX"],
    },
    {
      company: "AI Variant",
      position: "Data Science Intern",
      location: "Bangalore, India",
      duration: "Jan 2023 – July 2023",
      type: "Data Science",
      achievements: [
        "Conducted data acquisition, validation, predictive modeling, and data visualization using Python",
        "Cleaned and prepared large datasets for analysis using NumPy, Pandas, and PySpark",
        "Developed statistical machine learning models to address business challenges",
        "Created diverse charts and visualizations in Tableau for data analysis",
        "Extensive experience in Text Analytics developing different Statistical Machine Learning solutions",
      ],
      technologies: ["Python", "NumPy", "Pandas", "PySpark", "Tableau", "Machine Learning", "Text Analytics"],
    },
  ]

  return (
    <section id="internships" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            Professional <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-card-foreground flex items-center gap-3">
                        <Building2 className="h-6 w-6 text-primary" />
                        {internship.company}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mt-1">
                        {internship.position}
                      </CardDescription>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="w-fit">
                        {internship.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {internship.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {internship.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {internship.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-pretty leading-relaxed">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
