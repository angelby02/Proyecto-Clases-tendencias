import { PickType } from "@nestjs/swagger";
import { DeviceDto } from "./device.dto";

export class ChangeDeviceDto extends PickType(DeviceDto,[
    'name',
    'color',
    'type',
    'state',
    'model',
    'manufacturer',
    'OS'
])
{}