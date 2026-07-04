import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Employee Attendance Management API')
    .setDescription('Employee Attendance Management System APIs')
    .setVersion('1.0')
    .build();

  app.enableCors({
    origin: 'http://localhost:5173', 
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 


  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();