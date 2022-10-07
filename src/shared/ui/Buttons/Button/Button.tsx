import { ButtonHTMLAttributes, CSSProperties, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonSize, ButtonTheme, ButtonBgColor } from "../types";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  btnBg?: ButtonBgColor;
  sizes?: ButtonSize;
  style?: CSSProperties;
  disabled?: boolean;
  onClick?: (value?: any) => void;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    btnBg,
    style,
    disabled = false,
    sizes = ButtonSize.MEDIUM,
    onClick
  } = props;

  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls[btnBg]]: true,
    [cls[sizes]]: true,
  }

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className])}
      style={style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
};