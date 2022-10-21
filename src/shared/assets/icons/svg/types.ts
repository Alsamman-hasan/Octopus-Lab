import { CSSProperties, MouseEvent } from "react";

export interface ISvgProps {
  width?: string;
  height?: string;
  animation?: string; 
  fill?: string;
  className?: string;
  style?: CSSProperties;
  type?: "origin" | "alternative";
  stroke?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
