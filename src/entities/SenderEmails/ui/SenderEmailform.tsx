import {  useState } from "react";
import "./SenderEmailForm.scss";
import { Button } from "shared/ui/Buttons";
import { InputInUi } from "shared/ui/inputs";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "./types";
import { IInputItems, inputscollection } from "./constants";
import {
  getSenderEmailLoading ,
} from "../model/selectors/getSenderEmailValue/getSenderEmailValue";
import { sendEmailAction } from "../model/Actions/sendEmailActions";


export const SenderEmailForm = () => {
  const { t } = useTranslation("Footer");
  const dispatch = useDispatch();
  const loading = useSelector(getSenderEmailLoading);

  const [state, setState] = useState<IState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    project: ""
  });

  const onHandelChange = (params: string, value: string) => {
    setState((prev) => ({ ...prev, [params]: value }));
  };
  const sendData = () => {
    dispatch(sendEmailAction(state));
    setState({
      name: "",
      email: "",
      phone: "",
      company: "",
      project: ""
    })
  }


  return (
    <div className={classNames("senderEmailForm")}>
      <div className={classNames("senderEmailForm-header")}>
        <span className={classNames("senderEmailForm-header-title")}>
          {t("Мы готовы обсудить новый проект")}
        </span>
        <span className={classNames("senderEmailForm-header-subTitle")}>
          {t("Присылайте ваш проект на оценку. А также мы ответим на ваши вопросы.")}
        </span>
      </div>
      <div className={classNames("senderEmailForm-forms")} >
        {inputscollection(state).map((item: IInputItems) => (
          <div key={item.params}>
            <InputInUi
              value={item.value}
              handleChange={onHandelChange}
              fullWidth
              label={item.label}
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
            disabled={loading}
          >
            {loading ? t("loading") : t("Оценить проект")}
          </Button>
        </div>
        <div className={classNames("senderEmailForm-text")}>
          <span>
            {t("Нажимая кнопку «Оценить проект», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в")}
          </span>{" "}
          <a href="/">{t("Согласии на обработку персональных данных.")}</a>
        </div>
      </div>
    </div>
  );
};
