/* eslint-disable max-len */
/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box";
import "./SecondBlock.scss";
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import Item from "./ItemsProps";
import { ItemsProps } from "./helpers";

export interface SecondBlockProps {
  className?: string;
}


export const SecondBlock = ({ className }: SecondBlockProps) => {
  const { t } = useTranslation("secondBlock")
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{amount: 0.2, once: true}}
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
          {ItemsProps.map((item) => (
            <Item
              key={item.title}
              svgItem={item.svgItem}
              title={item.title}
              subTitle={item.subTitle}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  )
};
