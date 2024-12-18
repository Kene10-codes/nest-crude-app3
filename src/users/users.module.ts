import { Module } from '@nestjs/common';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [{
    provide: 'USER_SERVICE',
    useClass: UsersService
  }],
  controllers: [UsersController],
})
export class UsersModule {}
