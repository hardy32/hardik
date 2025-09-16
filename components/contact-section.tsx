"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9974373017",
      href: "tel:+919974373017",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Connect!</h3>
              <p className="text-lg text-foreground mb-8 text-pretty leading-relaxed">
                I'm always interested in discussing new opportunities, collaborating on exciting projects, or simply
                connecting with fellow data enthusiasts and developers. Feel free to reach out!
              </p>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={() => window.open("mailto:hardikp3232@gmail.com", "_blank")}
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  size="lg"
                  onClick={() => window.open("https://github.com/hardy32", "_blank")}
                >
                  <Github className="h-5 w-5 mr-2" />
                  View GitHub
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  size="lg"
                  onClick={() => window.open("https://linkedin.com/in/hardik-pathak32", "_blank")}
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Button>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center text-pretty">
                    Available for internships, full-time opportunities, and freelance projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
