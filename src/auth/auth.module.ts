import { Module } from '@nestjs/common';
import { AuthService} from './services/auth-service/auth-service';
import { AuthController} from './controllers/auth-controller/auth-controller';
import { UsersService } from 'src/users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/typeorm';
import { LocalStorage } from './utils/localstratergy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule],
  providers: [{
    provide: 'AUTH_SERVICE',
    useClass: AuthService
  }, {
    provide: 'USER_SERVICE',
    useClass: UsersService
  }, LocalStorage],
  controllers: [AuthController]
})
export class AuthModule {}
