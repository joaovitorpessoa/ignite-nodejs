import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities";
import { ISpecificationsRepository } from "../";
import { ICreateSpecificationDTO } from "../../DTOs";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification> = getRepository(Specification);

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({ name, description });

    await this.repository.save(specification);
  }

  async list(): Promise<Specification[]> {
    return await this.repository.find();
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ where: { name } });

    if (specification) {
      return specification;
    }
  }
}

export { SpecificationsRepository };
