import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser";

const UserRoutes = Router();

const createUserController = new CreateUserController();

UserRoutes.post("/", createUserController.handle);

export { UserRoutes };
