export const healthRoutes = {
  "/health": new Response("OK", {
    headers: { "Content-Type": "text/plain" },
  }),

  "/ping": new Response("pong", {
    headers: { "Content-Type": "text/plain" },
  }),
};

