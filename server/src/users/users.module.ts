import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { admin_users } from './admin_user.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([admin_users])],
  providers: [UsersService],
  exports: [UsersService], 
})
export class UsersModule {}