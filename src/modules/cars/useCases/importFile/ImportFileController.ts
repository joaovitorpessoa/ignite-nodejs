import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportFileUseCase } from "./ImportFileUseCase";

class ImportFileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importFileUseCase = container.resolve(ImportFileUseCase);

    await importFileUseCase.execute(file);

    return response.send();
  }
}

export { ImportFileController };
