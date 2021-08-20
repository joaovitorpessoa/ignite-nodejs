import { IUsersRepository } from "../";
import { ICreateUserDTO } from "../../DTOs";
import { User } from "../../entities";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User> = getRepository(User);

  async create({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
