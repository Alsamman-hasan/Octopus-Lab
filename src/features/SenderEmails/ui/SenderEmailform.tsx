import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./SenderEmailForm.scss";
import { Button } from "shared/ui/Buttons";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { useSelector, useStore } from "react-redux";
import { validatorEmail } from "shared/lib/validation/validationForm";
import { ReduxStoreWithManager } from "app/providers/StorProvider/config/StateSchema";
import { uiReduser } from "entities/ToastUi";
import { useAppDispatch } from "shared/lib/Hooks/useAppDispatch/useAppDispatch";
import { Input } from "shared/ui/input/Input";
import { IState } from "./types";
import { inputscollection } from "./constants";
import {
  getSenderEmailLoading,
} from "../model/selectors/getSenderEmailValue/getSenderEmailValue";
import { sendEmailAction } from "../model/Actions/sendEmailActions";
import { senderReduser } from "../model/slice/SenderSlice";

const SenderEmailFormUi = () => {
  const { t } = useTranslation("Footer");
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;
  const loading = useSelector(getSenderEmailLoading);
  const [error, setError] = useState(false);
  const [state, setState] = useState<IState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: ""
  });

  useEffect(() => {
    dispatch({ type: `@INIT mailes reducer` });
    store.reducerManager.add("mailes", senderReduser);
    store.reducerManager.add("toastUi", uiReduser);
    return () => {
      store.reducerManager.remove("mailes");
      store.reducerManager.remove("toastUi");
    }
  }, [])


  const isValidEmail = useMemo(() => validatorEmail(state.email), [state.email])

  const onHandelChange = useCallback((params: string, value: string) => {
    setState((prev) => ({ ...prev, [params]: value }));
  }, []);


  const hasError = Boolean(!state.email || !state.name || !isValidEmail)
  const inputItems = useMemo(() => inputscollection, [])

  const sendData = () => {
    if (hasError) {
      setError(true);
    } else {
      setError(false);
      dispatch(sendEmailAction(state));
      setState({
        name: "",
        email: "",
        phone: "",
        company: "",
        project: ""
      })
    }
  }
  return (
    <>
      <div className={classNames("senderEmailForm-forms")} data-testid="SenderEmailForm">
        {inputItems.map((item) => (
          <div key={item.params}>
            <Input
              value={state[item.params as keyof IState]}
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
            onClick={sendData}
            disabled={loading || Boolean(!state.email) || !isValidEmail}
          >
            {loading ? t("loading") : t("Оценить проект")}
          </Button>
        </div>
        {hasError && error && <span className={classNames("errorBtn")}>{t("please input email and name")}</span>}
      </div>
    </>
  );
};

export const SenderEmailForm = memo(SenderEmailFormUi)