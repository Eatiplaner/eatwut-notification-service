import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { randomUUID } from 'crypto';
import { KafkaConfig } from 'src/kafka/config';
import { env } from './env.config';

export const microserviceConfig: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId:
        'EATWUT_NOTIFICATION_BACKEND_' +
        randomUUID({ disableEntropyCache: true }),
      brokers: [env.KAFKA.KAFKA_BOOTSTRAP_SERVER],
      retry: {
        maxRetryTime: 1000 * 60 * 10,
      },
    },
    consumer: {
      groupId: 'EATWUT_NOTIFICATION_BACKEND_' + KafkaConfig.groupId,
      maxWaitTimeInMs: 1000,
    },
  },
};
