import { ChangeEvent, FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import { IInputsProps } from "../types";
import "./inputUi.scss";
import { classNames } from "../../../lib/classNames/classNames";
import { validatorEmail } from "../../../lib/validation/validationForm";
import useDebounce from "../../../lib/Hooks/useDebounce/useDebounce";

const InputUi: FC<IInputsProps> = ({
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
  const debounceValue = useDebounce(value);

  const isValidEmail = useMemo(()=> {
    if (params === "email") { 
      return validatorEmail(debounceValue);
    }
    return true;
  }, [params, debounceValue])

  useEffect(() => setValid(isValidEmail), [isValidEmail])

  const onHandleCahnge = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    handleChange(params, event.target.value);
  },[handleChange, params])

  const handleBlur = () => {
    setFocused(true);
  };

  const handleFocus = () => {
    setFocused(false);
  };

  const validation = focused && required && !valid 
  const helper = () => <span className={classNames("error", {}, ["ML"])}>{validMessage}</span>
  return (
    <div className={classNames("inputContainer", { "error": validation })}>
      <TextField
        fullWidth={fullWidth}
        label={label}
        type={typeInput}
        variant="standard"
        style={style}
        required={required}
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
const InputInUi = memo(InputUi)
export default InputInUi;

