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
  <div className={classNames(cls.page)}>
    <BgAnimation />
    {/* <RainTime/> */}
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

export default MainPage