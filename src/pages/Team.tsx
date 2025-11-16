import { Navigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { useProfile } from "@/hooks/useProfile";

const Team = () => {
  const { profile, loading } = useProfile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the people behind our success
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProfileCard profile={profile} loading={loading} />
            <ProfileCard profile={profile} loading={loading} />
            <ProfileCard profile={profile} loading={loading} />
          </div>

          <div className="bg-card p-8 rounded-lg border border-border shadow-[var(--shadow-card)] text-center">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals to join our growing team.
              If you're passionate about innovation and excellence, we'd love to hear from you.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-[var(--transition-smooth)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]">
              View Open Positions
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Team;
