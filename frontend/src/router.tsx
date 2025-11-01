import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { LandingHeader } from "./components/landing";
import { useRouterState } from "@tanstack/react-router";

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isLandingPage = pathname === "/";

  return (
    <div className="min-h-screen">
      {isLandingPage && <LandingHeader />}
      <Outlet />
    </div>
  );
}

// Root route with layout
const rootRoute = createRootRoute({
  component: RootComponent,
});

// Index route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Auth route
const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: Auth,
});

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, authRoute]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

