import { Controller, Inject, Post, Req } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth-service/auth-service';

@Controller('auth')
export class AuthController {
   constructor(@Inject('Auth_SERVICE') private readonly authService: AuthService){}
   

    
    @Post("login")
    async loginUser(@Req() request: Request, username: string, password: string) {
         const userinfo = await this.authService.validaterUser(username, password)
         console.log(userinfo)
    }
}
