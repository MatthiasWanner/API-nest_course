import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Enabling "whitelist" feature of ValidationPipe
      forbidNonWhitelisted: true, // Throw errors when whitelisted properties are found
      transform: true, // Enabling auto transform feature of ValidationPipe
      transformOptions: {
        enableImplicitConversion: true, // Enabling implicit conversion feature of ValidationPipe
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
