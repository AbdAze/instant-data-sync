import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const Navigation = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate("/auth");
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Contact
            </NavLink>
            <NavLink
              to="/directory"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary border-b-2 border-primary"
            >
              Directory
            </NavLink>
            {user && (
              <NavLink
                to="/my-profile"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-primary border-b-2 border-primary"
              >
                My Profile
              </NavLink>
            )}
          </div>
          <div className="flex items-center">
            {user ? (
              <Button onClick={handleSignOut} variant="outline" size="sm">
                Sign Out
              </Button>
            ) : (
              <Button onClick={() => navigate("/auth")} size="sm">
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
