import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { signIn } from "../lib/auth-client";

export function Auth() {
  const [email, setEmail] = useState("");
  const [isMagicLinkLoading, setIsMagicLinkLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsMagicLinkLoading(true);
    setMessage("");

    try {
      await signIn.magicLink({
        email,
        callbackURL: "/dashboard",
      });
      setMessage("Check your email for the magic link!");
    } catch (_error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsMagicLinkLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch (_error) {
      setMessage("Something went wrong. Please try again.");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="font-semibold text-3xl text-foreground md:text-4xl">
            Welcome back
          </h1>
          <p className="text-muted-foreground">
            Sign in to your account to continue
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleMagicLink}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              disabled={isMagicLinkLoading || isGoogleLoading}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              type="email"
              value={email}
            />
          </div>

          {message && (
            <p
              className={`text-center text-sm ${message.includes("Check") ? "text-foreground" : "text-destructive"}`}
            >
              {message}
            </p>
          )}

          <Button
            className="w-full font-semibold"
            disabled={isMagicLinkLoading || isGoogleLoading}
            size="lg"
            type="submit"
          >
            {isMagicLinkLoading ? "Sending..." : "Send magic link"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-border border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            className="w-full font-semibold"
            disabled={isMagicLinkLoading || isGoogleLoading}
            onClick={handleGoogleSignIn}
            size="lg"
            type="button"
            variant="outline"
          >
            {isGoogleLoading ? "Signing in..." : "Sign in with Google"}
          </Button>

          <div className="text-center text-muted-foreground text-sm">
            Don't have an account?{" "}
            <Link
              className="font-semibold text-foreground hover:underline"
              to="/auth"
            >
              Sign up
            </Link>
          </div>

          <p className="text-center text-muted-foreground text-xs">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}
