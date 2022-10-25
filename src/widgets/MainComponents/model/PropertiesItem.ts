import React from "react";
import { DiversitySVG, ManySVG, MedalSVG, StartupSVG } from "shared/assets/icons/svg/desktopSVG";
import { ISvgProps } from "shared/assets/icons/svg/types";

export interface PropertiesItemType {
  SvgItem: React.FC<ISvgProps>
  key: number;
  title: string;
  subTitle: string;
}

export const PropertiesItems: PropertiesItemType[] = [
  {
    SvgItem: StartupSVG,
    key: 1,
    subTitle: "У нас отлаженные процессы оценки проекта, согласования договора и NDA. Работаем с электронным документооборотом.",
    title: "Быстро запускаем проекты в работу"
  },
  {
    SvgItem: MedalSVG,
    key: 2,
    title: "Усиливаем экспертизу вашей команды",
    subTitle: "Думаем за вас о UX, самостоятельно делаем микроанимации и адаптив, подчищаем косяки дизайна.",
  },
  {
    SvgItem: DiversitySVG,
    key: 3,
    title: "Беремся за проекты любой сложности",
    subTitle: "Делаем верстку и фронтенд любой сложности — от простых лендингов до больших сервисов",
  },
  {
    SvgItem: ManySVG,
    key: 4,
    title: "Сокращаем расходы на производство",
    subTitle: "Стараемся быть гибкими, чтобы подстроиться под ваши требования и процессы.",
  }
]