import { ICreateUserDTO } from "../DTOs";
import { User } from "../entities";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(entitieUpdated: User): Promise<void>;
}

export { IUsersRepository };
