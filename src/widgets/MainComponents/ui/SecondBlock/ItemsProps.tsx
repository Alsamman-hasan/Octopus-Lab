import { ReactElement } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export interface IItems {
  svgItem: ReactElement;
  title: string;
  subTitle: string;
}

const Item = (props: IItems) => {
  const { svgItem, title, subTitle } = props;
  return (
    <div>
      <div className={classNames("span4")}>
        {svgItem}
        <span className={classNames("SecondBlockTitle")} >
          {title}
        </span>
        <span className={classNames("SecondBlockSubTitle")} >
          {subTitle}
        </span>
      </div>
    </div>
  )
}

export default Item;