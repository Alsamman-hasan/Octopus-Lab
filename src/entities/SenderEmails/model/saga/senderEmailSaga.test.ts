import { takeEvery } from "redux-saga/effects";
import { sendEmailAction } from "../Actions/sendEmailActions";
import { sendEmailRequest } from "../server/sendEmailRquest";
import { watcherSenderEmail, workerSenderEmail } from "./senderEmailSaga";


describe("fetchAuthorsFromApi", () => {
  const genObject = watcherSenderEmail();

  it("should wait for every FETCH_AUTHORS action and call makeAuthorsApiRequest", () => {
    expect(genObject.next().value)
      .toEqual(takeEvery("SEND_EMAIL", workerSenderEmail));
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});