import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity('coffees') // sql table will be `coffees`. Without argument, it will be class name in lowercase === 'coffee'.
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  origin: string;

  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees)
  flavors: Flavor[];
}
