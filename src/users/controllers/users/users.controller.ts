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

  @Get()
  getUsers(){
    return this.userService.getUsers()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionsFilter)
  @Get(':username')
  getUser(@Param('username') username: string) {
     const user = this.userService.getUserById(username)

    if(!user) {
      throw new NotFoundException()
    } 
    return new SerializedUser(user);
  }

  @Post('create')
  @UsePipes(new ValidationPipe)
  createUser(@Body() user: CreateUserDto) {
     return this.userService.createUser(user)
  }


}
