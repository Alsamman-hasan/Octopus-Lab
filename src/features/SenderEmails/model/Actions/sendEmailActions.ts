import { createAction } from "@reduxjs/toolkit";

export interface ISendEmailsAction  {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  project?: string;
}

export const sendEmailAction = createAction<ISendEmailsAction>("SEND_EMAIL");
