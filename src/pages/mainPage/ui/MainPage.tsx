/* eslint-disable arrow-body-style */

import { classNames } from "shared/lib/classNames/classNames";
import { 
  BgAnimation, 
  FristBlock, 
  Illustrations, 
  OurWorks, 
  SecondBlock 
} from "widgets/MainComponents";
import cls from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={classNames(cls.page)}>
      <BgAnimation />
      <div
        className={classNames(cls["content-page"])}
      >
        <FristBlock />
        <SecondBlock />
        <OurWorks />
        <Illustrations/>
      </div>
    </div>
  )
}

export default MainPage