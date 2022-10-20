import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { yAnimation } from "shared/lib/Animations/Animations";
import { useAnimations } from "shared/lib/Hooks/AnimationScrolling/useAnimationScroll";
import cls from "./FirstBlock.module.scss";

export interface FirstBlockProps {
  className?: string;
}
export const FirstBlock = ({ className }: FirstBlockProps) => {
  const { t } = useTranslation("common");
  const { isShow, lastBookElementRef } = useAnimations();
  return (
    <div 
      data-testid="FirstBlock"
      ref={lastBookElementRef}
      className={classNames(cls.FirstBlock, { [cls["element-show"]]: isShow }, [cls["element-animation"], className])}
    >
      <div className={classNames(cls.FirstBlockTitles)}>
        <span >
          {t("верстка")}
        </span>
        <span>
          {t("и фронтенд")}
        </span>
      </div>
      <div className={classNames(cls.FirstBlockContiner)}>
        <div className={classNames(cls.FirstBlockDes)}>
          {t("для digital-агентств, продуктовых компаний и фриланс-команд")}
        </div>
        <div className={classNames(cls.FirstBlockSubTitles)}>
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