/* eslint-disable i18next/no-literal-string */
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import Box from "@mui/material/Box";

export interface IItems {
  svgItem: ReactElement<any, any>;
  title: string;
  subTitle: string;
  key: string;
}

const Item = (props: IItems) => {
  const { t } = useTranslation("secondBlock")
  const { svgItem, title, subTitle, key } = props;
  return (
    <Box gridColumn="span 4" key={key}>
      <div className={classNames("span4")}>
        {svgItem}
        <span className={classNames("SecondBlockTitle")} >
          {t(title)}
        </span>
        <span className={classNames("SecondBlockSubTitle")} >
          {t(subTitle)}
        </span>
      </div>
    </Box>
  )
}

export default Item;