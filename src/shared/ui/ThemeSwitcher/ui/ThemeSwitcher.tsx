import { useTheme } from "app/providers/ThemeProvider";
import { Theme } from "app/App";
import { memo } from "react";
import { useLocation } from "react-router-dom";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "../../../assets/icons/themesIcons/Light.svg"
import DarkIcon from "../../../assets/icons/themesIcons/Dark.svg"

export interface ThemeSwitcherProps {
  className?: string;
}


export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const isEn = pathname !== "/ru";
  const onChangeTheme = () => {
    toggleTheme();
  }
  if (!isEn) {
    return (
      <div onClick={onChangeTheme} className={cls.btn}>
        {theme === Theme.DARK
          ? <DarkIcon className={cls.icons} fill="#f5f5f5" />
          : <LightIcon className={cls.icons} fill="#11001d" />}
      </div>
    )
  }
  return (
    <div className={cls.label} onClick={onChangeTheme} >
      <input className={cls.inputSwitcher} type="checkbox" checked={theme === Theme.DARK} />
      <span className={cls.background}>
        <span className={cls.knob}>
          {
            theme === Theme.DARK
              ? <DarkIcon className={cls.icons} fill="#f5f5f5" />
              : <LightIcon className={cls.icons} fill="#11001d" />
          }
        </span>
      </span>
    </div>
  )
});