import { all } from "redux-saga/effects";
import { watcherSenderEmail } from "features/SenderEmails/model/saga/senderEmailSaga";

function* saga() {
  yield all([
    watcherSenderEmail()
  ]);
}
export default saga;
