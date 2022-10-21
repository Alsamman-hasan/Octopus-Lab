import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { SenderEmailForm } from "features/SenderEmails";
import { memo } from "react";
import cls from "./footerLeft.module.scss";

const FooterLeft = memo(() => {
  const { t } = useTranslation("Footer");
  return (
    <div className={classNames(cls.footerLeft)}>
      <div className={classNames(cls.footerLeftHeader)}>
        <span className={classNames(cls.footerLeftHeaderTitle)}>
          {t("Мы готовы обсудить новый проект")}
        </span>
        <span className={classNames(cls.footerLeftHeaderSubTitle)}>
          {t("Присылайте ваш проект на оценку. А также мы ответим на ваши вопросы.")}
        </span>
      </div>
      <SenderEmailForm />
      <div className={classNames(cls.footerLeftText)}>
        <span>
          {t("Нажимая кнопку «Оценить проект», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в")}
        </span>{" "}
        <a href="/">{t("Согласии на обработку персональных данных.")}</a>
      </div>
    </div>
  )
});

export default FooterLeft;
