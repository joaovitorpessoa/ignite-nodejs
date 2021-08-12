import { Category } from "../../model";
import { ICategoriesRepository, ICreateCategoryDTO } from "../";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  private static INSTANCE: CategoriesRepository;

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category({ name, description });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | void {
    const category = this.categories.find((category) => category.name === name);

    if (category) {
      return category;
    }
  }
}

export { CategoriesRepository };
