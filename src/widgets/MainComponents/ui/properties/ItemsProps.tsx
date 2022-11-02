import { MutableRefObject, useRef } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import useHover from "shared/lib/Hooks/UseHover/useHover";
import { PropertiesItemType } from "../../model/PropertiesItem";
import cls from "./Properties.module.scss";

export interface IItems {
  item: PropertiesItemType;
  isShow: boolean;
}

const Item = (props: IItems) => {
  const { item, isShow } = props;
  const { t } = useTranslation("secondBlock")
  const refr = useRef(null) as MutableRefObject<HTMLDivElement | null>;
  const hovered = useHover(refr)
  const mods: Mods = {
    [cls.hovered]: hovered
  }
  return (
    <div ref={refr} className={classNames(cls.itemContetn, mods)}>
      <item.SvgItem
        className={classNames(cls.icons, { [cls.iconsAnim]: isShow })}
        animation={classNames(cls.animation)}
      />
      <span className={classNames(cls.PropertiesTitle)} >
        {t(item.title)}
      </span>
      <span className={classNames(cls.PropertiesSubTitle)} >
        {t(item.subTitle)}
      </span>
    </div>
  )
}

export default Item;