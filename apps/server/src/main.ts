import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://beta.dynamx.fr',
      'https://dynamx.fr',
    ],
  });

  app.use(helmet());

  await app.listen(process.env.PORT || 2728);
}
bootstrap();
