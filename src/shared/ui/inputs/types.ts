import { CSSProperties } from "react";

export interface IInputsProps {
  value: string;
  handleChange: (params: string, value: string) => void;
  fullWidth?: boolean;
  style?: CSSProperties;
  label?: string;
  params?: string;
  typeInput?: string
}
