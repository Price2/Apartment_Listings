import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/**
 * Represents an apartment entity in the database.
 */
@Entity()
export class Apartment {
  /**
   * The unique identifier for the apartment.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the apartment.
   */
  @Column()
  name: string;

  /**
   * The location of the apartment.
   */
  @Column()
  location: string;

  /**
   * The price of the apartment.
   * Stored as a decimal value.
   */
  @Column('decimal')
  price: number;

  /**
   * A description of the apartment.
   */
  @Column()
  description: string;
}