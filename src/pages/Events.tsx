import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-accent text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">MIB Events</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Connect, learn, and grow with fellow Muslim entrepreneurs at our exclusive events
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12">Upcoming Events</h2>
          
          <div className="space-y-6 mb-16">
            {[
              {
                title: "Monthly Virtual Networking Meetup",
                date: "Every First Thursday",
                time: "7:00 PM - 9:00 PM GMT",
                location: "Online (Zoom)",
                attendees: "50-100 Members",
                description: "Join our monthly virtual networking session where members share business insights, challenges, and opportunities. A great way to connect with Muslim entrepreneurs globally.",
                type: "Recurring"
              },
              {
                title: "MIB Annual Conference 2025",
                date: "Coming Soon",
                time: "TBA",
                location: "Dubai, UAE",
                attendees: "500+ Expected",
                description: "Our flagship annual event bringing together Muslim business leaders, entrepreneurs, and investors from around the world for three days of networking, workshops, and inspiration.",
                type: "Featured"
              },
              {
                title: "Business Growth Workshop Series",
                date: "Monthly",
                time: "Various Times",
                location: "Online & Regional Chapters",
                attendees: "20-50 per Session",
                description: "Practical workshops covering topics like marketing, finance, leadership, and scaling your business. Led by successful MIB members and industry experts.",
                type: "Workshop"
              }
            ].map((event, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          event.type === 'Featured' 
                            ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' 
                            : 'bg-secondary text-secondary-foreground'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-4">{event.title}</h3>
                      <p className="text-muted-foreground mb-6">{event.description}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-medium text-card-foreground">{event.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Time</p>
                            <p className="font-medium text-card-foreground">{event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Location</p>
                            <p className="font-medium text-card-foreground">{event.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Attendees</p>
                            <p className="font-medium text-card-foreground">{event.attendees}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 whitespace-nowrap">
                        Register Now
                      </Button>
                      <Button variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Event Types */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Networking Events",
                description: "Regular meetups designed to help you build meaningful connections with fellow Muslim entrepreneurs",
                icon: Users
              },
              {
                title: "Educational Workshops",
                description: "Learn from experts and successful business owners through hands-on workshops and training sessions",
                icon: Calendar
              },
              {
                title: "Regional Chapters",
                description: "Connect with local MIB members through chapter events happening in your city or country",
                icon: MapPin
              }
            ].map((type, index) => (
              <Card key={index} className="border-border text-center hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <type.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Past Events Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://musliminbusiness.com/images/B&W%2001.jpg" 
                alt="Past MIB Event" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-card">
                <h3 className="font-semibold text-card-foreground mb-2">Regional Networking Event</h3>
                <p className="text-sm text-muted-foreground">Over 100 entrepreneurs connected</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://musliminbusiness.com/images/home%20main.png" 
                alt="MIB Workshop" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-card">
                <h3 className="font-semibold text-card-foreground mb-2">Business Growth Workshop</h3>
                <p className="text-sm text-muted-foreground">Expert-led training sessions</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://musliminbusiness.com/images/B&W%2001.jpg" 
                alt="MIB Conference" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 bg-card">
                <h3 className="font-semibold text-card-foreground mb-2">Annual MIB Conference</h3>
                <p className="text-sm text-muted-foreground">3-day flagship event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Want to Host an Event?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            MIB members can host regional events and workshops. Contact us to learn more about hosting opportunities.
          </p>
          <a href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
