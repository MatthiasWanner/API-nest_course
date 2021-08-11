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
import { Public } from 'src/common/decorators/public.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {
    console.log('CoffeesController instancied');
  }

  @Public() // If you comment this line, you have to set Authorization header to access this method
  @Get()
  async getCoffees(@Query() paginationQuery: PaginationQueryDto) {
    //const { limit, offset } = paginationQuery;
    await new Promise((resolve) => setTimeout(resolve, 5000)); // force this method to wait 5s to send response
    return this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  getCoffee(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Patch(':id')
  updateCoffee(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
