import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUseCase.execute({ email, password });

    return response.json(token);
  }
}

function seraqTemAcessoAoThis1() {
  return this.teste = "aaa";
}

const seraqTemAcessoAoThis2 = () => {
  return this.teste = "bbb";
}

export { AuthenticateUserController };
