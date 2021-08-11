import { SpecificationModel } from "../model";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../repositories";

class Specifications implements ISpecificationsRepository {
  private specifications: SpecificationModel[] = [];

  findByName(name: string): void | SpecificationModel {
    const specification = this.specifications.find(
      (specification) => specification.name == name
    );

    if (specification) {
      return specification;
    }
  }

  list(): SpecificationModel[] {
    return this.specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specificationModel = new SpecificationModel({ name, description });

    this.specifications.push(specificationModel);
  }
}

export { Specifications };
