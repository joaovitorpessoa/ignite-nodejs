import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories";
import { CreateSpecificationService } from "../modules/cars/services";

const routes = Router();

const specificationsRepository = new SpecificationsRepository();

routes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

routes.get("/", (request, response) => {
  const allSpecifications = specificationsRepository.list();

  return response.json(allSpecifications);
});

export { routes };
