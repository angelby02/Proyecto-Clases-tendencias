import { Controller, Get, Post, Delete, Put, Patch, Param, Body, Query, ParseIntPipe } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { ChangeDeviceDto } from "./dto/change-device.dto";
import { DeviceServices } from "./device.services";


@ApiTags('Devices')
@Controller('devices')
export class DeviceController {

constructor(private readonly devicesServices:DeviceServices){

}
//GET
    @ApiOperation({
        description:"this will be a description",
        summary:"find device",
    })

    @Get()
    async find(){
        return await this.devicesServices.find();
    }
    
//POST
    @ApiOperation({
        description:"this will be a description",
        summary:"Add device",
    })

///--------------------------------------------------------------------------
    @Post()
    async create(@Body() payload: CreateDeviceDto){
        return await this.devicesServices.create(payload);
    }

//GET One---------------------------------------------------------------------------
@ApiOperation({
    description:"this will be a description",
    summary:"find One device",
})
/*
@Get()
findAll(): Record<DeviceName, DeviceInfo>{
    return devices;
}
@Get(':id')
findOne(@Param('id') id: DeviceName): DeviceInfo{
    return devices[id];
}
*/

@Get(':id')
async findOne(@Param('id') id: number){
    return await this.devicesServices.findOne(id);
}

//PUT-UPDATE
    @ApiOperation({
        description:"this will be a description",
        summary:"update device",
    
    })

    @Put(':id')
    async update(@Param ('id', ParseIntPipe) id: number, @Body() payload:UpdateDeviceDto){
        return await this.devicesServices.update(id,payload);
    }

//PATCH
    @ApiOperation({
        description:"this will be a description",
        summary:"change device",
    
    })

    @Patch(':id')
    changeState(@Param('id', ParseIntPipe) id: number, @Body() payload:ChangeDeviceDto){
        return {id, body: payload};
    }

//DELETE
    @ApiOperation({
        description:"this will be a description",
        summary:"delete device",
    
    })

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id:number){
        return await this.devicesServices.delete(id);
    }

}
