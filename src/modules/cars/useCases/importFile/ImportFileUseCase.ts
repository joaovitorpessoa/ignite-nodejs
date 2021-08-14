import fs from "fs";
import csvParse from "csv-parse";

import { createCategoryUseCase } from "../../useCases/createCategory";

interface ICategoryImport {
  name: string;
  description: string;
}

class ImportFileUseCase {
  constructor() {}

  loadCategories(file: Express.Multer.File): Promise<ICategoryImport[]> {
    const categories: ICategoryImport[] = [];

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const csv = csvParse();

      stream.pipe(csv);

      csv
        .on("data", async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        }) // As duas funções abaixo só são chamadas no fim do stream de dados
        .on("end", () => resolve(categories))
        .on("error", (error) => reject(error));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      createCategoryUseCase.execute({ name, description });
    });
  }
}

export { ImportFileUseCase };
