import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class fruta {

    @PrimaryGeneratedColumn()
    Nombre: string;

    @Column()
    Variedad: string;

}