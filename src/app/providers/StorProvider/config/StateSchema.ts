
import { CounterSchema } from "entities/Counter";
import { SenderSchema } from "entities/SenderEmails";

export interface StateSchema {
  counter : CounterSchema;
  mailes: SenderSchema
  toastUi: any;
}