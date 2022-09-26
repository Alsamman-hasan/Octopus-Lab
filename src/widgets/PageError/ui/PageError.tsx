import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { ButtonDiscktopBlue } from "shared/ui/Buttons";
import cls from "./PageError.module.scss";

export interface PageErrorProps {
  className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation("common")
  const realodPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p className={classNames(cls.info, {}, [className])}>
        {t("произошла непредвиденная ошибка")}
      </p>
      <ButtonDiscktopBlue
        style={{ background: "#17CEE0", padding: "16px 24px" }}
        onClick={realodPage}
        text={t("Обновить страницу")} />
    </div>
  )
};