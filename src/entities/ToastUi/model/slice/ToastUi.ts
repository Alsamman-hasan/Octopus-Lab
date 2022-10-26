import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { ToastUiSchema } from "../types/ToastUiSchema";


const uiInitialState: ToastUiSchema = {
  status: "default",
  message: ""
}

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setStatus: (_, { payload }: PayloadAction<ToastUiSchema>) => {
      if (payload.status !== "default") {
        toast[payload.status](`${payload.message}`, {
          position: "top-right",
          autoClose: 2000,
          closeButton: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      }
    }
  }
})

export const { actions: UiActions } = uiSlice;

export const uiReduser = uiSlice.reducer


