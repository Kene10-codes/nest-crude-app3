import { Type } from "class-transformer";
import { IsEmail, isEmail, IsNotEmpty, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./createAddress.dto";

export class RegisterDto {
    @IsNumberString()
    id: number;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto;
}