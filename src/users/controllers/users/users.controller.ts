import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, NotFoundException, Param, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { HttpExceptionsFilter } from 'src/users/filters/HttpException';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/user';


@Controller('users')
export class UsersController {
  constructor(
             @Inject('USER_SERVICE') 
             private readonly userService: UsersService
             ){}

  @Post('create')
  @UsePipes(new ValidationPipe)
  createUser(@Body() user: CreateUserDto) {
     return this.userService.createUser(user)
  }


  @Get(":username")
  findUserByUsername(@Param('username') username: string) {
    return this.userService.findUserByUsername(username)
  }

  @Get(':id')
  findUserById(@Param('id') id: number) {
    return id
  }
}
