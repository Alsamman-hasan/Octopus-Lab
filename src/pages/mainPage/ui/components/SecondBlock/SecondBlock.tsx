/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next"
import Box from "@mui/material/Box";
import "./SecondBlock.scss";
import { DiversitySVG, ManySVG, MedalSVG, StartupSVG } from "shared/assets/icons/svg/desktopSVG";
import Item from "./ItemsProps";

export interface SecondBlockProps {
  className?: string;
}


const ItemsProps = [
  {
    svgItem: <StartupSVG />,
    title: "Быстро запускаем проекты в работу",
    subTitle: "У нас отлаженные процессы оценки проекта, согласования договора и NDA. Работаем с электронным документооборотом.",
  },
  {
    svgItem: <MedalSVG />,
    title: "Усиливаем экспертизу вашей команды",
    subTitle: "Думаем за вас о UX, самостоятельно делаем микроанимации и адаптив, подчищаем косяки дизайна.",
  },
  {
    svgItem: <DiversitySVG />,
    title: "Беремся за проекты любой сложности",
    subTitle: "Делаем верстку и фронтенд любой сложности — от простых лендингов до больших сервисов",
  },
  {
    svgItem: <ManySVG />,
    title: "Сокращаем расходы на производство",
    subTitle: "Стараемся быть гибкими, чтобы подстроиться под ваши требования и процессы.",
  }
]

 
export const SecondBlock = ({ className }: SecondBlockProps) => {
  const { t } = useTranslation("secondBlock")
  return (
    <div className={classNames("SecondBlock", {}, [className])}>
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
            <Item key={item.title} svgItem={item.svgItem} title={item.title} subTitle={item.subTitle}/>
          ))}
        </Box>
      </Box>
    </div>
  )
};



// const ItemsProps = [
//   {
//     svgItem: <StartupSVG />,
//     title: t("Быстро запускаем проекты в работу"),
//     subTitle: t("У нас отлаженные процессы оценки проекта, согласования договора и NDA. Работаем с электронным документооборотом."),
//   },
//   {
//     svgItem: MedalSVG,
//     title: t("Усиливаем экспертизу вашей команды"),
//     subTitle: t("Думаем за вас о UX, самостоятельно делаем микроанимации и адаптив, подчищаем косяки дизайна."),
//   },
//   {
//     svgItem: DiversitySVG,
//     title: t("Беремся за проекты любой сложности"),
//     subTitle: t("Делаем верстку и фронтенд любой сложности — от простых лендингов до больших сервисов"),
//   },
//   {
//     svgItem: ManySVG,
//     title: t("Сокращаем расходы на производство"),
//     subTitle: t("Стараемся быть гибкими, чтобы подстроиться под ваши требования и процессы."),
//   }
// ]