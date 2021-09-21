import { AuthenticateUserUseCase } from ".";
import { AppError } from "../../../../errors";
import { UsersRepositoryInMemory } from "../../repositories";
import { CreateUserUseCase } from "../createUser";

let usersRepository: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

const user = {
  name: "Name user test",
  password: "Password user test",
  email: "Email user test",
  driver_license: "Driver license user test",
};

describe("Authenticate user", () => {
  beforeEach(async () => {
    usersRepository = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
    createUserUseCase = new CreateUserUseCase(usersRepository);

    await createUserUseCase.execute({
      name: user.name,
      password: user.password,
      email: user.email,
      driver_license: user.driver_license,
    });
  });

  it("Should be able to authenticate a user with email and password correct", async () => {
    const authenticate = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(authenticate).toHaveProperty("token");
  });

  it("Should not be able to authenticate a user that not exists", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "Email user that doesn't exists",
        password: "Password user that doesn't exists",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate a user with email incorrect", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "Email user incorrect",
        password: user.password,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to authenticate a user with password incorrect", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: user.email,
        password: "Password user incorrect",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
