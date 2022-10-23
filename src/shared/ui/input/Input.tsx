import { ChangeEvent, memo, useCallback, useEffect, useMemo, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import useDebounce from "shared/lib/Hooks/useDebounce/useDebounce";
import { validatorEmail } from "shared/lib/validation/validationForm";
import cls from "./Input.module.scss";
import { InputsProps } from "./types";

export const Input = memo((props: InputsProps) => {
  const {
    className,
    value,
    handleChange,
    style,
    label,
    params = "",
    typeInput = "text",
    validMessage,
    required = false
  } = props;
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(true);
  const debounceValue = useDebounce(value);

  const isValidEmail = useMemo(() => {
    if (params === "email") {
      return validatorEmail(debounceValue);
    }
    return true;
  }, [params, debounceValue])

  useEffect(() => setValid(isValidEmail), [isValidEmail])
  const onHandleCahnge = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    handleChange?.(params, event.target.value);
  }, [handleChange, params])

  const handleBlur = () => {
    setFocused(true);
  };

  const handleFocus = () => {
    setFocused(false);
  };

  const validation = focused && required && !valid
  return (
    <div
      className={classNames(
        cls.customField,
        {
          [cls.errorInput]: validation,
          [cls.isValue] : value.length > 0
        },
        [className]
      )}>
      
      <input
        style={style}
        onChange={onHandleCahnge}
        value={value}
        required={required}
        onBlur={handleBlur}
        onFocus={handleFocus}
        type={typeInput}
        placeholder="&nbsp;"
        id={params}
      />
      <label 
        data-shrink={`${!focused}`} 
        className={classNames(cls.label)} 
        htmlFor={params}
      >
        {required ? `${label}*` : label}
      </label>
      {validation && (
        <span
          className={classNames(cls.errorMessage)}
          aria-live="polite"
        >
          {validMessage}
        </span>
      )}
    </div>
  )
});