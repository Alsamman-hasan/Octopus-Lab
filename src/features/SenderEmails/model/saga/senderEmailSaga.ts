/* eslint-disable no-undef */
import { put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { setStatus } from "entities/ToastUi/model/slice/ToastUi";
import { setSendDats } from "../slice/SenderSlice";
import { sendEmailAction, ISendEmailsAction } from "../Actions/sendEmailActions";
import { sendEmailRequest } from "../server/sendEmailRquest";

export function* workerSenderEmail({ payload }: PayloadAction<ISendEmailsAction>) {
  try {
    yield put(setSendDats({hasError: false, loading:true, message:""}));
    const response: IResponse<string> = yield sendEmailRequest(payload);
    yield put(setSendDats({ hasError: false, loading: false, message: response.data }));
    yield put(setStatus({ message: response.data, status:"success" }));
    
  } catch (error) {
    yield put(setSendDats({ hasError: true, loading: false, message: "" }));
    yield put(setStatus({ message: error, status: "error" }));
  }
}

export function* watcherSenderEmail() {
  yield takeEvery(sendEmailAction.toString(), workerSenderEmail);
}

