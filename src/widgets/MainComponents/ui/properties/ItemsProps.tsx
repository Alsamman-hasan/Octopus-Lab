import { ReactElement, ReactNode, useRef } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import useHover from "shared/lib/Hooks/UseHover/useHover";
import cls from "./Properties.module.scss";

export interface IItems {
  svgItem: ReactElement | ReactNode;
  title: string;
  subTitle: string;
}

const Item = (props: IItems) => {
  const { svgItem, title, subTitle } = props;
  const refr = useRef();
  const hovered = useHover(refr)
  const mods: Record<string, boolean> = {
    [cls.hovered]: hovered
  }
  return (
    <div ref={refr} className={classNames(cls.itemContetn, mods)}>
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