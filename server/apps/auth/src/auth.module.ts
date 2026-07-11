import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from '@lib/database/database.module';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';

@Module({
  imports: [DatabaseModule, SequelizeModule,UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
