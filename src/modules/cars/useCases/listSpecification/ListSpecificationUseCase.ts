import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  execute() {
    const allSpecifications = this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationUseCase };
