import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Apartment } from './entities/apartments.entity';
import { ApartmentService } from './services/apartment.service';
import { ApartmentsController } from './controllers/apartments.controller';


/**
 * The `ApartmentsModule` is a NestJS module that encapsulates the functionality
 * related to managing apartments. It imports the `TypeOrmModule` to integrate
 * the `Apartment` entity with the database, and provides the necessary
 * controllers and services for handling apartment-related operations.
 *
 * @module ApartmentsModule
 * @imports
 * - `TypeOrmModule.forFeature([Apartment])`: Registers the `Apartment` entity
 *   with TypeORM for database interactions.
 *
 * @controllers
 * - `ApartmentsController`: Handles incoming HTTP requests related to apartments.
 *
 * @providers
 * - `ApartmentService`: Contains the business logic for managing apartments.
 */
@Module({
    imports: [TypeOrmModule.forFeature([Apartment])],
    controllers: [ApartmentsController],
    providers: [ApartmentService],
  })
  export class ApartmentsModule {}