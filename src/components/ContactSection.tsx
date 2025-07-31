import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">alex.johnson@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                  <Github className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button size="sm" variant="ghost" className="h-10 w-10 p-0">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}