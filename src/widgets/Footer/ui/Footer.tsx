import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import FooterLeft from "./components/left/FooterLeft";
import FooterRight from "./components/right/FooterRight";
import cls from "./Footer.module.scss";

export interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.footerWrapper, {}, [className])}>
      <div className={classNames(cls.content, {}, [className])} >
        <FooterLeft />
        <FooterRight />
      </div>
      <div className={classNames(cls.footer, {}, [className])}>
        <span>2022</span>
        <span>{t("Copyright © Octopus Lab")}</span>
        <span>{t("User Agreement")}</span>
      </div>
    </div>
  )
};