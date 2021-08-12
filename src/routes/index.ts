import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";

const routes = Router();

routes.use("/categories", CategoriesRoutes);
routes.use("/specifications", SpecificationsRoutes);

export { routes };
