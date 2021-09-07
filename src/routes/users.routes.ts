import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/createUser";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar";
import { uploadConfig } from "../config";
import { ensureAuthenticated } from "../middlewares";

const UserRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

UserRoutes.post("/", createUserController.handle);

UserRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { UserRoutes };
