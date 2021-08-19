import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationsController {
  handle(request: Request, response: Response): Response {
    const listSpecificationUseCase = container.resolve(
      ListSpecificationUseCase
    );

    const allSpecifications = listSpecificationUseCase.execute();

    return response.json(allSpecifications);
  }
}

export { ListSpecificationsController };
