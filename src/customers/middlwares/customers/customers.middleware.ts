import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class CustomersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const {authorization} = req.headers
    console.log(authorization)
    if(!authorization) {
      throw new UnauthorizedException("Unauthorized")
    } 
    else if(authorization !== "abcd"){ 
      throw new UnauthorizedException("Authorized is wrong!")
    }
    next();
  }
}
