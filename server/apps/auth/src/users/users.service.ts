import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './modal/user.modal';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async createUser(payload: any) {
    const query = await this.userModel.create({
      username: payload.username,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
      role: 'user',
      isActive: true,
    });

    return {
      query,
      message: 'User created successfully!',
    };
  }

  async loginUser(body:any) {

    const data= await this.userModel.findOne({
      where: {
        email: body?.username,
        password: body?.password,
      },
    });
    if (!data) {
      return {
        message: 'Invalid email or password',
      };
    }

    return {
      data,
      message: 'Login successful',
    };
  }
}