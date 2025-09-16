import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-foreground mb-6 text-pretty leading-relaxed">
                I'm a passionate Software Engineer and aspiring Data Scientist with a strong foundation in Python
                development, machine learning, and data analysis. Currently pursuing my Bachelor's degree in
                Engineering, I've gained valuable hands-on experience through internships and personal projects.
              </p>

              <p className="text-lg text-foreground mb-6 text-pretty leading-relaxed">
                My expertise spans across developing RESTful APIs with FastAPI, implementing machine learning models,
                and creating data-driven solutions. I'm particularly interested in NLP, predictive modeling, and
                building scalable software systems.
              </p>

              <p className="text-lg text-foreground text-pretty leading-relaxed">
                I thrive in collaborative environments and am always eager to learn new technologies and tackle
                challenging problems that can make a real impact.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Education</h3>
                      <p className="text-muted-foreground">Bachelor of Engineering</p>
                      <p className="text-sm text-muted-foreground">Saffrony Institute of Technology</p>
                      <p className="text-sm text-muted-foreground">CGPA: 7.61</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Location</h3>
                      <p className="text-muted-foreground">Bangalore, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">Graduation</h3>
                      <p className="text-muted-foreground">2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
