import { healthRoutes } from "./health";
import { helloRoutes } from "./hello";

export const apiRoutes = {
  ...healthRoutes,
  ...helloRoutes,
};
