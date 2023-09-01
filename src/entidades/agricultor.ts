import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Cliente } from "./cliente";

@Entity()
export class Agricultor {

    @PrimaryGeneratedColumn()
    email: string;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;

    @OneToMany(type => Cliente, cliente => cliente.agricultor, {eager:true, cascade: true})
    clientes: Cliente[];

}