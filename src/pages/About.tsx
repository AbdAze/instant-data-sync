import { Navigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { useProfile } from "@/hooks/useProfile";

const About = () => {
  const { profile, loading } = useProfile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about our team and mission
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-8">
          <ProfileCard profile={profile} loading={loading} variant="detailed" />
          
          <div className="bg-card p-8 rounded-lg border border-border shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We are dedicated to creating innovative solutions that make a difference. 
                Our team combines expertise with passion to deliver exceptional results.
              </p>
              <p>
                With a focus on real-time technology and seamless user experiences, 
                we're building the future of digital interaction.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
