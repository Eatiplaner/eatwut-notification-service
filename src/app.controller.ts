import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommunicationType } from './enums/communication-type.enum';
import { NotificationMessage } from './interfaces/notification.interface';
import { KAFKA_TOPIC } from './kafka/topic';
import { SendgridService } from './services/sendgrid/sendgrid.service';

@Controller()
export class AppController {
  constructor(private readonly mailingService: SendgridService) {}

  @MessagePattern(KAFKA_TOPIC.SEND_NOTIFICATION)
  sendNotification(@Payload() message: NotificationMessage) {
    const { communication_type, data } = message;

    switch (communication_type) {
      case CommunicationType.EMAIL:
        this.mailingService.send(data);
    }
  }
}
