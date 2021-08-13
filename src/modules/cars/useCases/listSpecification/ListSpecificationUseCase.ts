import { ISpecificationsRepository } from "../../repositories";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute() {
    const allSpecifications = this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationUseCase };
