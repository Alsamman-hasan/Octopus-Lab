/* eslint-disable i18next/no-literal-string */
import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from "react";
import { TextField } from "@mui/material";
import { IInputsProps } from "../types";
import"./inputUi.scss";
import { validatorEmail } from "../../../lib/validation/validationForm";
import useDebounce from "../../../lib/Hooks/useDebounce/useDebounce";
import { classNames } from "../../../lib/classNames/classNames";

const InputInUi: FC<IInputsProps> = ({
  value,
  handleChange,
  fullWidth,
  style,
  label,
  params = "",
  typeInput = "text"
}) => {
  const [inputValidate, setInputValidate] = useState({
    isValid: true,
    message:null,
  });
  const [inpuValue, setInputValue] = useState("")
  const [debValue, setDebValue] = useState("")

  const toValidateValue = useCallback(() => useDebounce(inpuValue), [inpuValue]);
  const validateValue = toValidateValue();

  useMemo(() =>{
    setDebValue(validateValue)
  }, [validateValue] )

  useEffect(() => {
    const { isValid, message } = validatorEmail(debValue);
    setInputValidate(() => ({ isValid, message }));
  }, [debValue])

  const onHandleCahnge = (event: ChangeEvent<HTMLInputElement>) => {
    if(typeInput ==="email") {
      setInputValue(event.target.value);
      handleChange(params, event.target.value);
    }else if(typeInput ==="phone"){
      handleChange(params, event.target.value);
    } else {
      handleChange(params, event.target.value);
    }
  }

  return (
    <div className={classNames("inputContainer", { "error": !inputValidate.isValid })}>
      <TextField
        fullWidth={fullWidth}
        label={label}
        type={typeInput}
        variant="standard"
        style={style}
        sx={{ maxWidth: fullWidth ? "inherit" : "12rem", color: "red"}}
        value={value}
        onChange={onHandleCahnge}
        autoComplete="off"
      />
      {
        !inputValidate.isValid && 
        <div className={classNames("error", {}, ["ML"])}>{inputValidate.message}</div>
      }
    </div>
  )
};

export default InputInUi;
