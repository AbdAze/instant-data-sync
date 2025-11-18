import { Navigation } from "@/components/Navigation";
import { ProfileCard } from "@/components/ProfileCard";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Profile } from "@/hooks/useProfile";

const Directory = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfiles();

    const channel = supabase
      .channel('profiles-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles'
        },
        () => {
          fetchProfiles();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchProfiles = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching profiles:', error);
        return;
      }

      if (data) {
        setProfiles(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Member Directory
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse all member profiles
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground">Loading profiles...</div>
        ) : profiles.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No profiles yet. Be the first to create one!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} loading={false} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Directory;