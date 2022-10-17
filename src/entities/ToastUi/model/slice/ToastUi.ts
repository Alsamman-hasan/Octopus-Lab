import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

export interface UIInterface {

}

const uiInitialState: UIInterface = {
}

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    setStatus: (_, { payload }: PayloadAction<{
      status: "error" | "success" | "warning" | "info" | "dark" | "default"
      message: string
    }>) => {
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

export const { setStatus } = uiSlice.actions

export const uiReduser = uiSlice.reducer


