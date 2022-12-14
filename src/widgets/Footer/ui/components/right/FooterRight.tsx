import "./footerRight.scss";
import Avatar from "shared/assets/avatar.svg";
import { FacebookSVG, InstagramSVG, TelegramSVG, VkSVG } from "shared/assets/icons/svg/social";
import { EmailSVG, PhoneSVG } from "shared/assets/icons/svg/desktopSVG";
import { Button } from "shared/ui/Buttons";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { ButtonBgColor, ButtonSize } from "shared/ui/Buttons/types";
import { memo } from "react";

const FooterRight = memo(() => {
  const { t } = useTranslation("Footer");
  return (
    <div className={classNames("footerRight")}>
      <div className={classNames("footerRight-info")}>
        <div className={classNames("footerRight-container")}>
          <div className={classNames("footerRight-header")}>
            <span>
              {t(
                "Вы также можете написать нам в чат. Наш менеджер ответит на все интересующие вас вопросы.",
              )}
            </span>
          </div>
          <div className={classNames("footerRight-manager")}>
            <div className={classNames("footerRight-manager_img")}>
              <Avatar />
              <span className={classNames("footerRight-manager_onlin")} />
            </div>
            <div className={classNames("footerRight-manager_info")}>
              <span className={classNames("footerRight-manager_name")}>{t("Иванова Марина")}</span>
              <span className={classNames("footerRight-manager_position")}>
                {t("Менеджер проектов")}
              </span>
            </div>
          </div>
          <div className={classNames("footerRight-btn")}>
            <Button sizes={ButtonSize.MEDIUM} btnBg={ButtonBgColor.NONCOLOR} className="btn">
              {t("Написать в чат")}
            </Button>
          </div>
        </div>
      </div>
      <div className={classNames("footerRight-contacts")}>
        <span className={classNames("footerRight-contacts_header")}>{t("Наши контакты")}</span>
        <div className={classNames("footerRight-contacts_item")}>
          <EmailSVG />
          <span>{t("nashapochta@gmail.com")}</span>
        </div>
        <div className={classNames("footerRight-contacts_item")}>
          <PhoneSVG />
          <span>{t("nashapochta@gmail.com")}</span>
        </div>
      </div>
      <div className={classNames("footerRight-social")}>
        <TelegramSVG />
        <InstagramSVG />
        <FacebookSVG />
        <VkSVG />
      </div>
    </div>
  );
});

export default FooterRight;
