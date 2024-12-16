import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { User as UserEntity } from 'src/users/typeorm';
import { SerializedUser, User } from 'src/users/types/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) 
    private readonly userEntity: Repository<UserEntity>) {}
    private users: User[] = [{
        username: "Mike Tyson",
        password: "James"
    }, {
        username: "Oluwa Johnson",
        password: "JayJay12345"
    }]


    getUsers() {
        return this.users.map((user) => plainToClass(SerializedUser, user))
    }

    getUserById(username: string) {
      return this.users.find(user => user.username === username)
    }

   async createUser(user: CreateUserDto)  {
        const newUser = this.userEntity.create(user)
        if(newUser){
            return this.userEntity.save(newUser)
        } else {
            throw new BadRequestException()
        }
       
    }

  
}
