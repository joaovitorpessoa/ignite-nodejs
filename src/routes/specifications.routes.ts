import { Router } from "express";

import { listSpecificationsController } from "../modules/cars/useCases/listSpecification";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const SpecificationsRoutes = Router();

SpecificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

SpecificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { SpecificationsRoutes };
