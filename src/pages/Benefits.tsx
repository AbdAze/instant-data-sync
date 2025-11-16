import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Award, BookOpen, Building2, Heart, ArrowRight } from "lucide-react";

const Benefits = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Member Benefits</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the exclusive advantages of being part of the MIB Network
          </p>
        </div>
      </section>

      {/* Main Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Networking Events",
                description: "Access exclusive networking events, workshops, and conferences designed to connect you with fellow Muslim entrepreneurs globally.",
                color: "from-primary to-accent"
              },
              {
                icon: TrendingUp,
                title: "Business Referrals",
                description: "Receive qualified business referrals from fellow members, helping you expand your customer base and increase revenue.",
                color: "from-accent to-primary"
              },
              {
                icon: Award,
                title: "Recognition & Awards",
                description: "Get recognized for your business achievements through our annual awards program and featured member spotlight.",
                color: "from-primary to-accent"
              },
              {
                icon: BookOpen,
                title: "Mentorship Programs",
                description: "Connect with experienced business mentors who can guide you through challenges and help scale your business.",
                color: "from-accent to-primary"
              },
              {
                icon: Building2,
                title: "Business Resources",
                description: "Access exclusive business resources, templates, and tools to help you grow and manage your business effectively.",
                color: "from-primary to-accent"
              },
              {
                icon: Heart,
                title: "Community Support",
                description: "Join a supportive community of like-minded entrepreneurs who share your values and commitment to ethical business.",
                color: "from-accent to-primary"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-lg mb-6 flex items-center justify-center`}>
                    <benefit.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">What Else You Get</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              "Priority access to MIB business directory and member database",
              "Discounted rates for MIB events and training programs",
              "Quarterly business newsletters with industry insights and trends",
              "Social media promotion for your business across MIB platforms",
              "Access to exclusive WhatsApp and Telegram business groups",
              "Opportunity to host or sponsor MIB events in your region",
              "Collaboration opportunities with other Muslim businesses",
              "Faith-based business guidance aligned with Islamic principles"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <p className="text-card-foreground text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Unlock These Benefits?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of Muslim entrepreneurs who are already growing their businesses through MIB
          </p>
          <a href="https://forms.gle/RgBo8s3K7zgRVEVAA" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6">
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Benefits;
