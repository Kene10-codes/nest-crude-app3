import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { SESSION_INFO } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: SESSION_INFO.secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 100000,

    }
  }))
  app.use(passport.initialize())
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
