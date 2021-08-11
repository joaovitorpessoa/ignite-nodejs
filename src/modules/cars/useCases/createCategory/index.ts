import { CategoriesRepository } from "../../repositories";
import { CreateCategoryService } from "./CreateCategoryService";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };
