import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import group from "shared/assets/mobile.png"
import { xAnimation, yAnimation } from "shared/lib/Animations/Animations";
import cls from "./Illustrations.module.scss";

export interface IllustrationsProps {
  className?: string;
}
export const Illustrations = ({ className }: IllustrationsProps) => {
  const { t } = useTranslation()
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={yAnimation}
      viewport={{ amount: 0.2, once: true }}
      custom={2}
      className={classNames(cls.Illustrations, {}, [className])}
    >
      <motion.h1
        variants={xAnimation}
        custom={2}
        className={classNames(cls.IllusTitle)}
      >
        {t("как мы")} {" "}
        <span>
          {t("работаем")}
        </span>
      </motion.h1>
      <div className={classNames(cls.IllusContainer, {}, [className])}>
        <div className={classNames(cls.IllusLeftBlok)}>
          <div className={classNames(cls.continer)}>
            <img className={classNames(cls.img)}  src={group} alt="animation" />
          </div>
          
        </div>
        <div className={classNames(cls.IllusRightBlok)}>
          <div>sdfsdfsd</div>
        </div>
      </div>

    </motion.div>
  )
};