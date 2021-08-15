import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: Date;

  constructor({ name, description }) {
    this.id = uuid();
    this.name = name;
    this.description = description;
  }
}

export { Category };
