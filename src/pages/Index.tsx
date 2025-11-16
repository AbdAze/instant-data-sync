import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Handshake, Globe, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://musliminbusiness.com/images/home%20main.png')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Muslim Entrepreneurs Worldwide
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Join the largest network which connects Muslim business professionals devoted to ethical commerce and collective growth
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://forms.gle/RgBo8s3K7zgRVEVAA" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary" className="group">
                    Join MIB
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <a href="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden md:block animate-scale-in">
              <img
                src="https://musliminbusiness.com/images/home%20main.png"
                alt="Muslim in Business Network"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About MIB Network */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">About MIB Network</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              MIB (Muslim in Business) is a global network of Muslim entrepreneurs and professionals 
              committed to ethical business practices, collective support, and community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Handshake,
                title: "Referrals",
                description: "Our members actively refer business to each other, creating a powerful ecosystem of trust and collaboration."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "We believe in using business as a force for good, creating positive change in our communities and beyond."
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "With chapters in over 50 countries, connect with Muslim entrepreneurs worldwide."
              },
              {
                icon: TrendingUp,
                title: "Growth",
                description: "We conduct all business dealings with honesty and transparency, upholding the highest ethical standards as prescribed in Islam."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join MIB */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://musliminbusiness.com/images/B&W%2001.jpg"
                alt="Networking Event"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Join MIB?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Discover the benefits of being part of the fastest-growing Muslim business network.
              </p>
              <ul className="space-y-4">
                {[
                  "Access exclusive networking events and shops",
                  "Gain referrals and increase your customer base",
                  "Engage in mentorship and coaching programs",
                  "Unite with like-minded entrepreneurs"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Joining MIB has transformed my business. The referrals alone have boosted my sales by 40%.",
                name: "A.Azeez Hakeem",
                company: "ARK Media House, India"
              },
              {
                quote: "The faith-based approach helps me stay aligned with my values while growing my company.",
                name: "A.Gafoor Maniar",
                company: "A.B.Khajoor, India"
              },
              {
                quote: "The connections and support are unmatched. Highly recommended!",
                name: "Mehboob Malek",
                company: "Silicone Enterprise, China"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">How to Join MIB</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Sign Up Online",
                description: "Create your member profile with our easy online form."
              },
              {
                step: "2",
                title: "Attend Orientation",
                description: "Join our virtual orientation to understand our values and network."
              },
              {
                step: "3",
                title: "Connect & Grow",
                description: "Start attending events, get referrals and grow your business."
              }
            ].map((step, index) => (
              <Card key={index} className="text-center border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <a href="https://forms.gle/RgBo8s3K7zgRVEVAA" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6">
                JOIN NOW
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-2">© 2025 Muslim in Business (MIB). All rights reserved.</p>
          <p className="opacity-80">Empowering Muslim entrepreneurs through ethical commerce and collective growth</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
