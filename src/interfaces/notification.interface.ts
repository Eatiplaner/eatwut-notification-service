import { CommunicationType } from "src/enums/communication-type.enum";

export interface EmailData {
  content: string;
}

export interface NotificationMessage {
  communication_type: CommunicationType;
  data: EmailData;
}
