import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  getCoffees(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  getCoffee(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  createCoffee(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
