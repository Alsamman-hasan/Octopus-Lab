import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import Grid from "@mui/material/Grid";
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
      <Grid
        className={classNames(cls.Table)}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {
          ItemsProps.map((el) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              padding={0}
              key={el.title}
              className={classNames(cls.OurWorksItem)}
            >
              <MItem
                variants={yAnimation}
                custom={3}
                title={el.title}
                subTitle={el.subTitle}
                key={el.title} />
            </Grid>
          ))
        }
      </Grid>
    </motion.div>
  )
};