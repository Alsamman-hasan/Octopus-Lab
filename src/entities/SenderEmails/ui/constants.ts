import { useTranslation } from "react-i18next";
import { IState } from "./types";

export interface IInputItems {
  value: string ;
  label: string;
  params: string;
  errorMessage?: string ;
  required?: boolean;
}


export const inputscollection = (state: IState): IInputItems[] => {
  const { name, email, phone, company, project } = state;
  const { t } = useTranslation("Footer");
  const inputs = [
    {
      value: name || "",
      label: t("Ваше имя*"),
      params: "name",
      errorMessage: "name",
      required: true,
    },
    {
      value: email || "",
      label: "E-mail",
      params: "email",
      errorMessage: "It should be a valid email address",
      required: true
    },
    {
      value: phone || "",
      label: t("Телефон"),
      errorMessage: "phone",
      params: "phone"
    },
    {
      value: company || "",
      label: t("Какую компанию вы представляете?"),
      errorMessage: "company",
      params: "company",
    },
    {
      value: project || "",
      label: t("Раскажите о проекте"),
      errorMessage: "project",
      params: "project",
    },
  ];
  return inputs;
};
