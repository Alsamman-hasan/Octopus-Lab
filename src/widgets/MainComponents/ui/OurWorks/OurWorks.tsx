import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import cls from "./OurWorks.module.scss";
import { MItem } from "./Item";
import { ItemsProps } from "./helpers";


export interface OurWorksProps {
  className?: string;
}

export const OurWorks = ({ className }: OurWorksProps) => {
  const { t } = useTranslation("common")
  return (
    <motion.div
      data-testid="OurWorks"
      initial="hidden"
      whileInView="visible"
      variants={yAnimation}
      viewport={{ amount: 0.2, once: true }}
      custom={2}
      className={classNames(cls.OurWorks, {}, [className])}
    >
      <motion.h1
        variants={yAnimation}
        custom={2}
        className={classNames(cls.OurWorksTitle)}
      >
        {t("Что мы")} {" "}
        <span>
          {t("делаем")}
        </span>
      </motion.h1>
      <div className={classNames(cls.Table)}>
        {
          ItemsProps.map((el) => (
            <div
              key={el.title}
              className={classNames(cls.OurWorksItem)}
            >
              <MItem
                variants={yAnimation}
                custom={3}
                title={el.title}
                subTitle={el.subTitle}
                key={el.title} />
            </div>
          ))
        }
      </div>
    </motion.div>
  )
};