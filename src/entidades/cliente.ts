import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Agricultor } from "./agricultor";

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    email: string;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;

    @ManyToOne( type => Agricultor, agricultor => agricultor.clientes)
    agricultor: Agricultor;

}