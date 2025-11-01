import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";
import { Header } from "./components/Header";

function RootComponent() {
  return (
    <div className="min-h-screen">
      <Header />
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

// About route
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

// Posts route
const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/posts",
  component: Posts,
});

// Create route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, postsRoute]);

// Create router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

