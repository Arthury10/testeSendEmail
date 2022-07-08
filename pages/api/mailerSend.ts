import Recipient from "mailersend/src/Recipient";
import EmailParams from "mailersend/src/EmailParams";
import MailerSend from "mailersend";
import 'react-toastify/dist/ReactToastify.css';

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
          /* -------------------------------------
          HEADER, FOOTER, MAIN
          ------------------------------------- */
          .header{
          display: inline-block;
          position: relative;
          }
          .main {
          background: #ffffff;
          border-radius: 3px;
          width: 100%;
          }
          .wrapper {
          box-sizing: border-box;
          padding: 20px;
          }
          .content-block {
          padding-bottom: 10px;
          padding-top: 10px;
          }
          .footer {
          clear: both;
          margin-top: 10px;
          text-align: center;
          width: 100%;
          }
          .footer td,
          .footer p,
          .footer span,
          .footer a {
          color: #999999;
          font-size: 12px;
          text-align: center;
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
          /* -------------------------------------
          BUTTONS
          ------------------------------------- */
          .btn {
          box-sizing: border-box;
          width: 100%;
          }
          .btn>tbody>tr>td {
          padding-bottom: 15px;
          }
          .btn table {
          width: auto;
          }
          .btn table td {
          background-color: #ffffff;
          border-radius: 5px;
          text-align: center;
          }
          .btn a {
          background-color: #ffffff;
          border: solid 1px #3498db;
          border-radius: 5px;
          box-sizing: border-box;
          color: #3498db;
          cursor: pointer;
          display: inline-block;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          padding: 12px 25px;
          text-decoration: none;
          text-transform: capitalize;
          }
          .btn-primary table td {
          background-color: #3498db;
          }
          .btn-primary a {
          background-color: #3498db;
          border-color: #3498db;
          color: #ffffff;
          }
          /* -------------------------------------
          OTHER STYLES THAT MIGHT BE USEFUL
          ------------------------------------- */
          .last {
          margin-bottom: 0;
          }
          .first {
          margin-top: 0;
          }
          .align-center {
          text-align: center;
          }
          .align-right {
          text-align: right;
          }
          .align-left {
          text-align: left;
          }
          .clear {
          clear: both;
          }
          .mt0 {
          margin-top: 0;
          }
          .mb0 {
          margin-bottom: 0;
          }
          .preheader {
          color: transparent;
          display: none;
          height: 0;
          max-height: 0;
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          visibility: hidden;
          width: 0;
          }
          .powered-by a {
          text-decoration: none;
          }
          hr {
          border: 0;
          border-bottom: 1px solid #f6f6f6;
          margin: 20px 0;
          }
          /* -------------------------------------
          RESPONSIVE AND MOBILE FRIENDLY STYLES
          ------------------------------------- */
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
          /* -------------------------------------
          PRESERVE THESE STYLES IN THE HEAD
          ------------------------------------- */
          @media all {
          .ExternalClass {
          width: 100%;
          }
          .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
          line-height: 100%;
          }
          .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
          }
          #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
          }
          .btn-primary table td:hover {
          background-color: #34495e !important;
          }
          .btn-primary a:hover {
          background-color: #34495e !important;
          border-color: #34495e !important;
          }
          }
          .text{
          position: relative;
          color: white;
          padding-left: 45px;
          font-size: 22px;
          font-family: Roboto;
          font-weight: 500;
          font-style: normal;
          }
          .secondary-Text{
          position: relative;
          padding-left: 45px;
          color: white;
          font-family:  Roboto;
          font-weight: 300;
          font-style: normal;
          font-size: 14px;
          }
          .third-text{
            position: relative;
            color: #3E2448;
            font-family:  Roboto;
            font-style: normal;
            padding-left: 45px;
            margin-bottom: 0px;
          }
          .rectangle{
            position: relative;
            width: 203px;
            height: 3px;
            padding-left: 45px;
            background: #8ECEA6;
            margin-top: -5px;
          }
          .ii{
            font-weight: 500;
            font-style: normal;
            color: white;
            font-size: 14px;
            text-decoration: none;
            font-family: Roboto;
          }
          </style>
          <main>
            <!--Template de email em table-->
            <table border="0" cellpadding="0" cellspacing="0" class="body">
              <thead>
                <tr>
                  <td align="left" style="padding:2rem 0 3rem 3rem;Margin:0;font-size:0px"><img class="adapt-img" src="https://vpkjxo.stripocdn.email/content/guids/CABINET_1e0a5a40ea4393ae8ccb5ac3498067b7/images/clinicamedicasegurancadotrabalhoconveniomedicoplanodesaudesaudeocupacionalmedicinad.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="180"></td>
                </tr>
                <tr >
                  <td align="left" style="padding:0 0 3rem 3rem; margin-top: 80px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:90px;color:#008f59;font-size:60px"><strong>Email de Contato<br>recebido!</strong></p></td>
                </tr>
                <tr>
                  <td align="left" style="padding:0 0 3rem 3rem;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:45px;color:#333333;font-size:30px">Viemos avisar que uma mensagem<br>de contato foi recebida!</p></td>
                </tr>
              </thead>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" class="body">
              <thead>
                 <tr>
                  <td align="left" class="esd-block-text" style="padding-top: 3rem; background-image: url('./public/assets/onda.png');
                  background-repeat: no-repeat;
                  background-size: contain;
                  ">
                    <p style="font-size: 40px; color: #ffffff; padding-left: 3rem;">
                    Veja a cópia<br><strong>dos dados enviados</strong><br><br>
                    <span style="font-size:20px;">
                      Nome do responsável: ${body?.name}
                      <br>Nome da Empresa: ${body?.company}<br>
                      E-mail:  ${body?.email}<br>
                      Telefone:  ${body?.telephone}
                      <br>Celular:  ${body?.phone}<br>
                      Assunto:  ${body?.subject}
                      <br>Número de Colaboradores: ${body?.numberCollaborators}
                      <br>CNPJ:  ${body?.cnpj}
                      <br>Mensagem:  ${body?.message}
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

  try{
    await mailersend?.send(emailParams);
  }catch(err){
    throw new Error('Erro ao enviar email');
  }

};

export default mailerSend;
