import { Request, Response } from "express";

import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {
  // O ideal é ter uma interface que padroniza os serviços assim como os repositórios
  constructor(private createCategoryService: CreateCategoryService) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
