import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';

// Classe with logic implementation
@Injectable()
export class CoffeeBrandsFactory {
  // Note "async" here, and Promise/Async event inside the Factory function
  // Could be a database connection / API call / etc
  // In our case we're just "mocking" this type of event with a Promise
  async create(): Promise<string[]> {
    // Your logic here
    const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
    return coffeeBrands;
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    CoffeeBrandsFactory,
    // Asynchronous "useFactory" (async provider example)
    {
      provide: COFFEE_BRANDS,
      useFactory: (coffeeBrandsFactory: CoffeeBrandsFactory) => {
        console.log('[!] Async factory'); // Note this console.log is not async and logged directly
        return coffeeBrandsFactory.create(); // This method is async and logged later. It don't block the app
      },
      inject: [CoffeeBrandsFactory],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
