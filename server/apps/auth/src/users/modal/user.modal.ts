import {
  Table,
  Column,
  Model,
} from 'sequelize-typescript';

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

interface UserCreationAttributes
  extends Omit<UserAttributes, 'id'> {}

@Table
export class User extends Model<
  UserAttributes,
  UserCreationAttributes
> {
  @Column
  declare username: string;

  @Column
  declare firstName: string;

  @Column
  declare lastName: string;

  @Column
  declare email: string;

  @Column
  declare password: string;

  @Column
  declare  role: string;

  @Column
  declare isActive: boolean;
}