import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(6)
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}