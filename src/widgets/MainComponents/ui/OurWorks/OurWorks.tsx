import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { useAnimations } from "shared/lib/Hooks/AnimationScrolling/useAnimationScroll";
import cls from "./OurWorks.module.scss";
import { Item } from "./Item";
import { ItemsProps } from "./helpers";


export interface OurWorksProps {
  className?: string;
}

export const OurWorks = ({ className }: OurWorksProps) => {
  const { t } = useTranslation("common");
  const { isShow, blockRef } = useAnimations();
  const mods: Record<string, boolean> = {
    "element-show": isShow,
    "element-animation": true
  }

  return (
    <div
      ref={blockRef}
      data-testid="OurWorks"
      className={classNames(cls.OurWorks, mods, [className])}
    >
      <h1
        className={classNames(cls.OurWorksTitle)}
      >
        {t("Что мы")} {" "}
        <span>
          {t("делаем")}
        </span>
      </h1>
      <div className={classNames(cls.Table)}>
        {
          ItemsProps.map((el) => (
            <div
              key={el.title}
              className={classNames(cls.OurWorksItem)}
            >
              <Item
                title={el.title}
                subTitle={el.subTitle}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
};