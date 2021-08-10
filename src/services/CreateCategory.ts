import { ICategoriesRepository } from "../repositories";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategory {
  // Em vez de criar uma propriedade privada pra classe e depois
  // atribuir o parâmetro do construtor a ela, basta utilizar a trick abaixo:
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategory };
