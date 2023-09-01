import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class campo {

    @PrimaryGeneratedColumn()
    Nombre: string;

    @Column()
    Ubicacion: string;

}