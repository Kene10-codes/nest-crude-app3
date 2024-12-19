import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/users/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') private readonly userService: UsersService){}

   async  validaterUser(username: string, password: string) {
      const user = await this.userService.findUserByUsername(username)
      if(user){
        return user;
        // const matched = comparePassword(password, user.password)
        // if(matched){
        //   console.log(user)
        //   return user
        // } else {
        //   throw new NotFoundException()
        // }
      } else {
        throw new NotFoundException()
      }
    }
}
