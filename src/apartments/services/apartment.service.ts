import { Injectable } from '@nestjs/common';
import { Apartment } from '../entities/apartments.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApartmentService {
    constructor(
        @InjectRepository(Apartment)
        private apartmentRepository: Repository<Apartment>,
    ) { }
    
    async findAll(): Promise<Apartment[]> {
        return this.apartmentRepository.find();
    }
    
    async findOne(id: number): Promise<Apartment> {
        const apartment = await this.apartmentRepository.findOne({ where: { id } });
        if (!apartment) {
            throw new Error(`Apartment with id ${id} not found`);
        }
        return apartment;
    }
    
    // async create(createApartmentDto: CreateApartmentDto): Promise<Apartment> {
    //     const apartment = this.apartmentRepository.create(createApartmentDto);
    //     return this.apartmentRepository.save(apartment);
    //   }
    
    
    
}

