import { classNames } from "shared/lib/classNames/classNames";
import {
  BgAnimation,
  FristBlock,
  Illustrations,
  OurWorks,
  Projects,
  RainTime,
  SecondBlock
} from "widgets/MainComponents";
import cls from "./mainPage.module.scss";

const MainPage = () => (
  <div>
    <BgAnimation />
    <div className={classNames(cls.page)}>
      {/* <RainTime/> */}
      <div
        className={classNames(cls["content-page"])}
      >
        <FristBlock />
        <SecondBlock />
        <OurWorks />
        <Illustrations />
        <Projects />
      </div>
    </div>
  </div>

)

export default MainPage