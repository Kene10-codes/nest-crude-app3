import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersService } from './services/customers/customers.service';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersMiddleware } from './middlwares/customers/customers.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CustomersMiddleware)
    .exclude({
      path: '/api/customers',
      method: RequestMethod.GET
    }).forRoutes(CustomersController)
  }
}
