import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { SESSION_INFO } from './constants/constants';
import { TypeormStore } from 'connect-typeorm';
import { DataSource} from 'typeorm';
import { SessionEntity } from './users/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionRepository =  app.get(DataSource).getRepository(SessionEntity)
  app.use(session({
    secret: SESSION_INFO.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 100000,
    },
    store: new TypeormStore({
      cleanupLimit: 10
    }).connect(sessionRepository)
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
