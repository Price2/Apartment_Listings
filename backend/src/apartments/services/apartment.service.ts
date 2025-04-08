import { Injectable, NotFoundException } from '@nestjs/common';
import { Apartment } from '../entities/apartments.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApartmentDto } from '../dto/create_apartment.dto';

@Injectable()
export class ApartmentService {
    constructor(
        @InjectRepository(Apartment)
        private apartmentRepository: Repository<Apartment>
    ) { }
    
    async findAll(): Promise<Apartment[]> {
        return this.apartmentRepository.find();
    }
    
    async findOne(id: number): Promise<Apartment> {
        try {
            const apartment = await this.apartmentRepository.findOne({ where: { id } });
            if (!apartment) {
              throw new NotFoundException(`Apartment with ID ${id} not found`);
            }
            return apartment;
          } catch (error) {
            throw error; // Re-throw the error to be handled by the controller or global filter
          }
    }
    
    async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
        const apartment: Apartment = this.apartmentRepository.create(createApartmentDto);
        return this.apartmentRepository.save(apartment);
      }
    
    
    
}

