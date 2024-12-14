import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
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
  @Get(':username')
  getUser(@Param('username') username: string) {
     const user = this.userService.getUserById(username)

    if(!user) {
      throw new HttpException("User Not Found!", HttpStatus.NOT_FOUND)
    } 
    return new SerializedUser(user);
  }



}
