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
import React, { useEffect, useState } from "react";
import Script from "next/script";

export const FormContact = () => {
  const [isCheck, setCheck] = useState(false);
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

  const [isForm, setIsForm] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const form = document.getElementById("form");
      const badge = document.querySelector(".grecaptcha-badge");
      window.addEventListener("scroll", () => {
        const top = form.getBoundingClientRect().top;
        const bottom = form.getBoundingClientRect().bottom;
        const height = window.innerHeight;
        const size = height - bottom;
        const isVisible =
          top < window.innerHeight && bottom > size + height - 100;
        if (isVisible) {
          setIsForm(true);
          badge.style.visibility = "visible";
        } else {
          setIsForm(false);
          badge.style.visibility = "hidden";
        }
      });
    }
  }, [isForm]);

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
    },
    mode: "onChange",
    resolver: yupResolver(formContact),
  });

  const handleCheck = () => {
    setCheck(!isCheck);
  };

  const onSubmit = form.handleSubmit(async (data) => {
    if (isCheck) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(SITE_KEY, { action: "submit" })
          .then(async (token: any) => {
            try {
              form.reset();
              const response = await api.post("/mailerSend", {
                ...data,
                token,
              });
              if (response.status === 200) {
                toast.success("Mensagem Enviada com sucesso!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            } catch (err) {
              if (err.response.status === 400) {
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
            }
          });
      });
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
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
      />
      <FormProvider {...form}>
        <ToastContainer />
        <form className={styles.form} onSubmit={onSubmit} id="form">
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
                Eu concordo em compartilhar os meus dados com a DS Saúde e
                aceito entrarem em contato comigo.
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
    </>
  );
};
