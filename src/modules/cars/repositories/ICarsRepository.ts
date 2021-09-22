import { ICreateCarDTO } from "../DTOs";
import { Car } from "../entities";

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };
