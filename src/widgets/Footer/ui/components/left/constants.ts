import { useTranslation } from "react-i18next";
import { IState } from "./types";


export const inputscollection = (state: IState) => {
  const {name, email, phone, company, project} = state;
  const { t } = useTranslation("Footer");
  const inputs = [
    { value: name || "", label: t("Ваше имя*"), params: "name" },
    { value: email || "", label: "E-mail*", params: "email" },
    { value: phone || "", label: t("Телефон"), params: "phone" },
    {
      value: company || "",
      label: t("Какую компанию вы представляете?"),
      params: "company",
    },
    {
      value: project || "",
      label: t("Раскажите о проекте"),
      params: "project",
    },
  ];
  return inputs;
};
