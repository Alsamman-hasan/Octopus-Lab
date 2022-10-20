/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import Logo from "shared/assets/OctopusLogo.svg";
import { Input } from "shared/ui/input/Input";
import cls from "./NotFoundPage.module.scss";

export interface NotFoundPageProps {
  className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation("notFoundPage")
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {/* <Input 
        label="Ваше имя*" 
        params="name"
        required
        value=""
        handleChange={() => {}}
      /> */}
      <Logo width="200" height="350" viewBox="0 0 50 50"/>
      {t("Страница не найдена")}
    </div>
  )
};