import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../services/auth-service/auth-service";
import { Inject, UnauthorizedException } from "@nestjs/common";


export class LocalStorage extends PassportStrategy(Strategy) {
  constructor(
   @Inject('AUTH_SERVICE') 
   private readonly authService: AuthService
  ) {
    super()
  }

  async validate(username: string, password: string) {
    console.log("inside local stratergy")
    const userDB = await this.authService.validaterUser(username, password)
    if(userDB) {
        return userDB
    } else {
        throw new UnauthorizedException()
    }
     
  }

}