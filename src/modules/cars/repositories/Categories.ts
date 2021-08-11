import { CategoryModel } from "../model";
import { ICategoriesRepository, ICreateCategoryDTO } from "../repositories";

class Categories implements ICategoriesRepository {
  private categories: CategoryModel[] = [];

  create({ name, description }: ICreateCategoryDTO): void {
    const categoryModel = new CategoryModel({ name, description });

    this.categories.push(categoryModel);
  }

  list(): CategoryModel[] {
    return this.categories;
  }

  findByName(name: string): CategoryModel | void {
    const category = this.categories.find((category) => category.name === name);

    if (category) {
      return category;
    }
  }
}

export { Categories };
