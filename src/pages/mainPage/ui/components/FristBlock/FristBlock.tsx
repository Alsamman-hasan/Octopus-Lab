/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import cls from "./FristBlock.module.scss";

export interface FristBlockProps {
  className?: string;
}
export const FristBlock = ({ className }: FristBlockProps) => {
  const { t } = useTranslation("common")
  return (
    <div className={classNames(cls.FristBlock, {}, [className])}>
      <div className={classNames(cls.FristBlockTitles)}>
        <span>
          {t("верстка")}
        </span>
        <span>
          {t("и фронтенд")}
        </span>
      </div>
      <div className={classNames(cls.FristBlockContiner)}>
        <div className={classNames(cls.FristBlockDes)}>
          {t("для digital-агентств, продуктовых компаний и фриланс-команд")}
        </div>
        <div className={classNames(cls.FristBlockSubTitles)}>
          <span>
            {t("любой")}
          </span>
          <span>
            {t("сложности")}
          </span>
        </div>
      </div>
    </div>
  )
};