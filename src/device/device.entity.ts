import {Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"deviced"})
export class DeviceEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"name", type:"varchar", length:"100"})
    name: string;
    @Column({name:"color", type:"varchar", length:"30"})
    color: string;
    @Column({name:"type", type:"varchar", length:"30"})
    type: string;
    @Column({name:"model", type:"varchar", length:"30"})
    model: string;
    @Column({name:"state", type:"varchar", length:"30"})
    state: string;
    @Column({name:"manufacturer", type:"varchar", length:"30"})
    manufacturer: string;
    @Column({name:"OS", type:"varchar", length:"30"})
    OS: string;
}