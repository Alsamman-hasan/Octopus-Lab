import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./OurWorks.module.scss";


export interface IItems {
  title: string;
  subTitle: string;
}

export const Item = ({ title, subTitle }: IItems,) => {
  const { t } = useTranslation("common")
  return (
    <div className={classNames(cls.Item)}> 
      <div className={classNames(cls.ItemTitle)} >
        {t(title)}
      </div>
      <div className={classNames(cls.ItemSubTitle)}>
        {t(subTitle)}
      </div>
    </div>
  );
}

