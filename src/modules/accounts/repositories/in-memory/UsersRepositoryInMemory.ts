import { IUsersRepository } from "..";
import { ICreateUserDTO } from "../../DTOs";
import { User } from "../../entities";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, password, email, driver_license } = data;

    const user = new User();

    Object.assign(user, {
      name,
      password,
      email,
      driver_license,
      isAdmin: false,
      created_at: new Date(),
    });

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  async update(entitieUpdated: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepositoryInMemory };
