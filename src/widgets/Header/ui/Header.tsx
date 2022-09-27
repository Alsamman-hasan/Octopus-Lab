import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LogoSVG } from "shared/assets/icons/svg/desktopSVG";
import { classNames } from "shared/lib/classNames/classNames";
import { scrollFun } from "shared/lib/scrollFunction/scrollFun";
import { ButtonDiscktopPurple } from "shared/ui/Buttons";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./header.module.scss";


export interface FooterProps {
  className?: string;
}


export const Header = ({ className }: FooterProps) => {
  const { t } = useTranslation("common");
  const [isScroll, setIsScroll] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScroll(scrollFun("coords"));
  });

  return (
    <div 
      className={classNames(
        cls.headerWrapper, 
        { [cls.scrollEvent]: isScroll }
        , [className])} 
      id="coords" 
    >
      <div className={classNames(cls.contetn, {}, [className])}>
        <div className={classNames(cls.logo, {}, [className])}>
          <LogoSVG />
        </div>
        <div className={classNames(cls.info, {}, [className])}>
          <div className={classNames(cls.btn, {}, [className])}>
            <ButtonDiscktopPurple
              text={t("Обсудить проект")}
              style={{ backgroundColor: "#450072" }}
            />
          </div>
          <LangSwitcher/>
        </div>
      </div>
    </div>
  );
};

