import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/user';

@Injectable()
export class UsersService {
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

  
}
