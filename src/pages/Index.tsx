import { Navigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { useProfile } from "@/hooks/useProfile";

const Index = () => {
  const { profile, loading } = useProfile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Welcome Home
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time profile updates powered by Lovable Cloud
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <ProfileCard profile={profile} loading={loading} />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-card rounded-lg border border-border shadow-[var(--shadow-card)]">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Real-time Updates</h3>
            <p className="text-sm text-muted-foreground">See changes instantly across all pages</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border shadow-[var(--shadow-card)]">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Cloud Storage</h3>
            <p className="text-sm text-muted-foreground">Secure image uploads and management</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border shadow-[var(--shadow-card)]">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-semibold text-card-foreground mb-2">Beautiful UI</h3>
            <p className="text-sm text-muted-foreground">Modern design system with smooth animations</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
