export const helloRoutes = {
  "/api/hello": {
    GET() {
      return Response.json({
        message: "Hello, world!",
        method: "GET",
      });
    },
    PUT() {
      return Response.json({
        message: "Hello, world!",
        method: "PUT",
      });
    },
  },

  "/api/hello/:name": (req: { params: { name: string } }) => {
    const name = req.params.name;
    return Response.json({
      message: `Hello, ${name}!`,
    });
  },
};
