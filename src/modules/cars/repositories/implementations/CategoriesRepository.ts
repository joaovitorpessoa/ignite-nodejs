import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities";
import { ICategoriesRepository } from "..";
import { ICreateCategoryDTO } from "../../DTOs";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category> = getRepository(Category);

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({ name, description });

    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ where: { name } });

    if (category) {
      return category;
    }
  }
}

export { CategoriesRepository };
