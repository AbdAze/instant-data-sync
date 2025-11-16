import { Navigation } from "@/components/Navigation";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Have questions? We're here to help you grow your business
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you have questions about membership, events, or just want to connect with the MIB team, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2 text-lg">Email Us</h3>
                      <a href="mailto:info@musliminbusiness.com" className="text-primary hover:underline">
                        info@musliminbusiness.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2 text-lg">Call Us</h3>
                      <a href="tel:+1234567890" className="text-primary hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2 text-lg">Visit Website</h3>
                      <a href="https://www.musliminbusiness.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        www.musliminbusiness.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-2 text-lg">Global Network</h3>
                      <p className="text-muted-foreground">
                        Operating in 50+ countries worldwide
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-card-foreground mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
