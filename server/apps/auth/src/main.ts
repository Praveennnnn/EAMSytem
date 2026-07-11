import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AuthModule);
  await app.listen(process.env.port ?? 3000);
  console.log('Auth service is running on port', process.env.PORT );

}
bootstrap();
