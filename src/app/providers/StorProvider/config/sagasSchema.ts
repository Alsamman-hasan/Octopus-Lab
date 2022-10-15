import { all } from "redux-saga/effects";
import { watcherSenderEmail } from "entities/SenderEmails/model/saga/senderEmailSaga";

function* saga() {
  yield all([
    watcherSenderEmail()
  ]);
}
export default saga;
