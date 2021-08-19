import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;

  // Dentro do container deve ser o nome dado ao service no docker-compose.yml
  // Fora do container deve ser localhost (para procurar por um banco local)
  newOptions.host = "localhost";

  createConnection({
    ...options,
  });
});
