"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Hi, I'm </span>
            <span className="text-primary">Hardik Pathak</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Aspiring Data Scientist & Software Engineer
          </p>

          <p className="text-lg text-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Results-oriented Software Engineer with hands-on experience in developing RESTful microservices using Python
            and FastAPI. Passionate about data analysis, machine learning, and predictive modeling with a proven ability
            to deliver impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="text-lg px-8 py-3">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3"
              onClick={() => window.open("./Hardik-Pathak-Resume.pdf", "_blank")}
            >
              My Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="mailto:hardikp3232@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/hardy32"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hardik-pathak32/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
