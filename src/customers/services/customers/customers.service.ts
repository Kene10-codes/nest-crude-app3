import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/customers/dtos/register.dto';
import { Customers } from 'src/customers/interface/customers';

@Injectable()
export class CustomersService {
    private customers:  Customers[] = [
        {
            id: 1,
           name: "Micheal Jackson",
            email: "test1@gmail.com"        
        },
        {
            id: 2,
           name: "Ifeolowa Sunday",
            email: "test3@gmail.com"        
        },
        {
            id: 3,
           name: "Emeka Chizoba",
            email: "test3@gmail.com"        
        },
        {
            id: 4,
           name: "Ogadagidi Onwa",
            email: "test4@gmail.com"        
        }
    ]

    getUsers() {
        return this.customers
    }

    getUserById(id: number) {
      return this.customers.find(user =>  user.id === id)
    }

    getUserViaId(id:number){
        return this.customers.find(user => user.id === id)
    }

    registerUser( registerDto: RegisterDto) {
        return this.customers.push(registerDto);
    }
}
