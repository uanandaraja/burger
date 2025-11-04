import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export function LandingHeader() {
  return (
    <header className="bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link className="font-semibold text-foreground text-xl" to="/">
            Burger
          </Link>
          <Button asChild className="font-semibold" variant="outline">
            <Link to="/auth">Try signing in</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
