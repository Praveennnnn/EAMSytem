import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { admin_users } from './admin_user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(admin_users)
    private userRepo: Repository<admin_users>,
  ) {}

  async findByUsername(username: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    // console.log("INPUT USERNAME:", username);
    // console.log("DB RESULT:", user);
    return user;
  }

  async createUser(data:any) {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.userRepo.create({
      username: data.username,
      password: hashedPassword,
      email: data.email,
      role: data.role,
    });

    return this.userRepo.save(user);
  }
}