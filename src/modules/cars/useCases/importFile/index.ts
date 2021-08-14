import { ImportFileController } from "./ImportFileController";
import { ImportFileUseCase } from "./ImportFileUseCase";

const importFileUseCase = new ImportFileUseCase();
const importFileController = new ImportFileController(importFileUseCase);

export { importFileController };
