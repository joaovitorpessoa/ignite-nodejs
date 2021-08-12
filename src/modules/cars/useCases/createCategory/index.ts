import { CategoriesRepository } from "../../repositories";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
