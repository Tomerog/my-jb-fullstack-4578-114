import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Type from "./type";

@Table({
  underscored: true,
})
export default class Furniture extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ForeignKey(() => Type)
  @AllowNull(false)
  @Column(DataType.UUID)
  typeId: string;

  @AllowNull(false)
  @Column
  dimension: string;

  @AllowNull(false)
  @Column
  color: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  price: number;

  @BelongsTo(() => Type)
  type: Type;
}
