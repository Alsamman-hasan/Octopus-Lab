import "./footerLeft.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { SenderEmailForm } from "entities/SenderEmails";

const FooterLeft = () => (
  <div className={classNames("footerLeft")}>
    <SenderEmailForm/>
  </div>
);

export default FooterLeft;
