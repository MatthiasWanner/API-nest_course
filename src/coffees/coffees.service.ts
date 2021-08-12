import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectModel(Coffee.name)
    private coffeeModel: Model<Coffee>,
  ) {}

  findAll(): Promise<Coffee[]> {
    return this.coffeeModel.find().exec();
  }

  async findOne(id: string): Promise<Coffee> {
    const coffee = await this.coffeeModel.findOne({ _id: id }).exec();
    if (!coffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    const coffee = new this.coffeeModel(createCoffeeDto);
    return coffee.save();
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee> {
    const existingCoffee = await this.coffeeModel
      .findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true })
      .exec();

    if (!existingCoffee) {
      throw new NotFoundException(`Coffee with id ${id} not found`);
    }
    return existingCoffee;
  }

  async remove(id: string): Promise<Coffee> {
    const coffee = await this.findOne(id); // Note we use the findOne method already written that manage error: DRY 💡
    return coffee.remove();
  }
}
