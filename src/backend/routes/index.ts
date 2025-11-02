import { apiRoutes } from "./api";
import { authRoutes } from "./auth";
import { frontendRoutes } from "./frontend";

export const routes = {
  ...frontendRoutes,
  ...apiRoutes,
  ...authRoutes,
};
