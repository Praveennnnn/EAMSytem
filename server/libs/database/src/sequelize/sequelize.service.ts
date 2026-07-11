import { Injectable, OnModuleInit } from '@nestjs/common';
import { Sequelize } from 'sequelize';

@Injectable()
export class SequelizeService implements OnModuleInit {
  constructor(private readonly sequelize: Sequelize) {}

  async onModuleInit() {
    await this.sequelize.authenticate();
    console.log('Database connected successfully');
  }
}
