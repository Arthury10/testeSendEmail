import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { formContact } from "../../common/validator/shemaForm";
import { api } from "../../services/api";
import { CheckBox } from "../CheckBox";
import { InputField } from "../InputField";
import { InputMaskField } from "../InputMaskField";
import { TextAreaField } from "../TextAreaField";
import styles from "./form.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useCallback, useState } from "react";
import { Recaptcha } from "../Recaptcha";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const FormContact = () => {
  const [token, setToken] = useState();
  const [isCheck, setCheck] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    // defaultValues: {
    //   name: "",
    //   company: "",
    //   email: "",
    //   telephone: "",
    //   phone: "",
    //   subject: "",
    //   numberCollaborators: "",
    //   cnpj: "",
    //   message: "",
    //   checkTerms: false,
    // },
    defaultValues: {
      name: "arthurropke",
      company: "arthurropke",
      email: "arthurropke@hotmail.com",
      telephone: "53981374942",
      phone: "5332241216",
      subject: "Testess",
      numberCollaborators: "50",
      cnpj: "12345678901234",
      message: "wqduwhqudhuwqidihwq",
      checkTerms: false,
    },
    mode: "onChange",
    resolver: yupResolver(formContact),
  });

  const handleCheck = () => {
    setCheck(!isCheck);
  };

  const onSubmit = form.handleSubmit(async (data) => {
    if (isCheck) {
      try {
        toast.success("Mensagem Enviada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (!executeRecaptcha) {
          console.log("Execute recaptcha not yet available");
          return;
        }
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
          console.log(gReCaptchaToken, "response Google reCaptcha server");
        });
        form.reset();
        await api.post("/mailerSend", data);
      } catch (err) {
        toast.error("Erro ao enviar mensagem!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error(
        "Para enviar a mensagem, você deve aceitar os termos e condições!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  });

  return (
    <FormProvider {...form}>
      <ToastContainer />
      <Recaptcha />
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
              label="Nome da empresa"
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
              placeholder="carlos@email.com"
              isRequired={true}
            />

            <InputMaskField
              name="telephone"
              label="Telefone"
              type="text"
              placeholder="(53) 0000.0000"
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
              isRequired={true}
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
            <CheckBox name="checkTerms" onChange={handleCheck} />
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
