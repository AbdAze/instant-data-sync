import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About MIB</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building a global community of Muslim entrepreneurs committed to ethical business and collective success
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Muslim in Business (MIB) was founded with a simple yet powerful vision: to create a global platform 
              where Muslim entrepreneurs can connect, collaborate, and grow their businesses while staying true to 
              Islamic values and ethical practices. What started as a small networking group has now evolved into 
              a worldwide movement with chapters in over 50 countries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-6 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower Muslim entrepreneurs worldwide by providing a supportive network that facilitates 
                  business growth, ethical practices, and meaningful connections. We strive to create opportunities 
                  for collaboration, mentorship, and success while upholding Islamic principles in all business dealings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mb-6 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the world's leading platform for Muslim entrepreneurs, recognized for fostering 
                  ethical business practices, driving economic empowerment in Muslim communities, and creating 
                  a global ecosystem where faith and business success go hand in hand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Integrity",
                description: "We conduct all business with honesty, transparency, and adherence to Islamic principles"
              },
              {
                icon: Globe,
                title: "Global Unity",
                description: "We believe in the power of a connected Muslim business community across borders"
              },
              {
                icon: Heart,
                title: "Mutual Support",
                description: "We actively help each other succeed through referrals, mentorship, and collaboration"
              },
              {
                icon: Target,
                title: "Excellence",
                description: "We strive for the highest standards in our businesses and community engagement"
              }
            ].map((value, index) => (
              <Card key={index} className="border-border text-center hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Countries" },
              { number: "10,000+", label: "Members" },
              { number: "500+", label: "Events Annually" },
              { number: "$100M+", label: "Business Referrals" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Growing Community</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Whether you're just starting out or running an established business, MIB provides the support, 
            connections, and resources you need to succeed while staying true to your values.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
