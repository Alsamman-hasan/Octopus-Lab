import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { yAnimation } from "shared/lib/Animations/Animations";
import { DiversitySVG, ManySVG, MedalSVG, StartupSVG } from "shared/assets/icons/svg/desktopSVG";
import { useMemo } from "react";
import cls from "./Properties.module.scss";
import Item from "./ItemsProps";

export interface PropertiesProps {
  className?: string;
}


export const Properties = ({ className }: PropertiesProps) => {
  const { t } = useTranslation("secondBlock")
  const ItemsProps = useMemo(() => [
    {
      svgItem: <StartupSVG className={classNames(cls.icons)} />,
      key: 1,
      title: t("Быстро запускаем проекты в работу"),
      subTitle: t("У нас отлаженные процессы оценки проекта, согласования договора и NDA. Работаем с электронным документооборотом."),
    },
    {
      svgItem: <MedalSVG className={classNames(cls.icons)} />,
      key: 2,
      title: t("Усиливаем экспертизу вашей команды"),
      subTitle: t("Думаем за вас о UX, самостоятельно делаем микроанимации и адаптив, подчищаем косяки дизайна."),
    },
    {
      svgItem: <DiversitySVG className={classNames(cls.icons)} />,
      key: 3,
      title: t("Беремся за проекты любой сложности"),
      subTitle: t("Делаем верстку и фронтенд любой сложности — от простых лендингов до больших сервисов"),
    },
    {
      svgItem: <ManySVG className={classNames(cls.icons)} />,
      key: 4,
      title: t("Сокращаем расходы на производство"),
      subTitle: t("Стараемся быть гибкими, чтобы подстроиться под ваши требования и процессы."),
    }
  ], [t])

  return (
    <motion.div
      data-testid="Properties"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={yAnimation}
      custom={1}
      className={classNames(cls.Properties, {}, [className])}
    >
      <div className={classNames(cls.span8)}>
        {t("почему")} <br /><span>{t("выбирают")}</span> {t("нас")}
      </div>
      {ItemsProps.map((item, index: number) => (
        <div key={item.key + index}  className={classNames(cls.span4)}>
          <Item
            svgItem={item.svgItem}
            title={item.title}
            subTitle={item.subTitle}
          />
        </div>
      ))}
    </motion.div>
  )
};
