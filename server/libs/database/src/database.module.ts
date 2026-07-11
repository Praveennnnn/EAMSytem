import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { SequelizeDatabaseModule } from './sequelize/sequelize.module';

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService,SequelizeDatabaseModule],
  imports: [SequelizeDatabaseModule],
})
export class DatabaseModule {}
