import { serve } from "bun";
import { routes } from "./routes";

const _server = serve({
  routes: {
    // Serve static files from src/public (must come before wildcard)
    "/public/*": async (req) => {
      const url = new URL(req.url);
      const filePath = url.pathname.slice("/public/".length);
      const fullPath = `src/public/${filePath}`;
      const file = Bun.file(fullPath);

      if (await file.exists()) {
        return new Response(file);
      }

      return new Response("File not found", { status: 404 });
    },
    ...routes,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the terminal
    console: true,
  },
});

// Server running at ${server.url}
