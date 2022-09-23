import React, { FC } from "react";
import { ISvgProps } from "../types";

const EmailSVG: FC<ISvgProps> = ({
  width = "22",
  height = "16",
  fill = "#121212",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 1.25L1.25 0.5H20.75L21.5 1.25V14.75L20.75 15.5H1.25L0.5 14.75V1.25ZM2 2.8025V14H20V2.804L11.465 9.35H10.55L2 2.8025ZM18.545 2H3.455L11 7.8035L18.545 2Z"
      fill="white"
    />
  </svg>
);

export default EmailSVG;
