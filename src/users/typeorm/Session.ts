import { ISession } from "connect-typeorm";
import { Column, DeleteDateColumn, Entity, Index, PrimaryColumn } from "typeorm";


@Entity()
export class SessionEntity implements ISession {
    @Index()
    @Column('bigint')
    expiredAt = Date.now()

    @PrimaryColumn('varchar', { length: 256})
    id = '';


    @Column('text')
    json = '';  
}