import { EmailData } from 'src/interfaces/notification.interface';

function sign_up_html(data: EmailData) {
  return `
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
        <style>
          body {
            font-family: "Montserrat";
            font-weight: 500;
            font-style: normal;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .container {
            width: 580px;
            border: 1px solid #24bca2;
            background: #ffffff;
            border: 1px solid #24bca2;
            border-radius: 16px;
            padding-top: 42px;
            padding-left: 18px;
            padding-right: 18px;
            padding-bottom: 42px;
          }

          .brand-container {
            margin-bottom: 22px;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .logo {
            width: 48px;
            height: 48px;
            background: #d9d9d9;
            border-radius: 50%;
            margin-right: 10px;
          }

          .brand-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            color: #24bca2;
          }

          .title {
            font-size: 24px;
            line-height: 29px;
          }

          .content-container {
            margin-top: 40px;
          }

          .text {
            font-size: 15px;
            line-height: 18px;
            color: #1a2019;
          }

          .email-text {
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            color: #24bca2;
          }

          .action-container {
            margin-top: 32px;
          }

          .button-confirm {
            background: #24bca2;
            border-radius: 10px;
            width: 330px;
            height: 56px;

            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            text-align: center;
            color: #ffffff;

            border: none;
          }

          .separator {
            border: 1px dashed #24bca2;
            width: 100%;
            height: 0px;
            margin-top: 24px;
          }

          .footer-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 22px;
          }

          .footer-hyperlink {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
          }

          .hyperlink-text {
            font-size: 12px;
            line-height: 15px;
            color: #a4b2cb;
          }

          .hyperlink-separator {
            width: 20px;
            height: 0px;

            border: 1px solid #a4b2cb;
            transform: rotate(90deg);
          }
        </style>
      </head>

      <body>
        <div class="container">
          <div class="brand-container">
            <div class="logo"></div>
            <span class="brand-name">Eatiplaner</span>
          </div>
          <span class="title">Confirm your email on Eatiplaner</span>

          <div class="content-container text">
            <div>
              Hi <strong>${data.full_name}</strong>, thank you for choosing our service.
            </div>
            <div style="margin-top: 28px">
              Please follow this link to verify your email address:
            </div>

            <div style="margin-top: 12px">
              <span class="email-text">${data.to_email}</span>
              <span>and connect it to your Eatiplaner account.</span>
            </div>
          </div>

          <div class="action-container">
            <button class="button-confirm">Confirm email address</button>
          </div>

          <div class="text" style="margin-top: 32px">
            If you did not send the request, please ignore this email.
          </div>

          <div class="separator"></div>

          <div class="footer-container">
            <div class="logo"></div>
            <span class="brand-name" style="margin-top: 1px">Eatiplaner</span>

            <div class="footer-hyperlink">
              <span class="hyperlink-text">Our blogs </span>
              <div class="hyperlink-separator"></div>
              <span class="hyperlink-text">Email Preferences</span>
              <div class="hyperlink-separator"></div>
              <span class="hyperlink-text">Policies</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export { sign_up_html };
