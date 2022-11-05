import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StorProvider/config/StateSchema";
import { UiActions } from "entities/ToastUi";

export interface SendEmailProps {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  project?: string;
}

export const sendEmail = createAsyncThunk<
  string,
  SendEmailProps,
  ThunkConfig<string>
>("emails/sendEmail", async (data, { dispatch, extra, rejectWithValue }) => {
  try {
    const response = await extra.api.post<string>("/sender-email", data);
    if (!response.data) {
      throw new Error();
    }
    dispatch(
      UiActions.setStatus({ message: response.data, status: "success" }),
    );

    return response.data;
  } catch (e: Error | any) {
    dispatch(
      UiActions.setStatus({ message: e?.message as string, status: "error" }),
    );
    return rejectWithValue("error");
  }
});
