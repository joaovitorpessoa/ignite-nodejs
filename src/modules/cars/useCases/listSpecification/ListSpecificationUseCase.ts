import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories";
import { Specification } from "../../entities";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const allSpecifications = await this.specificationsRepository.list();

    return allSpecifications;
  }
}

export { ListSpecificationUseCase };
