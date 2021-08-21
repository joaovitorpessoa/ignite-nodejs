import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUsername1629506119447
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /**
     *
     *   O código abaixo realmente está bugado. O TypeORM até o momento
     *  não corrigiu isso.
     *
     *  await queryRunner.addColumn(
     *    "users",
     *    new TableColumn({
     *      name: "username",
     *      type: "varchar",
     *    })
     *  );
     *
     **/
  }
}
