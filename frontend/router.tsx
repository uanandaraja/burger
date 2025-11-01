import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import { LandingHeader } from "./components/landing/landing-header";
import { Auth } from "./pages/auth";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";

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

// Dashboard route
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  authRoute,
  dashboardRoute,
]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
