import { helloRoutes } from "./hello";
import { healthRoutes } from "./health";

export const apiRoutes = {
  ...healthRoutes,
  ...helloRoutes,
};

