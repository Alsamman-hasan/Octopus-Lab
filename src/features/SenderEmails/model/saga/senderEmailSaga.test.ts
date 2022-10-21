import axios from "axios";
import { runSaga } from "redux-saga";
import { takeEvery } from "redux-saga/effects";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StorProvider";
import { ISendEmailsAction, sendEmailAction } from "../Actions/sendEmailActions";
import { sendEmailRequest } from "../server/sendEmailRquest";
import { watcherSenderEmail, workerSenderEmail } from "./senderEmailSaga";

jest.mock("axios");

const mockedAxios = jest.mocked(axios);

describe("loginByUserName.test", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test("success login ", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: "message" }))
    const action = workerSenderEmail({ type: "SEND_EMAIL", payload: { name: "123", email: "1" } });

    const result = await runSaga({ dispatch, getState }, watcherSenderEmail);

    // expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    // expect(dispatch).toHaveBeenCalledTimes(3)
    expect(mockedAxios.post).toHaveBeenCalled()
    // expect(result.meta.requestStatus).toBe("fulfilled")
    // expect(result.payload).toEqual(userValue);
  })

  // test("error login", async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: "123", password: "123" });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(result.meta.requestStatus).toBe("rejected")
  //   expect(result.payload).toBe("error")
  // })
})
