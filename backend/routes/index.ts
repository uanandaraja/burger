import { frontendRoutes } from "./frontend";
import { apiRoutes } from "./api";
import { authRoutes } from "./auth";

export const routes = {
  ...frontendRoutes,
  ...apiRoutes,
  ...authRoutes,
};

