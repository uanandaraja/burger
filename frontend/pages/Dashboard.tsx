import { useSession } from "@/lib/auth-client";

export function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
          Dashboard
        </h1>
        {session?.user ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Welcome, {session.user.email}!
            </p>
          </div>
        ) : (
          <p className="text-muted-foreground">
            Not authenticated
          </p>
        )}
      </div>
    </div>
  );
}

