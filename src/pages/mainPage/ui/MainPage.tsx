import { classNames } from "shared/lib/classNames/classNames";
import {
  BgAnimation,
  FirstBlock,
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
        <FirstBlock />
        <SecondBlock />
        <OurWorks />
        <Illustrations />
        <Projects />
      </div>
    </div>
  </div>

)

export default MainPage