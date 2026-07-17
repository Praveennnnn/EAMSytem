import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  
  const app = await NestFactory.create(AuthModule);
  app.enableCors({
  origin: 'http://localhost:5173',
  credentials: true,
});
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
