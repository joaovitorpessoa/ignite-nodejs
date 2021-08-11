import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const routes = Router();

const categoriesRepository = new CategoriesRepository();

routes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

routes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json(allCategories);
});

export { routes };
