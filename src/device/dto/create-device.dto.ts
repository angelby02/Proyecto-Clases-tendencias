import { IsEmail, MinLength, IsNotEmpty, IsString, IsIn, Length, MaxLength, IsAlpha, Matches } from "class-validator";
import { minLengthValidationOptions } from "src/common/validations.dto";

export class CreateDeviceDto{
    @IsEmail()
    
    email:"lvargas@gmail.com";

    @MinLength(1, minLengthValidationOptions())
    name: string;
    
    @IsNotEmpty()
    color:string;

    @IsNotEmpty()
    Id:number;

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


