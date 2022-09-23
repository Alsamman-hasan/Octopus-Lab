import React, { FC } from "react";
import { TextField } from "@mui/material";
import { IInputsProps } from "../types";

const InputEmail: FC<IInputsProps> = ({
  value,
  handleChange,
  fullWidth,
  style,
  label,
  params = "",
}) => (
  <div className="input-container">
    <TextField
      type="email"
      label={label}
      fullWidth={fullWidth}
      variant="standard"
      style={style}
      sx={{ maxWidth: fullWidth ? "inherit" : "12rem" }}
      value={value}
      onChange={(event) => handleChange(params, event.target.value)}
      autoComplete="off"
    />
  </div>
);

export default InputEmail;
