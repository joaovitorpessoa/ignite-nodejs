import { AppError } from "../../../../errors";
import { CarsRepositoryInMemory } from "../../repositories";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("Should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Name test",
      description: "Description test",
      daily_rate: 100,
      license_plate: "License plate test",
      fine_amount: 60,
      brand: "Brand test",
      category_id: "Category test",
    });
  });

  it("Should be not able to create a new car with name that already exists", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Name test",
        description: "Description test",
        daily_rate: 100,
        license_plate: "License plate test",
        fine_amount: 60,
        brand: "Brand test",
        category_id: "Category test",
      });

      await createCarUseCase.execute({
        name: "Name test",
        description: "Description test",
        daily_rate: 100,
        license_plate: "License plate test",
        fine_amount: 60,
        brand: "Brand test",
        category_id: "Category test",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
