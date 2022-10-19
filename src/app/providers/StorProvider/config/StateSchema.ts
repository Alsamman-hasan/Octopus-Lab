
import { CounterSchema } from "entities/Counter";
import { ToastUiSchema } from "entities/ToastUi";
import { SenderSchema } from "features/SenderEmails";

export interface StateSchema {
  counter: CounterSchema;
  mailes: SenderSchema
  toastUi: ToastUiSchema;
}