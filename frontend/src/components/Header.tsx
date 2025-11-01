import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-4">
          <Button variant={pathname === "/" ? "default" : "ghost"} asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={pathname === "/about" ? "default" : "ghost"} asChild>
            <Link to="/about">About</Link>
          </Button>
          <Button variant={pathname === "/posts" ? "default" : "ghost"} asChild>
            <Link to="/posts">Posts</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

