import { forwardRef, LegacyRef } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { motion } from "framer-motion";
import cls from "./OurWorks.module.scss";


export interface IItems {
  title: string;
  subTitle: string;
  key: string;
}

const Item = forwardRef(({ title, subTitle, key }: IItems, ref: LegacyRef<HTMLDivElement>) => {
  const { t } = useTranslation("common")
  return (
    <div className={classNames(cls.Item)} key={key} ref={ref}> 
      <div className={classNames(cls.ItemTitle)} >
        {t(title)}
      </div>
      <div className={classNames(cls.ItemSubTitle)}>
        {t(subTitle)}
      </div>
    </div>
  );
})
const MItem = motion(Item)
export { MItem }
