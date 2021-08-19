import { Router } from "express";

import { ListSpecificationsController } from "../modules/cars/useCases/listSpecification";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification";

const SpecificationsRoutes = Router();

const listSpecificationsController = new ListSpecificationsController();
const createSpecificationController = new CreateSpecificationController();

SpecificationsRoutes.post("/", createSpecificationController.handle);

SpecificationsRoutes.get("/", listSpecificationsController.handle);

export { SpecificationsRoutes };
