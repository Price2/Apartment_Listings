import { Injectable, NotFoundException } from '@nestjs/common';
import { Apartment } from '../entities/apartments.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApartmentDto } from '../dto/create_apartment.dto';
import { ILike } from 'typeorm';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectRepository(Apartment)
    private apartmentRepository: Repository<Apartment>,
  ) {}

  /**
   * Retrieves all apartments from the repository.
   *
   * @returns A promise that resolves to an array of `Apartment` entities.
   */
  async findAll(): Promise<Apartment[]> {
    return this.apartmentRepository.find();
  }

  /**
   * Finds apartments by their name using a case-insensitive search.
   *
   * @param name - The name or partial name of the apartment to search for.
   * @returns A promise that resolves to an array of apartments matching the search criteria.
   * @remarks
   * This method performs a case-insensitive search using the `ILike` operator.
   * It retrieves all apartments whose names contain the specified substring.
   */
  async findByName(name: string): Promise<Apartment[]> {
    const myaparts = await this.apartmentRepository.find({
      where: { name: ILike(`%${name}%`) }, // Case-insensitive search using ILike
    });
    return myaparts;
  }

  /**
   * Retrieves a single apartment by its unique identifier.
   *
   * @param id - The unique identifier of the apartment to retrieve.
   * @returns A promise that resolves to the apartment if found.
   * @throws NotFoundException - If no apartment with the given ID is found.
   */
  async findOne(id: number): Promise<Apartment> {
    const apartment = await this.apartmentRepository.findOne({ where: { id } });
    if (!apartment) {
      throw new NotFoundException(`Apartment with ID ${id} not found`);
    }
    return apartment;
  }

  /**
   * Creates a new apartment record in the database.
   *
   * @param createApartmentDto - Data Transfer Object containing the details of the apartment to be created.
   * @returns A promise that resolves to the created Apartment entity.
   */
  async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    const apartment: Apartment =
      this.apartmentRepository.create(createApartmentDto);
    return this.apartmentRepository.save(apartment);
  }
}
