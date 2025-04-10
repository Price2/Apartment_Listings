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

  async findAll(): Promise<Apartment[]> {
    return this.apartmentRepository.find();
  }

  async findByName(name: string): Promise<Apartment[]> {
    const myaparts = await this.apartmentRepository.find({
      where: { name: ILike(`%${name}%`) }, // Case-insensitive search using ILike
    });
    console.log('this is apartments backend', myaparts);
    return myaparts;
  }

  async findOne(id: number): Promise<Apartment> {
    const apartment = await this.apartmentRepository.findOne({ where: { id } });
    if (!apartment) {
      throw new NotFoundException(`Apartment with ID ${id} not found`);
    }
    return apartment;
  }

  async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    const apartment: Apartment =
      this.apartmentRepository.create(createApartmentDto);
    return this.apartmentRepository.save(apartment);
  }
}
