import { Router } from "express";
import {
  CategoriesRepository,
  PostgresCategoriesRepository,
} from "../repository";
import { CreateCategoryService } from "../services";

const routes = Router();
const categoriesRepository = new CategoriesRepository();
// const categoriesRepository = new PostgresCategoriesRepository();

routes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

routes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json(allCategories);
});

export { routes };
