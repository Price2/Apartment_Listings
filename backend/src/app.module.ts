import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentsModule } from './apartments/apartments.module';


/**
 * The main application module for the backend service.
 * 
 * This module is decorated with the `@Module` decorator, which defines the imports,
 * controllers, and providers for the application. It configures the connection to
 * a PostgreSQL database using TypeORM and imports the `ApartmentsModule` for handling
 * apartment-related functionality.
 * 
 * @module AppModule
 * 
 * @description
 * - Configures TypeORM with PostgreSQL as the database.
 * - Automatically loads entities from the specified directory.
 * - Enables database synchronization for development purposes (should be disabled in production).
 * - Enables logging for database operations.
 * 
 * @imports
 * - `TypeOrmModule`: Configures the database connection and ORM settings.
 * - `ApartmentsModule`: Handles apartment-related features and logic.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432, // default port for PostgreSQL
      username: 'admin',
      password: 'admin',
      database: 'apartments',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // set to false in production
      logging: true,
    }),
    ApartmentsModule
  ],
})
export class AppModule {}
