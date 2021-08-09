import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getCoffees() {
    return 'List of coffees';
  }

  @Get(':id')
  getCoffee(@Param('id') id: string) {
    return `This route return coffee #${id}`;
  }

  @Post()
  createCoffee(@Body() body) {
    return body;
  }
}
