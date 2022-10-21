
import {  memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import cls from "./Illustrations.module.scss";

export interface StepProps {
  number: string;
  MTopmM: boolean;
  MTop: boolean;
  title: string;
  subTitle: string;
}
const Step = (
  { 
    title, 
    subTitle, 
    MTopmM, 
    number, 
    MTop 
  }: StepProps) => {
  const { t } = useTranslation("common")
  return (
    <div className={classNames(cls.step, { [cls.MTopmM]: MTopmM, [cls.MTop]: MTop })}>
      <span className={classNames(cls.stepNumber)}>
        {number}
      </span>
      <div style={{ display: "flex", flexDirection: "column"}}>
        <span className={classNames(cls.stepTitle)}>
          {t(title)}
        </span>
        <span className={classNames(cls.stepSubTitle)}>
          {t(subTitle)}
        </span>
      </div>

    </div>
  )
};

const MStep = memo(Step)
export { MStep }