
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Unique,
  Default,
} from 'sequelize-typescript';

@Table({
  tableName: 'user',
  timestamps: true,
  paranoid: true, // Adds deletedAt column
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  declare id: number;

  @AllowNull(false)
  @Column
  declare firstName: string;

  @AllowNull(false)
  @Column
  declare lastName: string;

  @Unique
  @AllowNull(false)
  @Column
  declare email: string;

  @AllowNull(false)
  @Column
  declare password: string;

  @Default('user')
  @Column(DataType.ENUM('admin', 'user'))
  declare role: string;

  @Default(true)
  @Column
  declare isActive: boolean;
}