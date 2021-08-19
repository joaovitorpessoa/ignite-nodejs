import { Category } from "../../entities";
import { ICategoriesRepository } from "../../repositories";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const allCategories = await this.categoriesRepository.list();

    return allCategories;
  }
}

export { ListCategoriesUseCase };
