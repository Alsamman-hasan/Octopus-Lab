import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LogoDes } from "shared/assets/icons/svg/desktopSVG";
import { LogoMobile } from "shared/assets/icons/svg/mobileSVG";
import { classNames } from "shared/lib/classNames/classNames";
import { useWindowSize } from "shared/lib/Hooks/WindowWidth/WindowWidth";
import { Button} from "shared/ui/Buttons";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./header.module.scss";


export interface HeaderProps {
  className?: string;
  onScrollToFooter?: (param:string) => void; 
}

const LogoD = memo(() => <LogoDes />)
const LogoM = memo(() => <LogoMobile />)

const HeaderUi = ({ className, onScrollToFooter }: HeaderProps) => {
  const { t } = useTranslation("common");
  const { width } = useWindowSize("resize");
  const [isScrolling, setIsScrolling] = useState(false)
  const handleSize = useCallback(() => setIsScrolling(Boolean(window.pageYOffset > 10)), []);
  useEffect(() => {
    window.addEventListener("scroll", handleSize);
    return () => window.removeEventListener("scroll", handleSize);
  }, [handleSize]);

  return (
    <div 
      data-testid="header"
      className={classNames(
        cls.headerWrapper, 
        { [cls.scrollEvent]: isScrolling }
        , [className])} 
      id="coords" 
    >
      <div className={classNames(cls.contetn)}>
        <div className={classNames(cls.logo)}>
          {width > 768 ? <LogoD /> : <LogoM />}
        </div>
        <div className={classNames(cls.info)}>
          <div className={classNames(cls.btn)}>
            <Button
              sizes={ButtonSize.SMALL}
              btnBg={ButtonBgColor.PURPLE}
              onClick={() => onScrollToFooter?.("footer")}
              className={cls.HeaderBtn}
            >
              {t("Обсудить проект")}
            </Button>
          </div>
          <LangSwitcher/>
          <ThemeSwitcher/>
        </div>
      </div>
    </div>
  );
};

export const Header = memo(HeaderUi)