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
import Region from "./region";

@Table({
  underscored: true,
})
export default class Attraction extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  description: string;

  @ForeignKey(() => Region)
  @AllowNull(false)
  @Column(DataType.UUID)
  regionId: string;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  priceAdult: number;

  @AllowNull(false)
  @Column(DataType.DECIMAL)
  priceChild: number;

  @BelongsTo(() => Region)
  region: Region;
}
