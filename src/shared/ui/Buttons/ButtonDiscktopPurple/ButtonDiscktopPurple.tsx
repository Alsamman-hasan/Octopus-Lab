import React, { FC, useMemo } from "react";
import "./buttonDiscktopPurple.scss";
import Button from "@mui/material/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { ICustomButtonProps } from "../types";

const ButtonDiscktopPurple: FC<ICustomButtonProps> = ({
  fullWidth,
  text = "",
  disabled,
  onClick,
  style,
  minWidth,
  typeButton,
}) => {
  const fullWidthInput = fullWidth ? "full-width-input" : "";

  const newMinWidth = useMemo(() => {
    if (typeof minWidth === "string") return minWidth;
    if (typeof minWidth === "boolean" && minWidth) return "7.5rem";
    return "";
  }, [minWidth]);

  return (
    <div
      className={classNames("purple-button-container", {}, [fullWidthInput])}
      style={{ minWidth: newMinWidth }}
    >
      <div className={classNames("purple-button")}>
        <Button
          disableRipple
          disabled={disabled}
          fullWidth={fullWidth}
          onClick={onClick}
          type={typeButton}
          style={style}
        >
          {text}
        </Button>
      </div>
    </div>
  );
};

export default ButtonDiscktopPurple;
