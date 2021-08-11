import { SpecificationModel } from "../model";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecifications {
  findByName(name: string): SpecificationModel | void;
  list(): SpecificationModel[];
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ISpecifications, ICreateSpecificationDTO };
