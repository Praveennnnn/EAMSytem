import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(
    @InjectConnection()
    private readonly sequelize: Sequelize,
  ) {}

  async onModuleInit() {
    try {
        console.log('🔗 Attempting to connect to the database...');
      await this.sequelize.authenticate();
      console.log('✅ Database connected successfully');
    } catch (error) {
      console.error('❌ Database connection failed', error);
    }
  }
}