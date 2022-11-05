import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import group from "shared/assets/mobile.png";
import { useAnimations } from "shared/lib/Hooks/AnimationScrolling/useAnimationScroll";
import cls from "./Illustrations.module.scss";
import { stepsProps } from "./helper";
import { MStep } from "./Step";
import { AnimationBloc } from "./Animation";

export interface IllustrationsProps {
  className?: string;
}
export const Illustrations = ({ className }: IllustrationsProps) => {
  const { t } = useTranslation("common");
  const { isShow, blockRef } = useAnimations();
  const mods: Record<string, boolean> = {
    "element-show": isShow,
    "element-animation": true,
  };

  return (
    <div
      ref={blockRef}
      data-testid="Illustrations"
      className={classNames(cls.Illustrations, mods, [className])}
    >
      <div className={classNames(cls.IllusRow)}>
        <div className={classNames(cls.IllusContainer)}>
          <div className={classNames(cls.IllusTitle)}>
            <p>{t("как мы")} </p>
            <span>{t("работаем")}</span>
          </div>
          <div className={classNames(cls.IllusLeftBlok)}>
            <img
              loading="lazy"
              className={classNames(cls.img)}
              src={group}
              alt="animation"
            />
            {/* <AnimationBloc /> */}
          </div>
        </div>
        <div className={classNames(cls.IllusRightBlok)}>
          {stepsProps.map((step, index: number) => (
            <div className={classNames(cls.stepContiner)} key={index + 1}>
              <MStep
                MTop={step.MTop}
                MTopmM={step.MTopmM}
                number={step.number}
                subTitle={step.subTitle}
                title={step.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
