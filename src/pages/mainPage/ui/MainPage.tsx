/* eslint-disable arrow-body-style */

import { classNames } from "shared/lib/classNames/classNames";
import { 
  BgAnimation, 
  FristBlock, 
  Illustrations, 
  OurWorks, 
  Projects, 
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
        <Projects/>
      </div>
    </div>
  )
}

export default MainPage