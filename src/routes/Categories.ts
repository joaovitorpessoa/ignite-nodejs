import { Router } from "express";
import { CategoriesRepository } from "../repository";

const routes = Router();
const categoriesRepository = new CategoriesRepository();

routes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

routes.get("/", (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.json(allCategories);
});

export default routes;
