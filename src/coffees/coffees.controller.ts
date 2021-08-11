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
import { ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Public() // If you comment this line, you have to set Authorization header to access this method
  @Get()
  async getCoffees(@Query() paginationQuery: PaginationQueryDto) {
    return this.coffeesService.findAll(paginationQuery);
  }

  @Public()
  @Get(':id')
  getCoffee(@Param('id', ParseIntPipe) id: number) {
    return this.coffeesService.findOne(id);
  }

  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  createCoffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Patch(':id')
  updateCoffee(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':id')
  deleteCoffee(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }
}
