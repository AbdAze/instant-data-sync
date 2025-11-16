import { Mail, Phone, User } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Profile } from "@/hooks/useProfile";

interface ProfileCardProps {
  profile: Profile | null;
  loading: boolean;
  variant?: "default" | "compact" | "detailed";
}

export const ProfileCard = ({ profile, loading, variant = "default" }: ProfileCardProps) => {
  if (loading) {
    return (
      <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-24 w-24 bg-muted rounded-full mx-auto" />
            <div className="h-6 bg-muted rounded w-3/4 mx-auto" />
            <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!profile) {
    return (
      <Card className="overflow-hidden shadow-[var(--shadow-card)]">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">No profile data available. Please add a profile in the Admin section.</p>
        </CardContent>
      </Card>
    );
  }

  const imageUrl = profile.image_url 
    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/profile-images/${profile.image_url}`
    : null;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border shadow-[var(--shadow-card)]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={profile.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-primary"
          />
        )}
        <div>
          <h3 className="font-semibold text-card-foreground">{profile.name}</h3>
          <p className="text-sm text-muted-foreground">{profile.email}</p>
        </div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] bg-gradient-to-br from-card to-secondary/30">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={profile.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-16 h-16 text-primary-foreground" />
              </div>
            )}
            <div>
              <h2 className="text-3xl font-bold text-card-foreground mb-2">{profile.name}</h2>
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-center gap-3 text-card-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-card-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)]">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={profile.name}
              className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <User className="w-12 h-12 text-primary-foreground" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-semibold text-card-foreground">{profile.name}</h3>
            <div className="space-y-2 mt-3">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                {profile.email}
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                {profile.phone}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
