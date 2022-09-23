import { useTranslation } from "react-i18next";
import { IState } from "../../types";


export const inputscollection = (state: IState) => {
  const { t } = useTranslation("Footer");
  const inputs = [
    { value: state.name || "", label: t("Ваше имя*"), params: "name" },
    { value: state?.email || "", label: "E-mail*", params: "email" },
    { value: state.phone || "", label: t("Телефон"), params: "phone" },
    {
      value: state.company || "",
      label: t("Какую компанию вы представляете?"),
      params: "company",
    },
    {
      value: state.project || "",
      label: t("Раскажите о проекте"),
      params: "project",
    },
  ];
  return inputs;
};
