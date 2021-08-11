import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'Name of the coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Origin of the coffee' })
  @IsString()
  readonly origin: string;

  @ApiProperty({ description: 'Flavors array' })
  @IsString({ each: true })
  readonly flavors: string[];
}
