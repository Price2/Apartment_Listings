import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './entities/apartments.entity';
import { ApartmentService } from './services/apartment.service';


@Module({
    imports: [TypeOrmModule.forFeature([Apartment])],
    controllers: [/* ... */],
    providers: [/* ... */ApartmentService],
  })
  export class ApartmentsModule {}