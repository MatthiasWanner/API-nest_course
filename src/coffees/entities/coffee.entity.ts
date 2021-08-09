import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coffees') // sql table will be `coffees`. Without argument, it will be class name in lowercase === 'coffee'.
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  origin: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
