import { memo, useCallback, useMemo, useState } from "react";
import "./SenderEmailForm.scss";
import { Button } from "shared/ui/Buttons";
import { InputInUi } from "shared/ui/inputs";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { useDispatch, useSelector } from "react-redux";
import { validatorEmail } from "shared/lib/validation/validationForm";
import { IState } from "./types";
import { inputscollection } from "./constants";
import {
  getSenderEmailLoading,
} from "../model/selectors/getSenderEmailValue/getSenderEmailValue";
import { sendEmailAction } from "../model/Actions/sendEmailActions";

const SenderEmailFormUi = () => {
  const { t } = useTranslation("Footer");
  const dispatch = useDispatch();
  const loading = useSelector(getSenderEmailLoading);
  const [error, setError] = useState(false);
  const [state, setState] = useState<IState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: ""
  });

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
            <InputInUi
              value={state[item.params as keyof IState]}
              handleChange={onHandelChange}
              fullWidth
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