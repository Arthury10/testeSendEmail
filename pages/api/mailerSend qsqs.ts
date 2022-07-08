import Recipient from "mailersend/src/Recipient";
import EmailParams from "mailersend/src/EmailParams";
import MailerSend from "mailersend";
import logoDsSaude from "../../public/assets/logo-ds-saude.png";
import { TemplateEmail } from "../../components/TemplateEmail";

type bodyProps = {
  name: string;
  company: string;
  email: string;
  telephone: string;
  phone: string;
  numberCollaborators: string;
  cnpj: string;
  message: string;
  subject: string;
};

interface sendEmailProps {
  subject: string;
  body: bodyProps;
  setText: string;
}

const mailerSend = async ({ body, setText, subject }: sendEmailProps) => {
  const mailersend = await new MailerSend({
    api_key: process.env.MAILERSEND_API_KEY,
  });

  const recipients = [
    new Recipient(process.env.MAILERSEND_RECIPIENT, "DS-SAÚDE"),
  ];

  const emailParams = await new EmailParams()
    .setFrom(process.env.MAILERSEND_FROM)
    .setFromName("DS-SAÚDE")
    .setRecipients(recipients)
    .setReplyTo(process.env.MAILERSEND_RECIPIENT)
    .setReplyToName("DS-SAÚDE")
    .setSubject(body?.subject)
    .setHtml(
      `
      <!DOCTYPE html>
      <html
        xmlns="http://www.w3.org/1999/xhtml"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        style="font-family: DM Sans, sans-serif"
      >
        <head>
          <meta charset="UTF-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="x-apple-disable-message-reformatting" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta content="telephone=no" name="format-detection" />
          <title>Novo Template</title>
          <style type="text/css">
            .es-wrapper-color {
              color: #fff;
              position: relative;
              margin-top: 3rem;
            }
            .bg-image {
              width: 100%;
              position: absolute;
              z-index: -1;
            }
            .formData {
              background: #008f59;
              padding-left: 2rem;
              padding-right: 2rem;
              padding-bottom: 3rem;
            }
          </style>
        </head>
        <body
          style="
            width: 500px;
            font-family: DM Sans, sans-serif;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            background-color: #f6f6f6;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 0;
            block-size: border-box;
          "
        >
          <header>
            <img
              src="./public/assets/logo-ds-saude.png"
              alt="logo"
              width="300"
              style="padding-left: 2rem"
            />
            <h1 style="color: #008f59; font-size: 40px; padding-left: 2rem">
              Email de Contato <br />
              recebido!
            </h1>
            <p
              style="
                width: 500px;
                font-size: 20px;
                color: #4e4f56;
                padding-left: 2rem;
              "
            >
              Viemos avisar que a sua mensagem <br />
              de contato foi recebida com sucesso,<br />
              em breve entraremos em contato!
            </p>
          </header>
          <div class="es-wrapper-color">
            <svg
              viewBox="0 0 1620 806"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="bg-image"
            >
              <path
                d="M0 40.9243V806H1622V23.999C1598.17 43.9216 1423.6 110.255 934.5 40.9243C349.5 -42 106.167 26.6436 0 40.9243Z"
                fill="#008F59"
              />
            </svg>
            <div style="padding-top: 50px">
              <p style="font-size: 20px; margin-bottom: 30px; padding-left: 2rem">
                Veja a cópia <br />
                <span style="font-weight: bold">dos dados enviados</span>
              </p>
              <div class="formData">
                <p>Nome do responsável: ${body?.name}</p>
                <p>Nome da Empresa: ${body?.company}</p>
                <p>E-mail: ${body?.email}</p>
                <p>Telefone: ${body?.telephone}</p>
                <p>Celular: ${body?.phone}</p>
                <p>Assunto: ${body?.subject}</p>
                <p>Número de Colaboradores: ${body?.numberCollaborators}</p>
                <p>CNPJ: ${body?.cnpj}</p>
                <p>Mensagem: ${body?.message}</p>
              </div>
            </div>
          </div>
        </body>
      </html>      
      `
    );

  await mailersend?.send(emailParams);
};

export default mailerSend;
