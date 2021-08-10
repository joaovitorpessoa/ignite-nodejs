import { CategoryModel } from "../model";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategories {
  findByName(name: string): CategoryModel | void;
  list(): CategoryModel[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategories, ICreateCategoryDTO };
