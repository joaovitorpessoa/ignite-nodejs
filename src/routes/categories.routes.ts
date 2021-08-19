import multer from "multer";

import { Router } from "express";

import createCategoryController from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importFileController } from "../modules/cars/useCases/importFile";

const CategoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryController().handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importFileController.handle(request, response);
});

export { CategoriesRoutes };
