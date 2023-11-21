import { ValidationOptions } from "class-validator";

export function minLengthValidationOptions(
    validationOptions?: ValidationOptions){
        return{
            message:
            'El campo $property debe ser mayor o igual a $constraint1 caracteres'
        };
    }