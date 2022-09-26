/* eslint-disable max-len */
import React, { FC } from "react";
import { ISvgProps } from "../types";

const FacebookSVG: FC<ISvgProps> = ({
  width = "36",
  height = "36",
  fill = "#121212",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 18.1005C0 27.0495 6.4995 34.491 15 36V22.9995H10.5V18H15V13.9995C15 9.4995 17.8995 7.0005 22.0005 7.0005C23.2995 7.0005 24.7005 7.2 25.9995 7.3995V12H23.7C21.4995 12 21 13.0995 21 14.5005V18H25.8L25.0005 22.9995H21V36C29.5005 34.491 36 27.051 36 18.1005C36 8.145 27.9 0 18 0C8.1 0 0 8.145 0 18.1005Z"
      fill="white"
    />
  </svg>
);

export default FacebookSVG;
