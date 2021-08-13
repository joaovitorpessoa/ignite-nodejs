import multer from "multer";

import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const CategoriesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

CategoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

CategoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

CategoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;

  console.log(file);

  return response.send();
});

export { CategoriesRoutes };
