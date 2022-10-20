import { ReactElement, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Properties.module.scss";

export interface IItems {
  svgItem: ReactElement | ReactNode;
  title: string;
  subTitle: string;
}

const Item = (props: IItems) => {
  const { svgItem, title, subTitle } = props;
  return (
    <div className={classNames(cls.itemContetn)}>
      {svgItem}
      <span className={classNames(cls.PropertiesTitle)} >
        {title}
      </span>
      <span className={classNames(cls.PropertiesSubTitle)} >
        {subTitle}
      </span>
    </div>
  )
}

export default Item;