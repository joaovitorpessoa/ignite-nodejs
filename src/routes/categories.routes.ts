import { Router } from "express";
import { Category } from "../model";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category({ name, description });

  categories.push(category);

  console.log(categories);

  response.status(201).send();
});

export { categoriesRoutes };
