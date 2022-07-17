import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KafkaConfig } from './kafka/config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
        },
        consumer: {
          groupId: KafkaConfig.groupId,
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
