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
import Attraction from "./attraction";

@Table({
  underscored: true,
})
export default class Region extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => Attraction, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  attractions: Attraction[];
}
