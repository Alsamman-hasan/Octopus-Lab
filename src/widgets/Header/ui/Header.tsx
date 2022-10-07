import { useTranslation } from "react-i18next";
import { LogoDes } from "shared/assets/icons/svg/desktopSVG";
import { LogoMobile } from "shared/assets/icons/svg/mobileSVG";
import { classNames } from "shared/lib/classNames/classNames";
import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";
import { Button} from "shared/ui/Buttons";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./header.module.scss";


export interface HeaderProps {
  className?: string;
  onScrollToFooter?: () => void; 
}


export const Header = ({ className, onScrollToFooter }: HeaderProps) => {
  const { t } = useTranslation("common")
  const { top } = useWindowSize("scroll")
  const { width } = useWindowSize("resize")

  return (
    <div 
      className={classNames(
        cls.headerWrapper, 
        { [cls.scrollEvent]: top > 10 }
        , [className])} 
      id="coords" 
    >
      <div className={classNames(cls.contetn)}>
        <div className={classNames(cls.logo)}>
          {width > 765 ? <LogoDes /> : <LogoMobile/>}
        </div>
        <div className={classNames(cls.info)}>
          <div className={classNames(cls.btn)}>
            <Button
              sizes={ButtonSize.SMALL}
              btnBg={ButtonBgColor.PURPLE}
              onClick={onScrollToFooter}
              className={cls.HeaderBtn}
            >
              {t("Обсудить проект")}
            </Button>
          </div>
          <LangSwitcher/>
        </div>
      </div>
    </div>
  );
};

