import { IsEmail, MinLength, IsNotEmpty, IsIn, IsString, IsAlpha, MaxLength, Matches, Length } from "class-validator";
export class DeviceDto{
    /*@IsEmail()
     readonly email:string;*/

    @MinLength(2)
    name: string;

    @IsNotEmpty()
    color:string;


    @IsString()
    @IsIn(['phone, Pc, Laptop'])
    @IsAlpha()
    type:String;


    @IsString()
    @IsIn(['vailabe', 'unvailable'])
    state:string;

    @IsString()
    @Length(2,50)
    @IsAlpha()
    model:string;

    @IsString()
    @MaxLength(50)
    @IsAlpha()
    @Matches(/^[A-Za-z]+$/i)
    manufacturer:string;

    @IsString()
    @Length(20)
    @IsAlpha()
    @Matches(/^[A-Za-z0-9]+$/i)
    OS:string;

}
//---------------------------------------------------------------------
/*
export interface DeviceInfo {
    type:string;
}
export type DeviceName = "deviceA" | "deviceB" | "deviceC";

export const devices: Record<DeviceName, DeviceInfo> = {
    deviceA: { type: "Smartphone"},
    deviceB: { type: "Tablet"},
    deviceC: { type: "Laptop"},
  };
  */