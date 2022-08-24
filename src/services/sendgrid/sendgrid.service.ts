import { Injectable, Logger } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';
import { env } from 'src/configs/env.config';
import { EmailData } from 'src/interfaces/notification.interface';

import { generateEmailTemplate } from '../../templates/email';

@Injectable()
export class SendgridService {
  private readonly logger = new Logger(SendgridService.name);

  constructor() {
    SendGrid.setApiKey(env.SEND_GRID.API_KEY);
  }

  async send(data: EmailData) {
    if (!data) {
      return;
    }

    const { template_key, to_email } = data;

    const transport = await SendGrid.send({
      subject: 'Confirm your email address on Eatwut',
      from: env.SEND_GRID.FROM_EMAIL,
      html: generateEmailTemplate({ templateKey: template_key, data }),
      to: to_email,
    });

    this.logger.log(`E-Mail sent to ${to_email}`);

    return transport;
  }
}
