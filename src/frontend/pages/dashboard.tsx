import { DashboardLayout } from "../components/dashboard-layout";
import { useSession } from "../lib/auth-client";

export function Dashboard() {
  const { data: session } = useSession();

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 p-4">
        <p className="text-lg text-muted-foreground">
          Welcome back,{" "}
          {session?.user?.name ||
            session?.user?.email?.split("@")[0] ||
            "Guest"}
        </p>

        {session?.user ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-lg">Account Status</h3>
              <p className="mb-4 text-muted-foreground text-sm">
                Your account is active and in good standing
              </p>
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="font-semibold text-sm">Active</span>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-lg">Email</h3>
              <p className="break-all text-muted-foreground text-sm">
                {session.user.email}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-semibold text-lg">Last Login</h3>
              <p className="text-muted-foreground text-sm">Just now</p>
            </div>
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-card p-12 text-center">
            <h3 className="mb-2 font-semibold text-lg">Not Authenticated</h3>
            <p className="text-muted-foreground">
              Please sign in to access your dashboard
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
