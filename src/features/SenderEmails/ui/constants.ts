import { IInputItems } from "./types";

export const inputscollection: IInputItems[] = [
  {
    label: "Ваше имя*",
    params: "name",
    errorMessage: "name",
    required: true,
  },
  {
    label: "E-mail",
    params: "email",
    errorMessage: "It should be a valid email address",
    required: true,
  },
  {
    label: "Телефон",
    errorMessage: "phone",
    params: "phone",
  },
  {
    label: "Какую компанию вы представляете?",
    errorMessage: "company",
    params: "company",
  },
  {
    label: "Раскажите о проекте",
    errorMessage: "project",
    params: "project",
  },
];
