import { StateSchema } from "app/providers/StorProvider";

export const getSenderEmailError = (state: StateSchema) =>
  state?.senderEmailes?.hasError
