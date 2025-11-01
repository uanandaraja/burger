import { frontendRoutes } from "./frontend";
import { apiRoutes } from "./api";

export const routes = {
  ...frontendRoutes,
  ...apiRoutes,
};

