import { getRepository, Repository } from "typeorm";

import { IUsersRepository } from "../";
import { ICreateUserDTO } from "../../DTOs";
import { User } from "../../entities";

class UsersRepository implements IUsersRepository {
  private usersRepository: Repository<User> = getRepository(User);

  async create({
    name,
    email,
    password,
    driver_license,
    id,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    const user = this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
      id,
      avatar,
    });

    await this.usersRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { email } });

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    return user;
  }

  async update(entitieUpdated: User): Promise<void> {
    await this.usersRepository.save(entitieUpdated);
  }
}

export { UsersRepository };
