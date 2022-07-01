import { Yup } from "./yup";

export const formContact = Yup.object()
  .shape({
    name: Yup.string()
      .required("O Nome é obrigatório")
      .typeError("Informe um Nome válido")
      .min(3, "O Nome deve ter no mínimo 6 caracteres"),
    email: Yup.string()
      .required("O E-mail é obrigatório")
      .typeError("Informe um E-mail válido")
      .min(6, "O E-mail deve ter no mínimo 6 caracteres")
      .email("email@example.com"),
    company: Yup.string()
      .required("A Empresa é obrigatória")
      .typeError("Informe uma Empresa válida")
      .min(6, "A Empresa deve ter no mínimo 6 caracteres"),
    message: Yup.string()
      .required("O Mensagem é obrigatório")
      .typeError("Informe uma Mensagem válida")
      .min(6, "O Mensagem deve ter no mínimo 6 caracteres"),
    telephone: Yup.string()
      .typeError("Informe um Telefone válido")
      .min(10, "O Telefone deve ter no mínimo 10 caracteres")
      .transform((value) => value.replace(/\D/g, "")),
    phone: Yup.string()
      .required("O Celular é obrigatório")
      .typeError("Informe um Celular válido")
      .min(11, "O Celular deve ter no mínimo 11 caracteres")
      .transform((value) => value.replace(/\D/g, "")),
    subject: Yup.string()
      .required("O Assunto é obrigatório")
      .typeError("Informe um Assunto válido")
      .min(6, "O Assunto deve ter no mínimo 6 caracteres"),
    numberCollaborators: Yup.number()
      .required("O Número de Colaboradores é obrigatório")
      .typeError("Informe um Número de Colaboradores válido")
      .min(1, "O Número de Colaboradores deve ter no mínimo 1 caracteres"),
    cnpj: Yup.string()
      .required("O CNPJ é obrigatório")
      .typeError("Informe um CNPJ válido")
      .min(14, "O CNPJ deve ter no mínimo 14 caracteres")
      .max(14, "O CNPJ deve ter no máximo 14 caracteres")
      .transform((value) => value.replace(/\D/g, "")),
    checkTerms: Yup.boolean().required("O Termo é obrigatório"),
  })
  .noUnknown();
