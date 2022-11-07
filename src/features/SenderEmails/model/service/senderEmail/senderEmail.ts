import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StorProvider/config/StateSchema";
import { UiActions } from "entities/ToastUi";
import { getSenderEmailName } from '../../selectors/getSenderEmailName/getSenderEmailName';


export const sendEmail = createAsyncThunk<
  string,
  void,
  ThunkConfig<string>
>("emails/sendEmail", async (_, { dispatch, extra, rejectWithValue, getState }) => {
  const sendersData = getSenderEmailName(getState());
  if (!sendersData?.email || !sendersData.name) {
    return rejectWithValue("email and name are required")
  }
  try {
    const response = await extra.api.post<string>("/sender-email", sendersData);
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
