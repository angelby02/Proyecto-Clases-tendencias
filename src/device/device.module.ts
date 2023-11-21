import { Module } from "@nestjs/common";
import { DeviceController } from "./device.controller";
import { DeviceEntity } from "./device.entity";
import {TypeOrmModule}from '@nestjs/typeorm';
import {DeviceServices} from './device.services';


@Module({
    controllers:[DeviceController], 
    imports:[TypeOrmModule.forFeature([DeviceEntity])],
    providers: [DeviceServices],
})
export class DeviceModule{}

