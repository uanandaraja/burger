import { auth } from "../auth";

export const authRoutes = {
  "/api/auth/*": async (req: Request) => auth.handler(req),
};
