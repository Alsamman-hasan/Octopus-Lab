import { useTranslation } from "react-i18next";
import { LogoSVG } from "shared/assets/icons/svg/desktopSVG";
import { classNames } from "shared/lib/classNames/classNames";
import { useScrollHook } from "shared/lib/scrollHook/scrollHook";
import { Button} from "shared/ui/Buttons";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { LangSwitcher } from "widgets/LangSwitcher";
import cls from "./header.module.scss";


export interface HeaderProps {
  className?: string;
}


export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation("common");
  const scroll = useScrollHook();

  return (
    <div 
      className={classNames(
        cls.headerWrapper, 
        { [cls.scrollEvent]: scroll > 10 }
        , [className])} 
      id="coords" 
    >
      <div className={classNames(cls.contetn, {}, [className])}>
        <div className={classNames(cls.logo, {}, [className])}>
          <LogoSVG />
        </div>
        <div className={classNames(cls.info, {}, [className])}>
          <div className={classNames(cls.btn, {}, [className])}>
            <Button
              sizes={ButtonSize.SMALL}
              btnBg={ButtonBgColor.PURPLE}
              disabled={!true}
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

