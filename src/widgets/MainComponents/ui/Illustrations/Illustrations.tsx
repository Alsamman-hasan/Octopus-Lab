import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import group from "shared/assets/mobile.png"
import { yAnimation } from "shared/lib/Animations/Animations";
import cls from "./Illustrations.module.scss";
import { stepsProps } from "./helper";
import { MStep } from "./Step";
import { AnimationBloc } from "./Animation";

export interface IllustrationsProps {
  className?: string;
}
export const Illustrations = ({ className }: IllustrationsProps) => {
  const { t } = useTranslation("common")
  return (
    <motion.div
      data-testid="Illustrations"
      initial="hidden"
      whileInView="visible"
      variants={yAnimation}
      viewport={{ amount: 0.2, once: true }}
      custom={2}
      className={classNames(cls.Illustrations, {}, [className])}
    >

      <div className={classNames(cls.IllusRow)}>
        <div className={classNames(cls.IllusContainer, {}, [className])}>
          <motion.div
            variants={yAnimation}
            custom={2}
            className={classNames(cls.IllusTitle)}
          >
            <p>
              {t("как мы")} {" "}
            </p>
            <span>
              {t("работаем")}
            </span>
          </motion.div>
          <div className={classNames(cls.IllusLeftBlok)}>
            <img loading="lazy" className={classNames(cls.img)} src={group} alt="animation" />
            {/* <AnimationBloc/> */}
          </div>
        </div>
        <motion.div
          variants={yAnimation}
          custom={2}
          className={classNames(cls.IllusRightBlok)}
        >
          {stepsProps.map((step, index: number) => (
            <div className={classNames(cls.stepContiner)} key={index + 1}>
              <MStep
                MTop={step.MTop}
                MTopmM={step.MTopmM}
                number={step.number}
                subTitle={step.subTitle}
                title={step.title} />
            </div>
          ))}
        </motion.div>
      </div>

    </motion.div>
  )
};