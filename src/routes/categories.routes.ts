import { Router } from "express";
import { v4 as uuid } from "uuid";

const categoriesRoutes = Router();

interface category {
  id: string;
  name: string;
  description: string;
}

const categories: category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    id: uuid(),
    name,
    description,
  };

  categories.push(category);

  console.log(categories);

  response.status(201).send();
});

export { categoriesRoutes };
