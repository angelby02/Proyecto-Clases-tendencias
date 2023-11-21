import { Injectable, NotFoundException } from "@nestjs/common";
import { DeviceEntity } from "./device.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";


@Injectable()
export class DeviceServices {


    constructor(@InjectRepository(DeviceEntity) 
    private devicesRepository: Repository<DeviceEntity>,
    ){}

    async find(){
        const devices = await this.devicesRepository.find();

        return devices;
    }

    async findOne(id:number){
        const device:DeviceEntity = await this.devicesRepository.findOne({
            where:{id:id}
        });
        
        return device;
    }

    async create (payload  : CreateDeviceDto){
        const newDevice:DeviceEntity = this.devicesRepository.create();
        
        
        newDevice.name = payload.name;
        newDevice.color = payload.color;


        const response = await this.devicesRepository.save(newDevice);

        return response;    
    }


    async update (id: number , payload  : UpdateDeviceDto){
        const device:DeviceEntity = await this.findOne(id);
        if(!device){
            throw new  NotFoundException({
                message: " no encontrado",
                error: "no encontrado"
            });
        }
       
        device.id = payload.id;
        device.name = payload.name;
        device.color = payload.color;
      

        const response = await this.devicesRepository.update(id, device);

        return response;    
    }


    async delete (id: number){
        const device:DeviceEntity = await this.findOne(id);
        
        if(!device){
            throw new  NotFoundException({
                message: " no encontrado",
                error: "no encontrado"
            });
        }

        return await this.devicesRepository.delete(id)   
    }


}