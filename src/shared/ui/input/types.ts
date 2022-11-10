import { CSSProperties, InputHTMLAttributes } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export interface InputsProps extends HTMLInputProps {
  value: string;
  className?: string;
  handleChange: (params: string, value: string) => void;
  style?: CSSProperties;
  label?: string;
  params: string;
  typeInput?: string;
  validMessage?: string;
  required?: boolean;
}
