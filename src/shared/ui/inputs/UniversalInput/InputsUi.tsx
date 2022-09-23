import React, { FC } from "react";
import { TextField } from "@mui/material";
import { IInputsProps } from "../types";
import "./inputUi.scss";

const InputInUi: FC<IInputsProps> = ({
  value,
  handleChange,
  fullWidth,
  style,
  label,
  params = "",
}) => (
  <div className="input-container">
    <TextField
      fullWidth={fullWidth}
      label={label}
      variant="standard"
      style={style}
      sx={{ maxWidth: fullWidth ? "inherit" : "12rem" }}
      value={value}
      onChange={(event) => handleChange(params, event.target.value)}
      autoComplete="off"
    />
  </div>
);

export default InputInUi;
