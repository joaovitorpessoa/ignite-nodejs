import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesService: ListCategoriesUseCase) {}

  handle(request: Request, response: Response) {
    const allCategories = this.listCategoriesService.execute();

    return response.json(allCategories);
  }
}

export { ListCategoriesController };
