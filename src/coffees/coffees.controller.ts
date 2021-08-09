import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() body) {
    return {
      message: `This route update coffee #${id}`,
      body: body,
    };
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return `This route remove coffee #${id}`;
  }
}
