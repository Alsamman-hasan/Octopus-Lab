import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { validatorEmail } from "shared/lib/validation/validationForm";
import { sendEmail } from "../service/senderEmail/senderEmail";
import { SenderSchema } from "../types/senderSchema";

const initialState: SenderSchema = {
  name: "",
  email: "",
  phone: "",
  company: "",
  project: "",
  hasError: false,
  loading: false,
  isValidate: false,
};

const senderEmailSlice = createSlice({
  name: "EmailsSender",
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.isValidate = validatorEmail(payload);
      state.email = payload;
    },
    setPhone: (state, { payload }: PayloadAction<string>) => {
      state.phone = payload;
    },
    setCompony: (state, { payload }: PayloadAction<string>) => {
      state.company = payload;
    },
    setProject: (state, { payload }: PayloadAction<string>) => {
      state.project = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEmail.pending, (state, action) => {
        state.hasError = false;
        state.loading = true;
      })
      .addCase(sendEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.hasError = false;
        state.isValidate = false;
        state.name = "";
        state.email = "";
        state.phone = "";
        state.company = "";
        state.project = "";
      })
      .addCase(sendEmail.rejected, (state, action) => {
        state.loading = false;
        state.hasError = !!action.payload;
      });
  },
});

export const { actions: senderEmailActions } = senderEmailSlice;
export const { reducer: senderEmailReducer } = senderEmailSlice;
