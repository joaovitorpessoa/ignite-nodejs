import { CategoryModel } from "../model";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class Categories {
  private categories: CategoryModel[] = [];

  create({ name, description }: ICreateCategoryDTO): void {
    const categoryModel = new CategoryModel({ name, description });

    this.categories.push(categoryModel);

    console.log(this.categories);
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

export default Categories;
