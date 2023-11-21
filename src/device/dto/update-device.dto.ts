import { IsEmail, MinLength, IsOptional, MaxLength, IsAlpha, IsIn, IsString, Length, Matches } from "class-validator";

export class UpdateDeviceDto{
   

    @MinLength(2 ,{message:'El campo $property debe tener por lo menos 2 caracteres'})
    @MaxLength(5, {message:'El campo $property debe tener 5 caracteres como maximo'})
    name: string;

    @MinLength(5 ,{message:'El campo $property debe tener por lo menos 2 caracteres'})
    @MaxLength(15, {message:'El campo $property debe tener 5 caracteres como maximo'})
    color: string;

    @MinLength(2 ,{message:'El campo $property debe tener por lo menos 2 caracteres'})
    @MaxLength(5, {message:'El campo $property debe tener 5 caracteres como maximo'})
    id: number;

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