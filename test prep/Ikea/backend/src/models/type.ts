import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Furniture from "./furniture";

@Table({
  underscored: true,
})
export default class Type extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  type: string;

  @HasMany(() => Furniture)
  furniture: Furniture;
}
