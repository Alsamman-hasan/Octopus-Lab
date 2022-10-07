import { useState } from "react";
import "./footerLeft.scss";
import { Button } from "shared/ui/Buttons";
import { InputInUi } from "shared/ui/inputs";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { inputscollection } from "./constants";
import { IState } from "./types";

const FooterLeft = () => {
  const { t } = useTranslation("Footer");
  const [state, setState] = useState<IState>({});

  const onHandelChange = (params: string, value: string) => {
    setState((prev) => ({ ...prev, [params]: value }));
    // console.log(params);
  };
  
  return (
    <div className={classNames("footerLeft")}>
      <div className={classNames("footerLeft-header")}>
        <span className={classNames("footerLeft-header-title")}>
          {t("Мы готовы обсудить новый проект")}
        </span>
        <span className={classNames("footerLeft-header-subTitle")}>
          {t("Присылайте ваш проект на оценку. А также мы ответим на ваши вопросы.")}
        </span>
      </div>
      <div className={classNames("footerLeft-forms")} >
        {inputscollection(state).map((item) => (
          <div key={item.params}>
            <InputInUi
              value={item.value}
              handleChange={onHandelChange}
              fullWidth
              label={item.label}
              params={item.params}
              typeInput={item.params === "phone" ? "number" : item.params}
            />
          </div>
        ))}
      </div>
      <div className={classNames("footerLeft-footers")}>
        <div className={classNames("footerLeft-btn")}>
          <Button
            sizes={ButtonSize.BIG}
            btnBg={ButtonBgColor.BLUE}
            className="btn"
          >
            {t("Оценить проект")}
          </Button>
        </div>
        <div className={classNames("footerLeft-text")}>
          <span>
            {t("Нажимая кнопку «Оценить проект», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в")}
          </span>{" "}
          <a href="/">{t("Согласии на обработку персональных данных.")}</a>
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
