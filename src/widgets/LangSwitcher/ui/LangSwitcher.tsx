/* eslint-disable i18next/no-literal-string */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { useState } from "react";
import cls from "./LangSwitcher.module.scss";

export interface LangSwitcherProps {
  className?: string;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const {i18n } = useTranslation()
  const [lang, setLang] = useState("ru");

  const changeLanguage = async (lng: string) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  } 

  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <button
        type='button'
        onClick={() => changeLanguage("ru")}
        className={classNames(cls.ru, 
          { 
            [cls.choose]: lang === "ru", 
            [cls.notChose]: lang === "en" 
          }, 
          [className])}
      >
        ru
      </button>
      <span>|</span>
      <button
        type='button'
        onClick={() => changeLanguage("en")}
        className={classNames(cls.en, 
          { [cls.choose]: lang === "en", [cls.notChose]: lang === "ru" }, 
          [className]
        )}
      >
        en
      </button>
    </div>
  )
};