import Recipient from "mailersend/src/Recipient";
import EmailParams from "mailersend/src/EmailParams";
import MailerSend from "mailersend";

type bodyProps = {
  name: string;
  company: string;
  email: string;
  telephone: string;
  phone: string;
  numberCollaborators: string;
  cnpj: string;
  message: string;
};

interface sendEmailProps {
  subject: string;
  body: bodyProps;
  setText: string;
}

export const sendEmail = async ({ body, setText, subject }: sendEmailProps) => {
  const mailersend = new MailerSend({
    api_key: process.env.MAILERSEND_API_KEY,
  });

  const recipients = [
    new Recipient(process.env.MAILERSEND_RECIPIENT, "DS-SAÚDE"),
  ];

  const emailParams = new EmailParams()
    .setFrom(process.env.MAILERSEND_FROM)
    .setFromName("DS-SAÚDE")
    .setRecipients(recipients)
    .setReplyTo(process.env.MAILERSEND_RECIPIENT)
    .setReplyToName("DS-SAÚDE")
    .setSubject("wqdwqdwq")
    .setText("This is the text content")
    .setHtml(
      `
    <h1>${subject}</h1>
    <p>${setText}</p>
    <p>${body?.name}</p>
    <p>${body?.company}</p>
    <p>${body?.email}</p>
    <p>${body?.telephone}</p>
    <p>${body?.phone}</p>
    <p>${body?.numberCollaborators}</p>
    <p>${body?.cnpj}</p>
    <p>${body?.message}</p>
  `
    );

  await mailersend.send(emailParams);
};
