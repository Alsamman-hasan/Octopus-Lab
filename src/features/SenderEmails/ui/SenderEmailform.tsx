import { memo, useCallback, useMemo, useState } from "react";
import "./SenderEmailForm.scss";
import { Button } from "shared/ui/Buttons";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { useSelector } from "react-redux";
import { uiReduser } from "entities/ToastUi";
import { useAppDispatch } from "shared/lib/Hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/input/Input";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { inputscollection } from "./constants";
import { senderEmailActions, senderEmailReducer } from "../model/slice/senderEmailSlice";
import { getSenderEmailName } from "../model/selectors/getSenderEmailName/getSenderEmailName";
import { sendEmail } from "../model/service/senderEmail/senderEmail";
import { getSenderEmailIsLaoding } from "../model/selectors/getSenderEmailLoading/getSenderEmailLoading";
import { getSenderEmailError } from "../model/selectors/getSenderEmailError/getSenderEmailError";
import { Inputparams } from "../model/types/senderSchema";

const initialReducers: ReducersList = {
  senderEmailes: senderEmailReducer,
  toastUi: uiReduser,
};

const SenderEmailForm = memo(() => {
  const { t } = useTranslation("Footer");
  const dispatch = useAppDispatch();
  const loading = useSelector(getSenderEmailIsLaoding);
  const error = useSelector(getSenderEmailError);
  const sendersData = useSelector(getSenderEmailName);

  const onHandelChange = useCallback(
    (params: string, value: string) => {
      switch (params) {
        case "name":
          dispatch(senderEmailActions.setName(value));
          break;
        case "email":
          dispatch(senderEmailActions.setEmail(value));
          break;
        case "phone":
          dispatch(senderEmailActions.setPhone(value));
          break;
        case "company":
          dispatch(senderEmailActions.setCompony(value));
          break;
        case "project":
          dispatch(senderEmailActions.setProject(value));
          break;
        default:
      }
    },
    [dispatch],
  );

  const inputItems = useMemo(() => inputscollection, []);

  const onLoginClick = useCallback(async () => {
    dispatch(sendEmail());
  }, [dispatch]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <div className={classNames("senderEmailForm-forms")} data-testid="SenderEmailForm">
        {inputItems.map((item) => (
          <div key={item.params}>
            <Input
              value={sendersData?.[item.params as Inputparams] || ""}
              handleChange={onHandelChange}
              label={t(item.label)}
              params={item.params}
              typeInput={item.params === "phone" ? "number" : item.params}
              validMessage={item.errorMessage}
              required={item.required || false}
            />
          </div>
        ))}
      </div>
      <div className={classNames("senderEmailForm-footers")}>
        <div className={classNames("senderEmailForm-btn")}>
          <Button
            sizes={ButtonSize.BIG}
            btnBg={ButtonBgColor.BLUE}
            className="btn"
            onClick={onLoginClick}
            disabled={loading || !sendersData?.isValidate || error}
          >
            {loading ? t("loading") : t("Оценить проект")}
          </Button>
        </div>
        {error && (
          <span className={classNames("errorBtn")}>{t("please input email and name")}</span>
        )}
      </div>
    </DynamicModuleLoader>
  );
});

export default SenderEmailForm;
