import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  getCoffees() {
    return 'List of coffees';
  }

  @Get(':id')
  getCoffee(@Param('id') id: string, @Res() res) {
    return res.status(200).json({
      message: `This route return coffee #${id}`,
    });
  }

  @Post()
  createCoffee(@Body() body) {
    return body;
  }
}
