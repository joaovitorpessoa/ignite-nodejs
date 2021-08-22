import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import {
  IUsersRepository,
  UsersRepository,
} from "../modules/accounts/repositories";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing!");
  }

  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(
      token,
      "f34fa5ab9805c87d7a19050d14486e82"
    ) as IPayload;

    const { sub: userId } = decodedToken;

    const usersRepository = new UsersRepository();

    const user = usersRepository.findById(userId);

    if (!user) {
      throw new Error("User does not exists!");
    }

    next();
  } catch {
    throw new Error("Invalid token!");
  }
}

export { ensureAuthenticated };
