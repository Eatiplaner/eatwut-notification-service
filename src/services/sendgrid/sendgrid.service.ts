import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { EmailData } from 'src/interfaces/notification.interface';

import { generateEmailTemplate } from '../../templates/email';

@Injectable()
export class SendgridService {
  private readonly logger = new Logger(SendgridService.name);

  constructor(private readonly configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_KEY'));
  }

  async send(data: EmailData) {
    if (!data) {
      return;
    }

    const { template_key, to_email } = data;

    const transport = await SendGrid.send({
      subject: 'Sign up Verification',
      from: this.configService.get<string>('SEND_GRID_FROM_EMAIL'),
      html: generateEmailTemplate({ templateKey: template_key, data }),
      to: to_email,
    });

    this.logger.log(`E-Mail sent to ${to_email}`);

    return transport;
  }
}
