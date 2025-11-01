import { useSession } from "@/lib/auth-client";

export function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-semibold text-3xl text-foreground md:text-4xl">
          Dashboard
        </h1>
        {session?.user ? (
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Welcome, {session.user.email}!
            </p>
          </div>
        ) : (
          <p className="text-muted-foreground">Not authenticated</p>
        )}
      </div>
    </div>
  );
}
