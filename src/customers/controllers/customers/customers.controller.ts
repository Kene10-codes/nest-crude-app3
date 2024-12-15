import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UseInterceptors, UsePipes, ValidationPipe} from '@nestjs/common';
import { Request, Response } from 'express';
import { RegisterDto } from 'src/customers/dtos/register.dto';
import { BadRequestException } from 'src/customers/exceptions/BadRequest';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService:  CustomersService){}

    @Get()
    getUsers() {
        return this.customersService.getUsers()
    }

    @Get(':id')
    getUserById(@Req() req: Request, @Res() res: Response){
       return this.customersService.getUserById(Number(req.params.id))
    }

    @Get('search/:id')
    getUserViaId(@Param('id', ParseIntPipe) id: number) {
       const customer = this.customersService.getUserViaId(id)
       if(customer) {
        return customer
       }
       else {
        throw new BadRequestException()
       }
    }

    @Post('create')
    @UsePipes(new ValidationPipe)
    registerUser(@Body() data: RegisterDto){
        this.customersService.registerUser(data)
    }
}
