import { Link } from "@tanstack/react-router";

export function LandingHeader() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-foreground">
            Burger
          </Link>
          <Link
            to="/auth"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Try signing in
          </Link>
        </div>
      </div>
    </header>
  );
}

