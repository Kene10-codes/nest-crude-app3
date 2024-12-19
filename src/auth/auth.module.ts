import { Module } from '@nestjs/common';
import { AuthService} from './services/auth-service/auth-service';
import { AuthController} from './controllers/auth-controller/auth-controller';
import { UsersService } from 'src/users/services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/typeorm';
import { LocalStorage } from './utils/LocalStratergy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './utils/SessionSerializeR';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule.register({
    session: true
  })],
  providers: [{
    provide: 'AUTH_SERVICE',
    useClass: AuthService
  }, {
    provide: 'USER_SERVICE',
    useClass: UsersService
  }, LocalStorage, SessionSerializer],
  controllers: [AuthController]
})
export class AuthModule {}
