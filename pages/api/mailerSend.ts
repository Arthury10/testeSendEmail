import Recipient from "mailersend/src/Recipient";
import EmailParams from "mailersend/src/EmailParams";
import MailerSend from "mailersend";
import logo from "../../public/assets/logo.png";
import onda from "../../public/assets/onda.png";
import "react-toastify/dist/ReactToastify.css";
import { NextApiRequest, NextApiResponse } from "next";

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
  token: string;
};

interface ReqProps {
  body: bodyProps;
}

const mailerSend = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body }: ReqProps = req;
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${body.token}`;

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
  <html>
  <head>
    <meta charset="UTF-8" />
    <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Simple Transactional Email</title>
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
      /* -------------------------------------
    GLOBAL RESETS
    ------------------------------------- */
    /*All the styling goes here*/
    img {
    border: none;
    -ms-interpolation-mode: bicubic;
    max-width: 100%;
    }
    body {
    background-color: #f6f6f6;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    }
    table {
    border-collapse: separate;
    width: 100%;
    }
    table td {
    font-family: sans-serif;
    font-size: 14px;
    vertical-align: top;
    }
    /* -------------------------------------
    BODY & CONTAINER
    ------------------------------------- */
    .body {
    width: 100%;
    }
    /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
    .container {
    display: block;
    margin: 0 auto !important;
    /* makes it centered */
    max-width: 580px;
    padding: 10px;
    width: 580px;
    }
    /* This should also be a block element, so that it will fill 100% of the .container */
    .content {
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    max-width: 580px;
    padding: 10px;
    }

    .textLimit{
      max-width: 580px;
    }
    /* -------------------------------------
    TYPOGRAPHY
    ------------------------------------- */
    h1,
    h2,
    h3,
    h4 {
    color: #000000;
    font-family: sans-serif;
    font-weight: 400;
    line-height: 1.4;
    margin: 0;
    margin-bottom: 30px;
    }
    h1 {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    text-transform: capitalize;
    }
    p,
    ul,
    ol {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
    }
    p li,
    ul li,
    ol li {
    list-style-position: inside;
    margin-left: 5px;
    }
    @media only screen and (max-width: 620px) {
    table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
    }
    table[class=body] p,
    table[class=body] ul,
    table[class=body] ol,
    table[class=body] td,
    table[class=body] span,
    table[class=body] a {
    font-size: 16px !important;
    }
    table[class=body] .wrapper,
    table[class=body] .article {
    padding: 10px !important;
    }
    table[class=body] .content {
    padding: 0 !important;
    }
    table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
    }
    table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
    }
    table[class=body] .btn table {
    width: 100% !important;
    }
    table[class=body] .btn a {
    width: 100% !important;
    }
    table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
    }
    }
    </style>
    <main>
      <!--Template de email em table-->
      <table border="0" cellpadding="0" cellspacing="0" class="body">
        <thead>
          <tr>
            <td align="left" style="padding:2rem 0 3rem 3rem;Margin:0;font-size:0px"><img class="adapt-img" src="${
              process.env.NEXT_PUBLIC_DOMAIN_URL + logo.src
            }" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="180"/></td>
          </tr>
          <tr>
            <td align="left" style="padding:0 0 3rem 3rem; margin-top: 40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:80px;color:#008f59;font-size:40px"><strong>Email de Contato<br>recebido!</strong></p></td>
          </tr>
          <tr>
            <td align="left" style="padding:0 0 3rem 3rem;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:45px;color:#333333;font-size:20px">Você recebeu um novo e-mail de contato de cliente!</p></td>
          </tr>
        </thead>
      </table>
      <table border="0" cellpadding="0" cellspacing="0" class="body" style="margin-top: 1rem;">
        <thead>
           <tr>
            <td align="left" class="esd-block-text" style="padding-top: 7rem; background-image: url(${
              process.env.NEXT_PUBLIC_DOMAIN_URL + onda.src
            });
            background-repeat: no-repeat;
            background-size: cover;
            ">
              <p style="font-size: 30px; color: #ffffff; padding-left: 3rem; background-color: #008F59; max-width: 1620px;">
              Veja a cópia<br><strong>dos dados enviados</strong><br><br>
              <span style="font-size:18px;">
                Nome do responsável: ${body?.name}
                <br>Nome da Empresa: ${body?.company}<br>
                E-mail:  ${body?.email}<br>
                Telefone:  ${body?.telephone}
                <br>Celular:  ${body?.phone}<br>
                Assunto:  ${body?.subject}
                <br>Número de Colaboradores: ${body?.numberCollaborators}
                <br>CNPJ:  ${body?.cnpj}
                <br>Mensagem: ${body?.message}
              </span><br><br><strong><span data-cke-bookmark="1" style="display: none;">&nbsp;</span></strong>
              </p>
          </td>
          </tr>
        </thead>
      </table>
    </main>
  </head>
</html>
      `
    );

  try {
    const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
    const recaptchaJson = recaptchaRes.json();
    res.status(200).json({ ...body, ...recaptchaJson });
  } catch (err) {
    res.status(400).json(err);
  }

  // try{
  //   await mailersend?.send(emailParams);
  // }catch(err){
  //   throw new Error('Erro ao enviar email');
  // }
};

export default mailerSend;
