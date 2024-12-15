import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ValidMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const {valid} = req.headers
    console.log(valid)
    if(!valid) {
      throw new UnauthorizedException("Unauthorized")
    } 
    next();
  }
}
