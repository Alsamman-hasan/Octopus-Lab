import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useAnimations } from "shared/lib/Hooks/AnimationScrolling/useAnimationScroll";
import { PropertiesItems } from "../../model/PropertiesItem";
import cls from "./Properties.module.scss";
import Item from "./ItemsProps";

export interface PropertiesProps {
  className?: string;
}

export const Properties = ({ className }: PropertiesProps) => {
  const { t } = useTranslation("secondBlock");
  const { isShow, blockRef } = useAnimations();
  const ItemsProps = useMemo(() => PropertiesItems, []);

  const mods: Record<string, boolean> = {
    "element-show": isShow,
    "element-animation": true,
  };

  return (
    <div
      ref={blockRef}
      data-testid="Properties"
      className={classNames(cls.Properties, mods, [className])}
    >
      <div className={classNames(cls.span8)}>
        {t("почему")} <br />
        <span>{t("выбирают")}</span> {t("нас")}
      </div>
      {ItemsProps.map((item, index: number) => (
        <div key={item.key + index} className={classNames(cls.span4)}>
          <Item item={item} isShow={isShow} />
        </div>
      ))}
    </div>
  );
};
