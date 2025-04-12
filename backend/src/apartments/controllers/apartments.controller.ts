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

  /**
   * Retrieves a list of apartments. If a `name` query parameter is provided,
   * it filters the apartments by the specified name. Otherwise, it fetches all apartments.
   *
   * @param name - (Optional) The name of the apartment to filter by.
   * @returns A promise that resolves to an array of apartments.
   * @throws {InternalServerErrorException} If an unexpected error occurs while fetching apartments.
   */
  @Get()
  async listApartments(@Query('name') name?: string): Promise<Apartment[]> {
    try {
      if (name) {
        return await this.apartmentService.findByName(name);
      }
      return await this.apartmentService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(
        'An unexpected error occurred while fetching apartments.',
      );
    }
  }


  /**
   * Retrieves the details of an apartment by its ID.
   *
   * @param id - The unique identifier of the apartment.
   * @returns A promise that resolves to the apartment details.
   * @throws {BadRequestException} If the provided ID is not a valid number.
   * @throws {NotFoundException} If no apartment is found with the given ID.
   * @throws {InternalServerErrorException} If an unexpected error occurs while fetching the apartment details.
   */
  @Get(':id') 
  async getApartmentDetails(@Param('id') id: number): Promise<Apartment> {
    if (isNaN(id)) {
      throw new BadRequestException('ID must be a number');
    }

    try {
      return await this.apartmentService.findOne(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException(
        'An unexpected error occurred while fetching apartment details.',
      );
    }
  }

  /**
   * Handles the addition of a new apartment.
   *
   * @param createApartmentDto - The data transfer object containing the details of the apartment to be created.
   * @returns A promise that resolves to the created apartment entity.
   * @throws {InternalServerErrorException} If an unexpected error occurs during the creation process.
   */
  @Post()
  async addApartment(
    @Body() createApartmentDto: CreateApartmentDto,
  ): Promise<Apartment> {
    try {
      return await this.apartmentService.create(createApartmentDto);
    } catch (error) {
      throw new InternalServerErrorException(
        'An unexpected error occurred while adding the apartment.',
      );
    }
  }
}
