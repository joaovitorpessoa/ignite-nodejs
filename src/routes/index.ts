import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";
import { UserRoutes } from "./users.routes";

const routes = Router();

routes.use("/categories", CategoriesRoutes);
routes.use("/specifications", SpecificationsRoutes);
routes.use("/users", UserRoutes);

export { routes };
