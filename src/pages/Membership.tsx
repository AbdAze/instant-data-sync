import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Membership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Membership Options</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Choose the membership level that best suits your business needs
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Basic Member",
                price: "Free",
                period: "Forever",
                description: "Perfect for getting started with MIB Network",
                features: [
                  "Access to MIB online directory",
                  "Monthly newsletter",
                  "Join WhatsApp community groups",
                  "Attend virtual networking events",
                  "Basic business profile listing"
                ],
                cta: "Join Free",
                popular: false
              },
              {
                name: "Premium Member",
                price: "Contact Us",
                period: "Annually",
                description: "For serious entrepreneurs ready to scale",
                features: [
                  "Everything in Basic, plus:",
                  "Featured business profile",
                  "Priority event registration",
                  "Quarterly one-on-one mentorship",
                  "Access to exclusive workshops",
                  "Business referral priority",
                  "Social media promotion",
                  "Discounted event sponsorships"
                ],
                cta: "Get Premium",
                popular: true
              },
              {
                name: "Corporate Member",
                price: "Custom",
                period: "Flexible",
                description: "Tailored solutions for established businesses",
                features: [
                  "Everything in Premium, plus:",
                  "Multiple team member profiles",
                  "Dedicated account manager",
                  "Custom networking events",
                  "Speaking opportunities",
                  "VIP access to all events",
                  "Co-branding opportunities",
                  "Strategic partnership options"
                ],
                cta: "Contact Sales",
                popular: false
              }
            ].map((tier, index) => (
              <Card 
                key={index} 
                className={`relative border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] ${
                  tier.popular ? 'border-primary border-2 shadow-xl' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    {tier.period !== "Forever" && <span className="text-muted-foreground ml-2">/ {tier.period}</span>}
                  </div>
                  <p className="text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-card-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://forms.gle/RgBo8s3K7zgRVEVAA" target="_blank" rel="noopener noreferrer">
                    <Button 
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                      size="lg"
                    >
                      {tier.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Membership FAQs</h3>
                <div className="space-y-6">
                  {[
                    {
                      question: "How do I become a member?",
                      answer: "Simply fill out our online registration form and select your desired membership tier. Our team will review your application and get back to you within 48 hours."
                    },
                    {
                      question: "Can I upgrade my membership later?",
                      answer: "Absolutely! You can upgrade from Basic to Premium or Corporate membership at any time. Contact our support team for assistance with upgrading."
                    },
                    {
                      question: "What payment methods do you accept?",
                      answer: "We accept all major credit cards, bank transfers, and PayPal. For corporate memberships, we can arrange custom payment terms."
                    },
                    {
                      question: "Is there a refund policy?",
                      answer: "Yes, we offer a 30-day money-back guarantee for Premium and Corporate memberships if you're not satisfied with your membership experience."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-border pb-4 last:border-0">
                      <h4 className="font-semibold text-card-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our team is here to help you choose the right membership for your business
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Membership;
