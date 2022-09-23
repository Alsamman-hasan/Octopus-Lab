import { CSSProperties } from "react";

export interface ICustomButtonProps {
  text?: string;
  fullWidth?: boolean;
  minWidth?: boolean | string;
  disabled?: boolean;
  onClick?: (value?: any) => void;
  style?: CSSProperties;
  typeButton?: "button" | "submit" | "reset" | undefined;
  to?: string;
  buttonPadding?: string;
}
