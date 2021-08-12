import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    CoffeesModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL), // DB URL is set in .env (mongodb://localhost:27017/nest-course)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
