import multer from "multer";

import { Router } from "express";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories";
import { ImportFileController } from "../modules/cars/useCases/importFile";

const CategoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importFileController = new ImportFileController();

CategoriesRoutes.post("/", createCategoryController.handle);

CategoriesRoutes.get("/", listCategoriesController.handle);

CategoriesRoutes.post(
  "/import",
  upload.single("file"),
  importFileController.handle
);

export { CategoriesRoutes };
