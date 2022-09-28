/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { yAnimation, xAnimation } from "shared/lib/Animations/Animations";
import cls from "./OurWorks.module.scss";
import { MItem } from "./Item";
import { ItemsProps } from "./helpers";


export interface OurWorksProps {
  className?: string;
}

export const OurWorks = ({ className }: OurWorksProps) => {
  const { t } = useTranslation("common")
  // const ItemsProps = [
  //   {
  //     title: t("Лендинги"),
  //     subTitle: t("Короткие и длинные. Адаптив, скорость загрузки, микроанимации, семантика и SEO-френдли разметка."),
  //   },
  //   {
  //     title: t("Интернет-магазины и другие сайты"),
  //     subTitle: t("Страницы с интерактивом, формами, корзинами. Доступные интерфейсы для пользователей."),
  //   },
  //   {
  //     title: t("Сервисы"),
  //     subTitle: t("Медиа, агрегаторы. Большое количество страниц с похожими компонентами."),
  //   },
  //   {
  //     title: t("Админки и дэшборды"),
  //     subTitle: t("Много графиков и полей,где важна максимальная реиспользуемость компонентов."),
  //   },
  //   {
  //     title: t("Библиотеки компонентов и дизайн- системы"),
  //     subTitle: t("То, с чем дальше вы будете работать. Можем сделать отдельно или собрать в рамках проекта."),
  //   },
  //   {
  //     title: t("Email рассылки"),
  //     subTitle: t("Особый вид боли — верстальщики плачут, но верстают."),
  //   }
  // ]
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
        variants={xAnimation}
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
                variants={xAnimation}
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