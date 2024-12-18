import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_INFO } from './constants/constants';
import { AuthModule } from './auth/auth.module';
import entities from './users/typeorm';


@Module({
  imports: [CustomersModule, UsersModule, AuthModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: DB_INFO.port,
    username: DB_INFO.username,
    password: DB_INFO.password,
    database: DB_INFO.database,
    entities,
    synchronize: true

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
