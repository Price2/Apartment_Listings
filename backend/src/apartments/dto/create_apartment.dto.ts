import { IsNotEmpty, IsString, IsNumber, IsPositive } from 'class-validator';

/**
 * Data Transfer Object (DTO) for creating a new apartment.
 * This class is used to validate and transfer data related to apartment creation.
 */
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
