import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories";

interface IRequest {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private UsersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: IRequest): Promise<void> {
    await this.UsersRepository.create({
      name,
      password,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
