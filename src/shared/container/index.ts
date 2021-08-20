import { container } from "tsyringe";

import {
  ICategoriesRepository,
  CategoriesRepository,
  ISpecificationsRepository,
  SpecificationsRepository,
} from "../../modules/cars/repositories";

import {
  IUsersRepository,
  UsersRepository,
} from "../../modules/accounts/repositories";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
