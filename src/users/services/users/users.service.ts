import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { User as UserEntity } from 'src/users/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) 
    private readonly userRepository: Repository<UserEntity>) {}

   async createUser(user: CreateUserDto)  {
        const newUser = this.userRepository.create(user)
        if(newUser){
            return this.userRepository.save(newUser)
        } else {
            throw new BadRequestException()
        }
    }

    async findUserByUsername(username: any) {
       const user =  await this.userRepository.findOne(username)
       console.log("user service")
       if(user) {
        return user;
       } else {
        throw new NotFoundException()
       }
    }
}
