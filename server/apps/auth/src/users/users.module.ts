import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { User } from './modal/user.modal';
import { UsersController } from './users.controller';

@Module({
   imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
