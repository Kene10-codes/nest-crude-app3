import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    zip: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: number;
}