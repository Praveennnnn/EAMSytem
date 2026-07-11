import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeService } from './sequelize.service';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'mariadb',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,

        autoLoadModels: true,
        synchronize: true,

        logging: false,
      }),
      
    }),
  ],
  exports: [SequelizeModule],
})
export class SequelizeDatabaseModule {}