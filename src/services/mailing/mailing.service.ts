import { Injectable } from '@nestjs/common';
import { EmailData } from 'src/interfaces/notification.interface';

@Injectable()
export class MailingService {
  sendNotification(data: EmailData) {
    // TODO: Implement send email

  }
}
