import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../entities/apartments.entity';
import { CreateApartmentDto } from '../dto/create_apartment.dto';

@Controller('apartments')
export class ApartmentsController {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Get()
  async listApartments(@Query('name') name?: string): Promise<Apartment[]> {
    try {
      // If a name query parameter is provided, filter apartments by name
      if (name) {
        return await this.apartmentService.findByName(name);
      }
      // Otherwise, return all apartments
      return await this.apartmentService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(
        'An unexpected error occurred while fetching apartments.',
      );
    }
  }


  @Get(':id') // This decorator maps HTTP GET requests with a dynamic parameter `id` to this method.
  async getApartmentDetails(@Param('id') id: number): Promise<Apartment> {
    if (isNaN(id)) {
      throw new BadRequestException('ID must be a number'); // Returns 400 Bad Request
    }

    try {
      return await this.apartmentService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error; // Re-throw known exceptions
      }
      throw new InternalServerErrorException(
        'An unexpected error occurred while fetching apartment details.',
      );
    }
  }

  @Post() // This decorator maps HTTP POST requests to this method.
  async addApartment(
    @Body() createApartmentDto: CreateApartmentDto,
  ): Promise<Apartment> {
    try {
      // Endpoint: POST /apartments
      return await this.apartmentService.create(createApartmentDto);
    } catch (error) {
      throw new InternalServerErrorException(
        'An unexpected error occurred while adding the apartment.',
      );
    }
  }
}
