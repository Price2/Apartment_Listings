import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateApartmentDto { 
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}
