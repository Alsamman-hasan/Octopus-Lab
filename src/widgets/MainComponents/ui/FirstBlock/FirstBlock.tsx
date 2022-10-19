import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import cls from "./FirstBlock.module.scss";

export interface FirstBlockProps {
  className?: string;
}
export const FirstBlock = ({ className }: FirstBlockProps) => {
  const { t } = useTranslation("common")
  return (
    <motion.div 
      data-testid="FirstBlock"
      initial="hidden"
      whileInView="visible"
      variants={yAnimation}
      viewport={{ amount: 0.1 }}
      custom={1}
      className={classNames(cls.FirstBlock, {}, [className])}
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
    </motion.div>
  )
};