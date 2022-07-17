import { EmailData } from "src/interfaces/notification.interface";
import { sign_up_html } from "./sign_up";

export type TemplateEmailKey = 'sign_up';

export function generateEmailTemplate({ templateKey, data }: { templateKey: TemplateEmailKey, data: EmailData }): string {

  switch (templateKey) {
    case 'sign_up':
      return sign_up_html(data.username)

    default:
      return ''
  }
}
