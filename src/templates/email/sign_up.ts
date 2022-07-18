import { EmailData } from "src/interfaces/notification.interface"

function sign_up_html(data: EmailData) {
  return `
      <div>
        Hello ${data.full_name} to Eatiplaner App
        Your token is ${data.token}
      </div>
  `
}

export { sign_up_html }
