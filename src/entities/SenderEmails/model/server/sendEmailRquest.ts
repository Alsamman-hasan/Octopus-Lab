import { post } from "shared/config/API";
import { ISendEmailsAction } from "../Actions/sendEmailActions";


export const sendEmailRequest = (payload: ISendEmailsAction) => {
  const data = payload;
  return post("/sender-email", data);
};
