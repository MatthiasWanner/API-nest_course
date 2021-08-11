import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeesService,
        { provide: Connection, useValue: {} },
        { provide: getRepositoryToken(Flavor), useValue: {} }, // 👈
        { provide: getRepositoryToken(Coffee), useValue: {} }, // 👈
        { provide: getRepositoryToken(Event), useValue: {} }, // 👈},
      ],
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    describe('when the coffee exists', () => {
      it('should return one coffee', async () => {
        const coffeeId = '1';
        const expectedCoffee = {};

        const foundCoffee = await service.findOne(+coffeeId);

        expect(foundCoffee).toEqual(expectedCoffee);
      });
    });
  });
});
