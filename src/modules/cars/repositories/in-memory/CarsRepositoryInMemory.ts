import { ICarsRepository } from "..";
import { ICreateCarDTO } from "../../DTOs";
import { Car } from "../../entities";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<void> {
    const {
      name,
      description,
      fine_amount,
      brand,
      category_id,
      daily_rate,
      license_plate,
    } = data;

    const car = new Car();

    Object.assign(car, {
      name,
      description,
      fine_amount,
      brand,
      category_id,
      daily_rate,
      license_plate,
    });

    this.cars.push(car);
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.license_plate === license_plate);

    return car;
  }
}

export { CarsRepositoryInMemory };
