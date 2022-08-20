import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { NestExpressApplication } from '@nestjs/platform-express';
import { microserviceConfig } from '../../configs/microservice.config';
import { AppModule } from '../../app.module';

export class Bootstrap {
  private app: NestExpressApplication;

  async initApp() {
    this.app = await NestFactory.create<NestExpressApplication>(AppModule);
  }

  initMicroservice() {
    this.app.connectMicroservice<MicroserviceOptions>(microserviceConfig);
  }

  async start() {
    this.app.set('trust proxy', true);
    await this.app.startAllMicroservices();
  }
}
