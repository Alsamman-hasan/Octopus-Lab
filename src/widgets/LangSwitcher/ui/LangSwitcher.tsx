import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { Button } from "shared/ui/Buttons";
import { ButtonBgColor, ButtonTheme } from "shared/ui/Buttons/types";
import cls from "./LangSwitcher.module.scss";

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n, t } = useTranslation()
  const [lang, setLang] = useState("en");


  const changeLanguage = async (lng: string) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  }

  const { pathname } = useLocation();
  const isEn = pathname !== "/ru";

  useEffect(() => {
    const lang = pathname.slice(1)
    setLang(lang);
    i18n.changeLanguage(lang);
  }, [i18n, pathname])

  return (
    <div className={classNames(cls.LangSwitcher, { [cls.displaySwit]: isEn }, [className])}>
      <Button
        type='button'
        theme={ButtonTheme.CLEAR}
        onClick={() => changeLanguage("ru")}
        className={classNames(cls.ru,
          {
            [cls.choose]: lang === "ru",
            [cls.notChose]: lang === "en"
          },
          [className])}
      >
        {t("ru")}
      </Button>
      <span>|</span>
      <Button
        type='button'
        theme={ButtonTheme.CLEAR}
        onClick={() => changeLanguage("en")}
        className={classNames(cls.en,
          { [cls.choose]: lang === "en", [cls.notChose]: lang === "ru" },
          [className]
        )}
      >
        {t("en")}
      </Button>
    </div>
  )
};