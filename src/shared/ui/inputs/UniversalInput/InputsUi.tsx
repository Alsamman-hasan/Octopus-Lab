import { ChangeEvent, FC, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import { IInputsProps } from "../types";
import "./inputUi.scss";
import { classNames } from "../../../lib/classNames/classNames";
import { validatorEmail } from "../../../lib/validation/validationForm";

const InputInUi: FC<IInputsProps> = ({
  value,
  handleChange,
  fullWidth,
  style,
  label,
  params = "",
  typeInput = "text",
  validMessage,
  required = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);

  useMemo(() => {
    if (params === "email") {
      const isValid = validatorEmail(value);
      setValid(isValid);
    } else {
      setValid(true);
    }
  }, [value, params])

  const onHandleCahnge = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(params, event.target.value);
  }
  const handleBlur = () => {
    setFocused(true);
  };

  const handleFocus = () => {
    setFocused(false);
  };
  const validation = focused && required && !valid 
  const helper = () => <div className={classNames("error", {}, ["ML"])}>{validMessage}</div>
  return (
    <div className={classNames("inputContainer", { "error": validation })}>
      <TextField
        fullWidth={fullWidth}
        label={label}
        type={typeInput}
        variant="standard"
        style={style}
        sx={{ maxWidth: fullWidth ? "inherit" : "12rem" }}
        value={value}
        onChange={onHandleCahnge}
        autoComplete="off"
        onBlur={handleBlur}
        onFocus={handleFocus}
        helperText={validation && helper()}
      />
    </div>
  )
};

export default InputInUi;

