import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { SenderSchema } from "../types/senderSchema"


const initialState: SenderSchema = {
  message: "",
  hasError: false,
  loading: false,
}

export const senderSlice = createSlice({
  name: "mailes",
  initialState,
  reducers: {
    setSendDats: (state, { payload }: PayloadAction<SenderSchema> ) => {
      state.hasError = payload.hasError;
      state.message = payload.message;
      state.loading = payload.loading;
    }
  },
})

export const { setSendDats } = senderSlice.actions;

export const senderReduser = senderSlice.reducer;