import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from ".";

class PostgresCategories implements ICategoriesRepository {
  findByName(name: string): void | Category {
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {}
}

export { PostgresCategories };
