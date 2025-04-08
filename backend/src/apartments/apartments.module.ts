import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './entities/apartments.entity';
import { ApartmentService } from './services/apartment.service';
import { ApartmentsController } from './controllers/apartments.controller';


@Module({
    imports: [TypeOrmModule.forFeature([Apartment])],
    controllers: [ApartmentsController],
    providers: [ApartmentService],
  })
  export class ApartmentsModule {}