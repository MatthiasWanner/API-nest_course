import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getCoffees() {
    return 'List of coffees';
  }

  @Get(':id')
  getCoffee(@Param() params) {
    return `This route return coffee #${params.id}`;
  }
}
