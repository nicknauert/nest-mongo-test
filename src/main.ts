import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(bodyParser.json());
    app.enableCors({
        origin: 'http://localhost:4200',
    })
    await app.listen(3000);
}
bootstrap();
