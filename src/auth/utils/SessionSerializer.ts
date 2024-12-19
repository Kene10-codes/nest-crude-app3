import {Inject} from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from 'src/users/services/users/users.service';
import { User } from 'src/users/typeorm';


export class SessionSerializer extends PassportSerializer {
    constructor(@Inject('USER_SERVICE') private readonly usersService: UsersService){
        super()
    } 

    serializeUser(user: User, done: (error, user: User) => void) {
        done(null, user) 
    }

    async deserializeUser(user: User , done: Function) {
      const userData =  await this.usersService.findUserByUsername(user.id)
      console.log("user data")
      console.log(userData)
      userData ? done(null, userData) : done(null, null)

    }  
}  