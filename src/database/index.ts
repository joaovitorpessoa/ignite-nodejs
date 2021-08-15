import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database_rentx";
  createConnection({
    ...options,
  });
});

/**
 *     O TypeORM não consegue referenciar o host do docker via ormconfig.json, por isso
 *  é trocado pelo host real na hora de realizar a conexão.
 *     Além disso, a propriedade "host" é apenas de leitura e o TypeScript não permite
 *  reescrever ela, por isso que é feito esse `options as IOptions`, pois assim o
 *  TypeScript entende que a interface é igual ao objeto options.
 **/
