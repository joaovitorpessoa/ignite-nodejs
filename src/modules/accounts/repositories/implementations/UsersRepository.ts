import { IUsersRepository } from "../";
import { ICreateUserDTO } from "../../DTOs";
import { User } from "../../entities";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User> = getRepository(User);

  async create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const user = this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });

    await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user;
  }
}

export { UsersRepository };
