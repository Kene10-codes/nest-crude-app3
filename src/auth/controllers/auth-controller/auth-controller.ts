import { Body, Controller, Get, Inject, Post, Req, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/services/auth-service/auth-service';
import { AuthenticatedGuard, LocalGuard } from 'src/auth/utils/LocalGuard';
import { Request } from 'express';


@Controller('auth')
export class AuthController {
   constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthService){}
   
    @UseGuards(LocalGuard)
    @Post("login")
    async loginUser(@Req() req: Request, username: string, password: string) {
         await this.authService.validaterUser(username, password)
    }

    @Get('session')
    getSession(@Session() session: Record<string, any>) {
     console.log(session.id)
    }

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    getAuthStatus(@Req() req: Request) {
     console.log(req.user)
     return req.user
    }
}
