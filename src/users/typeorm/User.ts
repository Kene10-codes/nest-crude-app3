import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id'
    }) 
    id: number;

    @Column({
        nullable: false
    })
    username: string;

    @Column({
        nullable: false,
        name: 'email_address'
    })
    email: string;

    @Column({
        nullable: false
    })
    password: string

}