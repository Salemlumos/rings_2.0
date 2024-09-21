import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export default class Race {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'enum',
    enum: ['Elfo', 'Anão', 'Homen', 'Sauron'],
    default: 'Homen',
  })
  nome: string = ""; 

}
