import { Injectable } from '@nestjs/common';

import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      origin: 'Brazil',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Cafe Mocha',
      origin: 'Colombia',
      flavors: ['espresso', 'mocha'],
    },
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    return this.coffees.find((coffee) => coffee.id === +id);
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      return { message: `Coffee #${id} updated`, body: updateCoffeeDto };
    } else {
      return { message: `Coffee ${id} not found` };
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
