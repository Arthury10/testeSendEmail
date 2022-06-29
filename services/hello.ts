import Recipient from "mailersend/src/Recipient"
import EmailParams from "mailersend/src/EmailParams"
import MailerSend from "mailersend";

export const sendEmail = () => {

  // console.log(process.env.NEXT_PUBLIC_MAILERSEND_URI)


  const mailersend = new MailerSend({
    api_key: process.env.NEXT_PUBLIC_MAILERSEND_API_KEY,
    mode: 'no-cors',
});

const recipients = [
  new Recipient("arthurropke@hotmail.com", "Arthur 123")
];

const emailParams = new EmailParams()
      .setFrom("no-reply@homologmail.brainny.cc")
      .setFromName("DS-SAÚDE")
      .setRecipients(recipients)
      .setReplyTo("arthurropke@hotmail.com")
      .setReplyToName("DS-SAÚDE")
      .setSubject("Subject")
      .setHtml("This is the HTML content")
      .setText("This is the text content");


      mailersend.send(emailParams);
}

