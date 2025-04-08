import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartmentsModule } from './apartments/apartments.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
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
