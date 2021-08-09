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

@Controller('coffees')
export class CoffeesController {
  @Get()
  getCoffees(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `List of coffees. Limit: ${limit}, offset: ${offset}`;
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
