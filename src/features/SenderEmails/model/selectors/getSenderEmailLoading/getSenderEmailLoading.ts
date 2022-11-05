import { StateSchema } from "app/providers/StorProvider";

export const getSenderEmailIsLaoding = (state: StateSchema) =>
  state?.senderEmailes?.loading || false;
