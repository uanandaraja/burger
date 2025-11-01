import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
  return (
    <header className="bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-foreground">
            Burger
          </Link>
          <Button variant="outline" className="font-semibold" asChild>
            <Link to="/auth">
              Try signing in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

