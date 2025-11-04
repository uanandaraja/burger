import { useSession } from "../lib/auth-client";
import { DashboardLayout } from "../components/dashboard-layout";

export function Dashboard() {
  const { data: session } = useSession();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 p-4">
        <p className="text-muted-foreground text-lg">
          Welcome back, {session?.user?.name || session?.user?.email?.split("@")[0] || "Guest"}
        </p>

        {session?.user ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Account Status</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Your account is active and in good standing
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-semibold">Active</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground break-all">
                {session.user.email}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Last Login</h3>
              <p className="text-sm text-muted-foreground">Just now</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <h3 className="text-lg font-semibold mb-2">Not Authenticated</h3>
            <p className="text-muted-foreground">
              Please sign in to access your dashboard
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
