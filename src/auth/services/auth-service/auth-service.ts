import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') 
        private readonly userService: UsersService
        ){}

    validaterUser(username: string, password: string) {
         
      const user = this.userService.findUserByUsername(username)
      console.log("inside auth service")
      if(user){
        return user
      } else {
        throw new NotFoundException()
      }
    }


}
