import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

}