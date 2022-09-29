/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box";
import "./SecondBlock.scss";
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import { DiversitySVG, ManySVG, MedalSVG, StartupSVG } from "shared/assets/icons/svg/desktopSVG";
import Item from "./ItemsProps";

export interface SecondBlockProps {
  className?: string;
}


export const SecondBlock = ({ className }: SecondBlockProps) => {
  const { t } = useTranslation("secondBlock")
  const ItemsProps = [
    {
      svgItem: <StartupSVG />,
      key: 1,
      title: t("Быстро запускаем проекты в работу"),
      subTitle: t("У нас отлаженные процессы оценки проекта, согласования договора и NDA. Работаем с электронным документооборотом."),
    },
    {
      svgItem: <MedalSVG />,
      key: 2,
      title: t("Усиливаем экспертизу вашей команды"),
      subTitle: t("Думаем за вас о UX, самостоятельно делаем микроанимации и адаптив, подчищаем косяки дизайна."),
    },
    {
      svgItem: <DiversitySVG />,
      key: 3,
      title: t("Беремся за проекты любой сложности"),
      subTitle: t("Делаем верстку и фронтенд любой сложности — от простых лендингов до больших сервисов"),
    },
    {
      svgItem: <ManySVG />,
      key: 4,
      title: t("Сокращаем расходы на производство"),
      subTitle: t("Стараемся быть гибкими, чтобы подстроиться под ваши требования и процессы."),
    }
  ]
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={yAnimation}
      custom={1}
      className={classNames("SecondBlock", {}, [className])}
    >
      <Box sx={{ width: 1 }}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={5}>
          <Box gridColumn="span 8">
            <div
              className={classNames("span8")}
            >
              {t("почему")} <br /><span>{t("выбирают")}</span> {t("нас")}
            </div>
          </Box>
          {ItemsProps.map((item, index: number) => (
            <Box key={item.key + index} gridColumn="span 4">
              <Item
                svgItem={item.svgItem}
                title={item.title}
                subTitle={item.subTitle}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  )
};