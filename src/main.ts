import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WrapResponseInterceptor } from './common/interceptors/wrap-response.interceptor';

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
  app.useGlobalInterceptors(new WrapResponseInterceptor());
  await app.listen(3000);
}
bootstrap();
