import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const CategoriesRoutes = Router();

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { CategoriesRoutes };
