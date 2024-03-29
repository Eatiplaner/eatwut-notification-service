import { CommunicationType } from 'src/enums/communication-type.enum';
import { TemplateEmailKey } from 'src/templates/email';

export interface EmailData {
  template_key: TemplateEmailKey;
  full_name: string;
  token: string;
  to_email: string;
}

export interface NotificationMessage {
  communication_type: CommunicationType;
  data: EmailData;
}
