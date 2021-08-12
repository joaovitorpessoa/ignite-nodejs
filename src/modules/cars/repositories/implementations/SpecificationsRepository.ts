import { Specification } from "../../model";
import { ISpecificationsRepository, ICreateSpecificationDTO } from "../";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  findByName(name: string): void | Specification {
    const specification = this.specifications.find(
      (specification) => specification.name == name
    );

    if (specification) {
      return specification;
    }
  }

  list(): Specification[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification({ name, description });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
