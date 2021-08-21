import { Router } from "express";

import { CategoriesRoutes } from "./categories.routes";
import { SpecificationsRoutes } from "./specifications.routes";
import { UserRoutes } from "./users.routes";
import { AuthenticateRoutes } from "./authenticate.routes";

const routes = Router();

routes.use("/categories", CategoriesRoutes);
routes.use("/specifications", SpecificationsRoutes);
routes.use("/users", UserRoutes);
routes.use("/sessions", AuthenticateRoutes);

export { routes };
