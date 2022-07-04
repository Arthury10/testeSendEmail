import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { formContact } from "../../public/validator/shemaForm";
import { sendEmail } from "../../services/mailerSend";
import { CheckBox } from "../CheckBox";
import { InputField } from "../InputField";
import { InputMaskField } from "../InputMaskField";
import { TextAreaField } from "../TextAreaField";
import styles from "./form.module.css";

type bodyProps = {
  name: string;
  company: string;
  email: string;
  telephone: string;
  phone: string;
  subject: string;
  numberCollaborators: string;
  cnpj: string;
  message: string;
  checkTerms: boolean;
};

export const FormContact = () => {
  const form = useForm({
    defaultValues: {
      name: "Arthur Ropke",
      company: "Arthur Ropke",
      email: "Arthur@hotmail.com",
      telephone: "6622626266262",
      phone: "6622626266262",
      subject: "PALANO",
      numberCollaborators: "551515551",
      cnpj: "55555555555555",
      message: "55151555151551",
      checkTerms: false,
    },
    mode: "onChange",
    resolver: yupResolver(formContact),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    console.log("submit");
    const response = await sendEmail({
      body: data,
      setText: "Test",
      subject: "Test",
    });
    console.log(response);
  });

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputscontainer}>
          <div className={styles.formstack}>
            <InputField
              name="name"
              label="Nome"
              type="text"
              placeholder="Nome"
              isRequired={true}
            />
            <InputField
              name="company"
              label="Nome da empresa *"
              type="text"
              placeholder="Empresa Tal LTDA"
              isRequired={true}
            />
          </div>
          <div className={styles.formstack}>
            <InputField
              name="email"
              label="E-mail"
              type="text"
              placeholder="Fulano@email.com"
              isRequired={true}
            />

            <InputMaskField
              name="telephone"
              label="Telefone"
              type="text"
              placeholder="(53) 0000.0000"
              isRequired={true}
              mask="(99) 9999-9999"
            />
          </div>
          <div className={styles.formstack}>
            <InputMaskField
              name="phone"
              label="Celular"
              type="text"
              placeholder="(53) 9 0000.0000"
              isRequired={true}
              mask="(99)9 9999-9999"
            />
            <InputField
              name="subject"
              label="Assunto"
              type="text"
              placeholder="ex: Assinatura do Plano"
            />
          </div>
          <div className={styles.formstack}>
            <InputField
              name="numberCollaborators"
              label="Número de Colaboradores"
              type="number"
              placeholder="ex: 50"
              isRequired={true}
            />

            <InputMaskField
              name="cnpj"
              label="CNPJ"
              type="text"
              placeholder="00.000.000/0000-00"
              isRequired={true}
              mask="99.999.999/9999-99"
            />
          </div>
          <TextAreaField name={"message"} />
          <div className={styles.formcheck}>
            <CheckBox name="checkTerms" />
            <label htmlFor="checkTerms">
              Eu concordo em compartilhar os meus dados com a DS Saúde e aceito
              entrarem em contato comigo.
            </label>
          </div>
          <div className={styles.btnform}>
            <button className={styles.btnformsubmit} type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
