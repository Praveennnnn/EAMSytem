import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);

    if (!user) {
      return { message: 'User not found' };
    }

    // ✅ Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    //bcrypt.hash('swift', 10).then(console.log);

    if (!isMatch) {
      return { message: 'Invalid password' };
    }

    return {
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };
  }


  async register(data: any) {
    const existingUser = await this.usersService.findByUsername(data.username);
    if (existingUser) {
      return { message: 'Username already exists' };
    }
    const user = await this.usersService.createUser(data);
    return {
      message: 'User registered successfully',
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    };
  }
}