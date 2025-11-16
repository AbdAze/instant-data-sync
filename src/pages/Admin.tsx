import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const Admin = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = null;

      // Upload image if selected
      if (image) {
        const fileExt = image.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('profile-images')
          .upload(fileName, image);

        if (uploadError) {
          throw uploadError;
        }

        imageUrl = fileName;
      }

      // Insert or update profile
      const { error: dbError } = await supabase
        .from('profiles')
        .insert({
          name,
          phone,
          email,
          image_url: imageUrl
        });

      if (dbError) throw dbError;

      toast({
        title: "Success!",
        description: "Profile updated successfully. Changes will appear on all pages instantly.",
      });

      // Reset form
      setName("");
      setPhone("");
      setEmail("");
      setImage(null);
      
      // Reset file input
      const fileInput = document.getElementById('image-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <Navigation />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            Admin Panel
          </h1>
          <p className="text-xl text-muted-foreground">
            Update profile information in real-time
          </p>
        </div>

        <Card className="shadow-[var(--shadow-card)]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Profile Image
                </label>
                <div className="flex items-center gap-4">
                  <label
                    htmlFor="image-upload"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg cursor-pointer hover:bg-secondary/80 transition-[var(--transition-smooth)]"
                  >
                    <Upload className="w-4 h-4" />
                    Choose Image
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {image && (
                    <span className="text-sm text-muted-foreground">{image.name}</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="email@example.com"
                />
              </div>

              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-[var(--transition-smooth)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? "Uploading..." : "Update Profile"}
              </button>
            </form>

            <div className="mt-8 p-4 bg-muted/50 rounded-lg border border-border">
              <h3 className="font-semibold text-card-foreground mb-2">
                ℹ️ How it works
              </h3>
              <p className="text-sm text-muted-foreground">
                When you submit this form, the profile information will instantly update 
                across all pages (Home, About, Contact, and Team) without any page refresh. 
                This is powered by real-time database subscriptions.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
