import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  Default,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Product from "./product";

@Table({
  underscored: true,
})
export default class Category extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => Product, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  products: Product[];
}
