import { Injectable, NotFoundException } from '@nestjs/common';

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

  findOne(id: number): Coffee {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      return { message: `Coffee #${id} updated`, body: updateCoffeeDto };
    } else {
      return { message: `Coffee ${id} not found` };
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
