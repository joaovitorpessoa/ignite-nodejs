import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const routes = Router();

routes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

routes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { routes };
