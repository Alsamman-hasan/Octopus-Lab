/* eslint-disable arrow-body-style */
/* eslint-disable i18next/no-literal-string */

import { classNames } from "shared/lib/classNames/classNames";
import { BgAnimation, FristBlock, SecondBlock } from "./components";
import cls from "./mainPage.module.scss";


const MainPage = () => {
  return (
    <div className={classNames(cls.page)}>
      <BgAnimation/>
      <div className={classNames(cls["content-page"])}>
        <FristBlock/>
        <SecondBlock/>
      </div>
    </div>
  )
}

export default MainPage