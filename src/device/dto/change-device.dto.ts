import { IsEmail, MinLength, IsNotEmpty, IsBoolean, MaxLength } from "class-validator";

export class ChangeDeviceDto{
  
    @IsBoolean()
    state:boolean;
    @IsEmail({},{message:'El campo $property debe ser un correo valido'})
    email:string;
}