import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CustomersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const {authorization} = req.headers
    console.log(authorization)
    next();
  }
}
