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
          section {
            display: table;
            width: 100%;
          }

          section > * {
            display: table-row;
          }

          section .col {
            display: table-cell;
          }

          body {
            font-family: "Montserrat";
            font-weight: 500;
            font-style: normal;
            background-color: white;
            position: absolute;
            left: 35%;
            top: 15%;
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
          }

          .logo {
            width: 48px;
            height: 48px;
            background: #d9d9d9;
            border-radius: 50%;
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
            margin-top: 22px;
            text-align: center;
          }

          .footer-hyperlink {
            margin-top: 10px;
            padding-left: 150px;
            padding-right: 150px;
          }

          .hyperlink-text {
            font-size: 12px;
            line-height: 15px;
            color: #a4b2cb;
          }

          .hyperlink-separator {
            width: 1px;
            position: absolute;
            margin-top: 0px;
            height: 16px;

            background: #a4b2cb;
          }
        </style>
      </head>

      <body>
        <div class="container">
          <div class="brand-container">
            <section>
              <div>
                <div class="col logo"></div>
                <div style="margin-left: 7px; margin-top: 7px">
                  <span class="col brand-name">Eatiplaner</span>
                </div>
              </div>
            </section>
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
            <div style="margin-bottom: 10px">
              <div class="logo" style="margin-left: 265px"></div>
              <span class="brand-name">Eatiplaner</span>
            </div>

            <div class="footer-hyperlink">
              <section>
                <div>
                  <div class="col">
                    <span class="hyperlink-text">Our blogs </span>
                  </div>
                  <div class="col">
                    <div class="hyperlink-separator"></div>
                  </div>
                  <div class="col">
                    <span class="hyperlink-text">Email Preferences</span>
                  </div>
                  <div class="col">
                    <div class="hyperlink-separator"></div>
                  </div>
                  <div class="col">
                    <span class="hyperlink-text">Policies</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export { sign_up_html };
